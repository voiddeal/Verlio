import { CategoryList } from "@/types/api"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

interface Props {
  closeSideNav: () => void
}

export default function MenuButton({ closeSideNav }: Props) {
  const [isEnable, setIsEnable] = useState(false)
  const [categories, setCategories] = useState<CategoryList>()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleClick = () => {
    setIsEnable(true)
    setIsOpen((current) => !current)
  }

  const errorElement = (
    <li className="text-sm text-red-500">error fetching menu</li>
  )
  const categoryElements = categories?.meals.map((category, index) => {
    const { strCategory } = category
    const categoryLink = `/menu/${strCategory.toLowerCase()}`

    return (
      <li key={index}>
        <Link
          href={categoryLink}
          className="block px-4 py-2 text-primary-light text-base hover:text-primary-default"
          onClick={() => closeSideNav()}
        >
          {strCategory}
        </Link>
      </li>
    )
  })

  useEffect(() => {
    if (!isEnable) return
    setIsLoading(true)
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false)
        setIsOpen(true)
      })
  }, [isEnable])

  if (isLoading) return <li className="block py-2 text[1rem]">Loading...</li>

  return (
    <li onClick={handleClick}>
      <div className="block py-2 pr-6 text-primary-default cursor-pointer">
        MENU
        <div
          className={`inline-block px-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </div>
      </div>
      {categories?.meals.length || isError ? (
        <ul
          className={`mt-2 overflow-hidden transition-[max-height] duration-700 ${
            isOpen
              ? categories?.meals.length
                ? "max-h-[560px]"
                : "max-h-5"
              : "max-h-0"
          }`}
        >
          {isError ? errorElement : categoryElements}
        </ul>
      ) : null}
    </li>
  )
}
