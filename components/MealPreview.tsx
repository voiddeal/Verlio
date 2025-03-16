"use client"

import Image from "next/image"
import { useState } from "react"
import errorImage from "@/public/error-image.png"

export default function MealPreview({ meal }) {
  if (meal === null) {
    return (
      <div className="w-full flex justify-center border-white border-2">
        <Image
          src={errorImage}
          alt="image"
          width={300}
          height={200}
          className="m-auto"
        />
      </div>
    )
  }
  const { idMeal, strMealThumb, strMeal } = meal
  const [imgSrc, setImgSrc] = useState(strMealThumb)
  const ingredients = Object.keys(meal)
    .filter((key) => key.includes("strIngredient"))
    .map((key) => meal[key])

  return (
    <div key={idMeal} className="border-white border-2">
      <div className="bg-green-200">
        <Image
          src={imgSrc}
          alt="image"
          width={200}
          height={200}
          className="m-auto border-8 border-white rounded-full"
          onError={() => setImgSrc(errorImage)}
        />
      </div>
      <div className="text-left px-5">
        <span className="text-lg">{strMeal}</span>
        <br />
        <span className="text-sm">
          Ingredients:{" "}
          <span className="text-primary-light">
            {ingredients.slice(0, 3).join(", ")}
          </span>
        </span>
      </div>
    </div>
  )
}
