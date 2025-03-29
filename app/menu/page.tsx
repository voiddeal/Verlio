import { CategoryList } from "@/types/api"
import Image from "next/image"
import Link from "next/link"

export default async function RecipesPage() {
  const req = await fetch(
    // "https://www.themealdb.com/api/json/v1/1/categories.php"
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  )
  const data: CategoryList = await req.json()
  const categories = data.meals
  const menuItems = categories.map((category) => {
    const { strCategory } = category
    const name = strCategory === "Miscellaneous" ? "Fast Food" : strCategory

    return (
      <Link
        href={`/menu/${strCategory.toLowerCase()}`}
        key={strCategory}
        className="relative block my-6"
      >
        <Image
          src={`/menu/${strCategory.toLowerCase()}.jpg`}
          width={1000}
          height={1000}
          alt={`${strCategory} image`}
          className="rounded-lg"
        />
        <div className="absolute bottom-0 w-full p-4 text-3xl text-white bg-black/60 backdrop-blur-[2px] rounded-es-lg rounded-ee-lg">
          {name}
        </div>
      </Link>
    )
  })

  return (
    <div>
      <div className="w-11/12 sm:w-9/12 mx-auto rounded-lg">
        <div className="text-4xl text-center py-8">MENUS</div>
        <div className="border-y-2 my-6">{menuItems}</div>
      </div>
    </div>
  )
}
