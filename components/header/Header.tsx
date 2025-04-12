"use client"

import { useAppDispatch } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"
import Link from "next/link"
import { useRef, useState } from "react"
import { IoCloseOutline, IoMenu } from "react-icons/io5"
import MenuButton from "./MenuButton"
import TopNavBG from "./TopNavBG"

export default function Header() {
  const dispatch = useAppDispatch()
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
      <nav className="fixed w-dvw">
        <TopNavBG />
        <div className="w-fit px-4 py-2 cursor-pointer" onClick={openSideNav}>
          <IoMenu className="text-white" size={40} />
        </div>
      </nav>
      {/* SIDE NAV */}
      <nav
        ref={sideNav}
        className={`fixed left-0 top-0 h-dvh flex flex-col bg-theme-blue-light transition-transform outline-none border-none duration-[400ms] ease-out delay-0 ${
          sideNavDisplay ? "-translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(70dvw, 400px)" }}
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
          <li>
            <Link
              href="/"
              className="block py-2"
              onClick={() => setSideNavDisplay(false)}
            >
              HOME
            </Link>
          </li>
          <MenuButton closeSideNav={() => setSideNavDisplay(false)} />

          <li>
            <button
              className="block py-2"
              onClick={() => {
                setSideNavDisplay(false)
                dispatch(appActions.setLocationModalDisplay(true))
              }}
            >
              HOURS + LOCATION
            </button>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2"
              onClick={() => setSideNavDisplay(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="block py-2"
              onClick={() => setSideNavDisplay(false)}
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="block py-2"
              onClick={() => setSideNavDisplay(false)}
            >
              BLOGS
            </Link>
          </li>
          <li>
            <Link
              href="/reservation"
              className="block py-3 transition-colors bg-theme-green-light hover:bg-theme-green-default text-center"
              onClick={() => setSideNavDisplay(false)}
            >
              RESERVE
            </Link>
          </li>
          <li className="mt-auto block py-3 bg-theme-green-dark/40 text-primary-light text-center cursor-not-allowed">
            TAKEOUT
          </li>
        </ul>
      </nav>
    </header>
  )
}
