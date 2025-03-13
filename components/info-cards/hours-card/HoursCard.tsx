"use client"

import { useRef } from "react"
import { FaClock } from "react-icons/fa6"
import "./hours-card.css"

export default function HoursCard() {
  const face = useRef<HTMLDivElement>(null)
  const openCard = () => {
    face.current!.setAttribute("data-direction", "bottom")
    face.current!.classList.add("is-open")
  }
  const closeCard = () => {
    face.current?.classList.remove("is-open")
  }

  return (
    <div className="container">
      <div className="face" ref={face}>
        <div
          className="front absolute w-full h-full bg-[#222222] text-white cursor-pointer flex flex-col justify-center items-center"
          onClick={openCard}
        >
          <FaClock color="yellow" />
          <div>Today at 8am-9pm</div>
          <div className="text-sm opacity-40">Open Time</div>
        </div>
        <div
          className="back flex flex-col items-start justify-center"
          onClick={closeCard}
        ></div>
      </div>
    </div>
  )
}
