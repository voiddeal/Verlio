"use client"

import data from "@/db/bottom-nav.json"
import { IoCallOutline } from "react-icons/io5"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiFoodMenu } from "react-icons/bi"
import { MdOutlineShoppingBag } from "react-icons/md"
import { MdOutlineTableRestaurant } from "react-icons/md"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"
import { lazy, Suspense } from "react"
import LocationModal from "@/components/LocationModal"

const Portal = lazy(() => import("@/components/Portal"))

export default function BottomNavbar() {
  const dispatch = useAppDispatch()
  const { locationModalDisplay } = useAppSelector((state) => state.app)
  const btnClasses =
    "flex flex-col h-full justify-center items-center gap-y-1 text-sm flex-1 hover:bg-paperHover cursor-pointer"
  const iconSize = 16

  const buttons = data.map((entry) => {
    const { name, href } = entry
    const lowerCaseName = name.toLowerCase()
    const icon = () => {
      switch (lowerCaseName) {
        case "menus":
          return <BiFoodMenu size={iconSize} />
        case "order":
          return <MdOutlineShoppingBag size={iconSize} />
        case "reserve":
          return <MdOutlineTableRestaurant size={iconSize} />
      }
    }

    return (
      <Link key={name} className={btnClasses} href={href}>
        {icon()}
        {name}
      </Link>
    )
  })

  const callButton = (
    <a href="tel:+989100781081" className={btnClasses}>
      <IoCallOutline size={iconSize} />
      Call
    </a>
  )

  const locationButton = (
    <button
      className={btnClasses}
      onClick={() => dispatch(appActions.setLocationModalDisplay(true))}
    >
      <HiOutlineLocationMarker size={iconSize} />
      Location
    </button>
  )

  return (
    <>
      <nav className="w-full h-14 fixed bottom-0 flex justify-evenly items-center bg-paper z-30">
        {buttons}
        {callButton}
        {locationButton}
      </nav>
      {locationModalDisplay && (
        <Suspense>
          <Portal>
            <LocationModal />
          </Portal>
        </Suspense>
      )}
    </>
  )
}
