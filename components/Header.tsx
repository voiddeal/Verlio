"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { isBrowser } from "@/utils/isBrowser"
import { IoMenu } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"

export default function Header() {
  const sideNav = useRef<HTMLElement>(null)
  const viewWidth = useRef<number>(isBrowser() ? window.innerWidth : 0)
  const [sideNavDisplay, setSideNavDisplay] = useState(true)
  const CTA_DISPLAY_WIDTH_THRESHOLD: number = 768
  const shouldShowNavbarCTA = useRef<boolean>(
    isBrowser() && viewWidth.current > CTA_DISPLAY_WIDTH_THRESHOLD
  )

  const handleScroll = () => {}
  const handleResize = () => {
    if (!window) return
    viewWidth.current = window.innerWidth
    shouldShowNavbarCTA.current =
      viewWidth.current > CTA_DISPLAY_WIDTH_THRESHOLD
    console.log(shouldShowNavbarCTA.current)
  }

  const sideNavFocusOutHandler = (event) => {
    if (!sideNav.current!.contains(event.relatedTarget)) {
      setSideNavDisplay(false)
    }
  }

  const openSideNav = () => {
    setSideNavDisplay(true)
    setTimeout(() => sideNav.current?.focus(), 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="z-50 transition-all relative">
      <nav className="fixed">
        <div className="px-4 py-2 cursor-pointer" onClick={openSideNav}>
          <IoMenu color="white" size={40} />
        </div>
        <div>
          <span></span>
        </div>
      </nav>
      <nav
        ref={sideNav}
        className={`h-screen flex flex-col bg-theme-blue-light fixed left-0 top-0 transition-all outline-none border-none ${
          sideNavDisplay === false ? "-translate-x-full" : ""
        }`}
        style={sideNavDisplay ? { width: "min(70vw, 400px)" } : undefined}
        // onBlur={sideNavFocusOutHandler}
        tabIndex={-1}
      >
        <div
          className="w-fit flex justify-center items-center ml-auto py-2 cursor-pointer"
          onClick={() => setSideNavDisplay(false)}
        >
          <IoCloseOutline size={40} className=" text-primary-default" />
        </div>
        <ul className="h-full flex flex-col gap-y-4 px-4 py-8 text-2xl font-bold text-primary-default overflow-y-auto">
          {/* <li className="flex-grow">
            <Link
              href="/"
              className="text-stone-100 hover:text-theme-default block text-[16px]"
            >
              Verlio
            </Link>
          </li> */}
          <li className="">
            <Link href="/" className="block py-2">
              HOME
            </Link>
          </li>
          {/* <li className="">
            <Link href="/" className="block py-2">
              MENU
            </Link>
          </li> */}
          <li className="">
            <div className="block py-2">
              {/* Hidden checkbox to control the dropdown */}
              <input
                type="checkbox"
                id="dropdown-checkbox"
                className="hidden peer"
              />

              {/* Button (Label) */}
              <label
                htmlFor="dropdown-checkbox"
                className="inline-block py-2 pr-6 text-primary-default peer-focus:outline-none cursor-pointer"
              >
                Menu
              </label>
              <div className="inline-block peer-checked:rotate-180 transition-transform">
                <IoIosArrowDown className="" />
              </div>

              {/* Dropdown Menu */}
              <ul className="mt-2 hidden peer-checked:block">
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-primary-light text-base"
                  >
                    Option 1
                  </Link>
                </li>
              </ul>
            </div>
          </li>
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
