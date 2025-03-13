"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Menu from "./side-nav/Menu"
import { isBrowser } from "@/utils/isBrowser"
import { IoMenu } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"

export default function Header() {
  const topNav = useRef<HTMLElement>(null)
  const sideNav = useRef<HTMLElement>(null)
  const topNavBG = useRef<HTMLDivElement>(null)
  const viewWidth = useRef<number>(isBrowser() ? window.innerWidth : 0)
  const [sideNavDisplay, setSideNavDisplay] = useState(false)
  const CTA_DISPLAY_WIDTH_THRESHOLD: number = 768
  const shouldShowNavbarCTA = useRef<boolean>(
    isBrowser() && viewWidth.current > CTA_DISPLAY_WIDTH_THRESHOLD
  )

  const handleScroll = () => {
    const y = window.scrollY
    const topNavHeight = topNav.current?.scrollHeight

    if (y > 100) topNavBG.current!.style.height = `${topNavHeight}px`
    else topNavBG.current!.style.height = "0px"
  }
  const handleResize = () => {
    if (!window) return
    viewWidth.current = window.innerWidth
    shouldShowNavbarCTA.current =
      viewWidth.current > CTA_DISPLAY_WIDTH_THRESHOLD
  }

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
      {/* TOP NAV */}
      <nav
        className="fixed w-full flex justify-between items-center"
        ref={topNav}
      >
        <div
          ref={topNavBG}
          className="absolute bg-[#e4b257] w-full transition-[height] -z-10 self-start"
        ></div>
        <div className="px-4 py-2 cursor-pointer" onClick={openSideNav}>
          <IoMenu color="white" size={40} />
        </div>
        <div className="px-4 py-2 cursor-pointer">
          <Link
            href="/"
            className="text-stone-100 hover:text-theme-default block text-xl"
          >
            Verlio
          </Link>
        </div>
      </nav>
      {/* SIDE NAV */}
      <nav
        ref={sideNav}
        className={`h-screen flex flex-col bg-theme-blue-light fixed left-0 top-0 transition-all outline-none border-none ${
          sideNavDisplay === false ? "-translate-x-full" : ""
        }`}
        style={sideNavDisplay ? { width: "min(70vw, 400px)" } : undefined}
        onBlur={sideNavFocusOutHandler}
        tabIndex={-1}
      >
        {/* X Button */}
        <div
          className="w-fit flex justify-center items-center ml-auto py-2 cursor-pointer"
          onClick={() => setSideNavDisplay(false)}
        >
          <IoCloseOutline size={40} className=" text-primary-default" />
        </div>
        {/* Links */}
        <ul className="h-full flex flex-col gap-y-4 px-4 py-8 text-2xl font-bold text-primary-default overflow-y-auto">
          <li className="">
            <Link href="/" className="block py-2">
              HOME
            </Link>
          </li>
          <Menu />

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
