import Link from "next/link"
import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

export default function MenuButton() {
  const [isEnable, setIsEnable] = useState(false)
  const [categories, setCategories] = useState([])
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
  const categoryElements = categories.map((category) => {
    const { strCategory, idCategory } = category
    const categoryLink = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`

    return (
      <li key={idCategory}>
        <Link
          href={categoryLink}
          className="block px-4 py-2 text-primary-light text-base hover:text-primary-default"
        >
          {strCategory}
        </Link>
      </li>
    )
  })

  useEffect(() => {
    if (!isEnable) return
    setIsLoading(true)
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
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
      {categories.length || isError ? (
        <ul
          className={`mt-2 overflow-hidden transition-[max-height] duration-700 ${
            isOpen
              ? categories.length
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
