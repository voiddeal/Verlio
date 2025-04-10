import FlipCard from "@/components/flip-card/FlipCard"
import Heading from "@/components/Heading"
import BackView from "@/components/meal-card/BackView"
import FrontView from "@/components/meal-card/front-view/FrontView"
import type { MealList } from "@/types/api"
import { CgArrowLongRight } from "react-icons/cg"
import Image from "next/image"
import Link from "next/link"

interface Props {
  params: Promise<{ category: string }>
}

export default async function Category({ params }: Props) {
  const { category } = await params
  const data: MealList = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      throw new Error(err)
    })

  const meals = data.meals
  const mealElements = meals.map((meal) => {
    const { idMeal, strMeal, strMealThumb } = meal

    return (
      <FlipCard
        id={idMeal}
        key={idMeal}
        size="300px"
        duration={1200}
        direction="top"
        front={
          <FrontView
            idMeal={idMeal}
            strMeal={strMeal}
            strMealThumb={strMealThumb}
          />
        }
        back={
          <BackView
            idMeal={idMeal}
            strMeal={strMeal}
            strMealThumb={strMealThumb}
          />
        }
      />
    )
  })

  const backButton = (
    <Link
      href={"/menu"}
      className="flex items-center py-2 px-4 bg-theme-blue-dark text-white rounded-lg w-fit mx-auto my-5 group hover:bg-theme-blue-dark/90"
    >
      <CgArrowLongRight
        size={20}
        className="scale-x-[-1] group-hover:-translate-x-2 transition-transform"
      />
      <button type="button" className="py-2 px-4">
        Back to Menu
      </button>
    </Link>
  )

  return (
    <main>
      <header className="relative overflow-hidden">
        <Heading heading={category.toUpperCase()} />
        <Image
          fill
          src={`/menu/${category.toLowerCase()}.jpg`}
          alt="man cooking"
          className="object-cover -z-20 object-center"
        />
      </header>
      {backButton}
      <section className="w-11/12 sm:w-9/12 mx-auto rounded-lg">
        <div className="border-y-2 border-gray-300 my-6 py-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
          {mealElements}
        </div>
      </section>
      {backButton}
    </main>
  )
}
