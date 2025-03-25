"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import MenuButton from "./MenuButton"
import { IoMenu } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"

import TopNavBG from "./TopNavBG"

export default function Header() {
  const sideNav = useRef<HTMLElement>(null)
  const [sideNavDisplay, setSideNavDisplay] = useState(false)

  const sideNavFocusOutHandler = (
    event: React.FocusEvent<HTMLElement, Element>
  ) => {
    const relatedTarget = event.relatedTarget
    if (!sideNav.current!.contains(relatedTarget)) {
      setSideNavDisplay(false)
    }
  }

  const openSideNav = () => {
    setSideNavDisplay(true)
    setTimeout(() => sideNav.current?.focus(), 0)
  }

  return (
    <header className="z-40 relative">
      {/* TOP NAV */}
      <nav className="fixed w-full">
        <TopNavBG />
        <div className="w-fit px-4 py-2 cursor-pointer" onClick={openSideNav}>
          <IoMenu className="text-white" size={40} />
        </div>
      </nav>
      {/* SIDE NAV */}
      <nav
        ref={sideNav}
        className={`fixed left-0 top-0 h-dvh flex flex-col bg-theme-blue-light transition-transform outline-none border-none duration-500 delay-0 ${
          sideNavDisplay ? "-translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(70vw, 400px)" }}
        onBlur={sideNavFocusOutHandler}
        tabIndex={-1}
      >
        {/* SIDE NAV close Button */}
        <div
          className="w-fit flex justify-center items-center ml-auto py-2 cursor-pointer"
          onClick={() => setSideNavDisplay(false)}
        >
          <IoCloseOutline size={40} className=" text-primary-default" />
        </div>
        {/* SIDE NAV Links */}
        <ul className="h-full flex flex-col gap-y-4 px-4 py-8 text-2xl font-bold text-primary-default overflow-y-auto">
          <li className="">
            <Link href="/" className="block py-2">
              HOME
            </Link>
          </li>
          <MenuButton />

          <li className="">
            <Link href="/" className="block py-2">
              HOURS + LOCATION
            </Link>
          </li>
          <li className="">
            <Link href="/" className="block py-2">
              ABOUT
            </Link>
          </li>
          <li className="">
            <Link href="/" className="block py-2">
              GALLERY
            </Link>
          </li>
          <li className="mt-auto">
            <Link
              href="/"
              className="block py-3 transition-colors bg-theme-green-light text-primary-default hover:bg-theme-green-default text-center"
            >
              TAKEOUT
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="block py-3 transition-colors bg-theme-green-light hover:bg-theme-green-default text-center"
            >
              RESERVE
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
