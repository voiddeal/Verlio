"use client"

import FlipCard from "@/components/flip-card/FlipCard"
import { FaClock } from "react-icons/fa6"

export default function HoursCard() {
  const front = (
    <div className="w-full h-full bg-[#222222] text-white cursor-pointer flex flex-col justify-center items-center">
      <FaClock color="yellow" />
      <div>Today at 8am-9pm</div>
      <div className="text-sm opacity-40">Open Time</div>
    </div>
  )
  const back = (
    <div className="flex flex-col items-center justify-center bg-[#222222]">
      HOURS CARD BACK
    </div>
  )

  return (
    <FlipCard
      back={back}
      front={front}
      frontWidth="400px"
      frontHeight="200px"
      backWidth="400px"
      backHeight="200px"
    />
  )
}
