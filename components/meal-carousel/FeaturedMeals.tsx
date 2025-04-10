import MealCarousel from "@/components/meal-carousel/MealCarousel"
import MealPreview from "./MealPreview"
import { Meal } from "@/types/api"

export default async function FeaturedMeals() {
  const fetchMeals = async () => {
    const urls = [
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=53061",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52964",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52953",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52884",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=53013",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=53076",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52885",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855",
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52818",
    ]

    const meals = await Promise.allSettled(
      urls.map((url) =>
        fetch(url).then((response) => {
          if (!response.ok) {
            return Promise.reject(new Error(`HTTP error ${response.status}`))
          }
          return response
        })
      )
    )

    const mealData = await Promise.all(
      meals.map(async (result, index) => {
        if (result.status === "fulfilled") {
          return result.value
            .json()
            .then((data) => {
              if (!data.meals || data.meals.length === 0) {
                console.warn(`No meal data available for meal ${index + 1}`)
                return null
              }
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

    return mealData.filter((meal) => meal !== null)
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
