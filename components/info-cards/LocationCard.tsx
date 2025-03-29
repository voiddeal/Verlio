"use client"

import FlipCard from "@/components/flip-card/FlipCard"
import { FaLocationDot } from "react-icons/fa6"

export default function LocationCard() {
  const front = (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#222222] text-white">
      <div>
        <FaLocationDot color="yellow" />
      </div>
      <div>Gonala. 6B</div>
      <small className="opacity-40">Click to Get Location</small>
    </div>
  )
  const back = (
    <div className="flex flex-col items-start justify-center">Back</div>
  )

  return (
    <FlipCard
      front={front}
      back={back}
      frontWidth="400px"
      frontHeight="200px"
      backWidth="400px"
      backHeight="200px"
    />
  )
}
