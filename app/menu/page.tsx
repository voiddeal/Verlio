import Heading from "@/components/Heading"
import MenuesSidebar from "@/components/MenuesSidebar"
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
        id={strCategory.toLowerCase()}
        key={strCategory}
        className="relative block my-6 h-80 menu-item rounded-xl overflow-hidden group"
      >
        <Image
          src={`/menu/${strCategory.toLowerCase()}.jpg`}
          fill
          sizes="(min-width: 640px) 75vw ,(min-width: 768px) 60vw ,(min-width: 1024px) 50vw, 90vw"
          placeholder="empty"
          alt={`${strCategory} image`}
          className="object-cover group-hover:scale-105 group-hover:opacity-90 transition-[transform_opacity]"
        />
        <div className="absolute bottom-0 w-full p-4 text-3xl text-white bg-black/60 backdrop-blur-[2px] text-center">
          {strCategory}
        </div>
      </Link>
    )
  })

  return (
    <main className="">
      {/* Main Content */}
      <header className="relative">
        <Image
          src={"/menu-header.jpg"}
          fill
          alt="menu booklet image"
          className="object-cover"
        />

        <Heading heading="MENUS" />
      </header>
      <section className="relative flex flex-col sm:flex-row">
        {/* Sidebar */}
        <MenuesSidebar categories={categories} />
        {/* Menus */}
        <section className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto rounded-lg overflow-hidden">
          <div className="border-y-2 border-gray-300 my-6">{menuItems}</div>
        </section>
      </section>
    </main>
  )
}
