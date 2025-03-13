import Link from "next/link"
import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

export default function Menu() {
  const [enable, setEnable] = useState(false)
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!enable) return
    setIsLoading(true)
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [enable])

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
          className="block px-4 py-2 text-primary-light text-base"
        >
          {strCategory}
        </Link>
      </li>
    )
  })

  if (isLoading) return <li className="block py-2 text[1rem]">Loading...</li>

  return (
    <li onClick={() => setEnable(true)}>
      <input
        type="checkbox"
        id="dropdown-checkbox"
        className="hidden peer"
        defaultChecked={isError || !!categories.length}
      />
      <label
        htmlFor="dropdown-checkbox"
        className="block py-2 pr-6 text-primary-default peer-focus:outline-none cursor-pointer peer-checked"
      >
        MENU
        <div className="inline-block transition-transform pl-4">
          <IoIosArrowDown />
        </div>
      </label>
      {categories.length || isError ? (
        <ul className="mt-2 overflow-hidden max-h-0 peer-checked:max-h-[560px] transition-all duration-700">
          {isError ? errorElement : categoryElements}
        </ul>
      ) : null}
    </li>
  )
}
