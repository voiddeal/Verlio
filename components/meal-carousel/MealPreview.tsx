import Image from "next/image"
import errorImage from "@/public/error-image.png"
import { Meal } from "@/types/api"

interface Props {
  meal: Meal
}

export default function MealPreview({ meal }: Props) {
  if (meal === null) {
    return (
      <div className="w-full flex justify-center border-white border-2">
        <Image
          src={errorImage}
          alt="image"
          width={300}
          height={300}
          className="m-auto"
        />
      </div>
    )
  }
  const { idMeal, strMealThumb, strMeal, strCategory } = meal
  const ingredients = Object.keys(meal)
    .filter((key): key is keyof Meal => key.includes("strIngredient"))
    .map((key) => meal[key])

  return (
    <a
      href={`/menu/${strCategory?.toLowerCase()}/#${idMeal}`}
      key={idMeal}
      className="border-white border-2 bg-green-200 relative"
      title={strMeal}
    >
      <div className="bg-transparent">
        <Image
          src={strMealThumb}
          alt="image"
          width={200}
          height={200}
          className="m-auto border-8 border-white rounded-full"
        />
      </div>
      <div className="text-left px-5 bg-green-300">
        <span className="text-lg text-primary-default line-clamp-1 pt-1">
          {strMeal}
        </span>
        <br />
        <span className="text-sm text-primary-default">
          Ingredients:{" "}
          <span className="text-primary-light line-clamp-1">
            {ingredients.slice(0, 3).join(", ")}
          </span>
        </span>
      </div>
    </a>
  )
}
