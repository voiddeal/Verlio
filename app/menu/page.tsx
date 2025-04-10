import Heading from "@/components/Heading"
import { CategoryList } from "@/types/api"
import Image from "next/image"
import Link from "next/link"

export default async function RecipesPage() {
  const req = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  ).catch((err) => {
    throw new Error(err)
  })
  const data: CategoryList = await req.json()
  const categories = data.meals
  const menuItems = categories.map((category) => {
    const { strCategory } = category

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
          {strCategory}
        </div>
      </Link>
    )
  })

  return (
    <main>
      <header>
        <Heading heading="MENUS" />
      </header>
      <section className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto rounded-lg">
        <div className="border-y-2 border-gray-300 my-6">{menuItems}</div>
      </section>
    </main>
  )
}
