import MealCarousel from "@/components/meal-carousel/MealCarousel"
import MealPreview from "./MealPreview"
import { Meal } from "@/types/api"

export default async function FeaturedMeals() {
  const fetchMeals = async () => {
    const meals = await Promise.allSettled([
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=53061"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52964"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52953"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52884"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=53013"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=53076"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52885"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855"),
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52818"),
    ])

    const mealData = await Promise.all(
      meals.map(async (result, index) => {
        if (result.status === "fulfilled") {
          return result.value
            .json()
            .then((data) => {
              return data.meals[0]
            })
            .catch((jsonError) => {
              console.error(
                `Error parsing JSON for meal ${index + 1}:`,
                jsonError
              )
              return null
            })
        } else {
          console.error(`Error fetching meal ${index + 1}:`, result.reason)
          return null
        }
      })
    )
    return mealData
  }

  const data: Meal[] = await fetchMeals()
  const meals = data.map((meal) => {
    return <MealPreview meal={meal} />
  })

  return (
    <div className="py-5 my-10">
      <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6"></div>
      <header className="my-8">
        <h4 className="text-3xl text-center text-orange">Trendy Recipes</h4>
      </header>
      <MealCarousel meals={meals} />
    </div>
  )
}
