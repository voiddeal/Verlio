import FlipCard from "@/components/flip-card/FlipCard"
import BackView from "@/components/meal-card/BackView"
import FrontView from "@/components/meal-card/FrontView"
import { MealList } from "@/types/api"
import Error from "next/error"

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

  const meals = data.meals
  const mealElements = meals.map((meal) => {
    const { idMeal, strMeal, strMealThumb } = meal

    return (
      <FlipCard
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

  return (
    <div>
      <div className="w-11/12 sm:w-9/12 mx-auto rounded-lg">
        <div className="text-4xl text-center py-4">MENUS</div>
        <div className="border-y-2 my-6 py-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5">
          {mealElements}
        </div>
      </div>
    </div>
  )
}
