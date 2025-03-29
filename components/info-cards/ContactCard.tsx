"use client"

import FlipCard from "@/components/flip-card/FlipCard"
import { FaPhone } from "react-icons/fa6"

export default function ContactCard() {
  const front = (
    <div className="w-full h-full bg-[#222222] text-white text-center flex flex-col justify-center items-center">
      <FaPhone color="yellow" />
      <div>
        <span className="bg-black bg-opacity-50 px-px">+1</span>{" "}
        <span>123 4567</span>
      </div>
      <div className="text-sm opacity-40">Call Us</div>
    </div>
  )

  const back = (
    <div className="">
      <div>
        <span className="bg-black bg-opacity-50 px-px">+25</span>{" "}
        <span>123 4567</span>
      </div>
      <div>
        <span className="bg-black bg-opacity-50 px-px">+98</span>{" "}
        <span>123 456 7890</span>
      </div>
    </div>
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
