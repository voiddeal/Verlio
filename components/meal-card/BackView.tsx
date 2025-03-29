"use client"

import Image from "next/image"
import { MealDetail, Meal } from "@/types/api"
import { useContext, useEffect, useRef, useState } from "react"
import { FlipContext } from "../flip-card/FlipCard"
import { MdOutlineSource } from "react-icons/md"
import { FaYoutube } from "react-icons/fa6"

export default function BackView({ idMeal, strMeal, strMealThumb }: Meal) {
  const { isFlipped } = useContext(FlipContext)
  const [data, setData] = useState<MealDetail>()
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>()
  const back = useRef<HTMLDivElement>(null)
  const hasTriggered = useRef<boolean>(false) // prevent re-fetching
  const content = () => {
    if (isLoading)
      return (
        <div className="w-full h-full flex justify-center items-center text-xl text-white">
          <div className="w-20 h-20 border-x-2 rounded-full animate-spin"></div>
        </div>
      )

    if (error)
      return (
        <div className="flex justify-center items-center text-xl text-white">
          Error fetching meal datails
        </div>
      )

    if (data) {
      const meal = data.meals[0]
      const { idMeal, strMeal, strSource, strYoutube, strArea } = meal
      const ingredientsArray: string[] = []
      Object.entries(meal).forEach(([key, value]) => {
        if (key.includes("strIngredient") && value) {
          ingredientsArray.push(value)
        }
      })
      const ingredients = ingredientsArray.map((ing, index) => (
        <span
          key={index}
          className="inline-block p-1 m-1 bg-theme-blue-dark text-white text-sm"
        >
          {ing}
        </span>
      ))

      return (
        <div className="relative w-full h-full text-white flex flex-col ">
          <div className="p-2 text-lg border-b-2 flex justify-between items-center">
            <div>origin: {strArea}</div>
            <div className="flex gap-x-2">
              <a
                href={strSource || undefined}
                target="_blank"
                rel="noopener noreferrer"
                title="source"
              >
                <MdOutlineSource className="size-10" />
              </a>
              <a
                href={strYoutube || undefined}
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <FaYoutube className="text-red-500 size-10" />
              </a>
            </div>
          </div>
          <div className="p-2 overflow-y-auto">
            <span>Ingrediants:</span>
            <div className="inline px-2 ">{ingredients}</div>
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
    if (!isFlipped || hasTriggered.current) return // if the card is not flipped yet; exit.
    async function fetchData() {
      setIsLoading(true)
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          hasTriggered.current = true
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false))
    }

    fetchData()
  }, [isFlipped])

  return (
    <div
      ref={back}
      className="relative w-full h-full block rounded-lg cursor-pointer"
    >
      <Image
        src={strMealThumb}
        alt={strMeal}
        fill
        className="rounded-lg object-cover"
        draggable={false}
      />
      <div className="w-full h-full bg-black/60 backdrop-blur-[2px] rounded-[inherit]">
        {content()}
      </div>
    </div>
  )
}
