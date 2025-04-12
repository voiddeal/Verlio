"use client"

import { useState, useEffect } from "react"

interface Props {
  categories: {
    strCategory: string
  }[]
}

export default function MenuesSidebar({ categories }: Props) {
  const [activeLink, setActiveLink] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".menu-item")
      let currentActive: string | null = null

      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentActive = item.id
        }
      })

      setActiveLink(currentActive || "")
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sidebarLinks = categories.map((category) => {
    const { strCategory } = category
    const isActive = activeLink === strCategory.toLowerCase()

    return (
      <a
        key={strCategory}
        href={`#${strCategory.toLowerCase()}`}
        className={`block px-4 py-4 sm:py-2 hover:bg-gray-200 ${
          isActive ? "bg-gray-300 font-bold text-blue-500" : ""
        }`}
      >
        {strCategory}
      </a>
    )
  })

  return (
    <aside className="sticky top-14 sm:h-[calc(100vh-112px)] w-full sm:w-fit z-10 overflow-auto shadow-2xl lg:ml-10 bg-gray-100">
      <nav className="flex flex-row sm:flex-col text-primary-default">
        {sidebarLinks}
      </nav>
    </aside>
  )
}
