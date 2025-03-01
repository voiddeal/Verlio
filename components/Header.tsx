"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const header = useRef<HTMLElement>(null)
  const navbarDetachmentThreshold = 20
  const shouldNavbarDetach = () => {
    if (typeof window !== "undefined") {
      return window.scrollY > navbarDetachmentThreshold
    }
  }

  const [isNavbarDetached, setIsNavbarDetached] = useState(shouldNavbarDetach())
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {}
  const handleClose = () => {}

  const handleScroll = () => {
    if (shouldNavbarDetach()) {
      setIsNavbarDetached(true)
    } else {
      setIsNavbarDetached(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      ref={header}
      className={`fixed top-0 inset-x-0 m-auto z-10 transition-all duration-500 ${
        isNavbarDetached ? "top-5 w-10/12 bg-opacity-40 rounded-lg" : ""
      }`}
    >
      <nav className="bg-stone-950 bg-opacity-[inherit] backdrop-blur-lg rounded-[inherit] text-stone-100">
        <ul className="flex items-center gap-x-4 h-10">
          <li className="flex-grow">
            <Link href="/" className="hover:text-text-default">
              Verlio
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="h-full px-4 text-text-default hover:text-text-light transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="h-full px-4 text-text-default hover:text-text-light transition-colors"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="h-full px-4 text-text-default hover:text-text-light transition-colors"
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="h-full px-4 text-text-default hover:text-text-light transition-colors"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="h-full px-4 text-text-default hover:text-text-light transition-colors"
            >
              Discover
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
