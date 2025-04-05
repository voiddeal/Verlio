"use client"

import { useAppSelector } from "@/redux/hooks"
import { CiLock } from "react-icons/ci"

interface Props {
  originStep: number
}

export default function LockOverlay({ originStep }: Props) {
  const { currentReservationStep } = useAppSelector((state) => state.app)
  const overlay = (
    <div
      className={`absolute w-full h-full bg-black backdrop-blur-md text-center text-white text-lg z-10 ${
        originStep === 2
          ? "bg-opacity-90"
          : "bg-opacity-60 flex justify-center items-center"
      }`}
    >
      <CiLock
        className={`inline-block m-auto size-36 ${
          originStep === 2 ? "mt-10" : ""
        }`}
      />
    </div>
  )
  const one = currentReservationStep === 1 && originStep === 2
  const two = currentReservationStep === 2 && originStep === 1

  if (one) return overlay
  if (two) return overlay

  return null
}
