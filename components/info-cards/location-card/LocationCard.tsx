"use client"

import { useRef } from "react"
import { FaLocationDot } from "react-icons/fa6"
import "./location-card.css"

export default function LocationCard() {
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
          className="front flex flex-col justify-center items-center absolute w-full h-full bg-[#222222] text-white cursor-pointer"
          onClick={openCard}
        >
          <div>
            <FaLocationDot color="yellow" />
          </div>
          <div>Gonala. 6B</div>
          <small className="opacity-40">Click to Get Location</small>
        </div>
        <div
          className="back flex flex-col items-start justify-center"
          onClick={closeCard}
        ></div>
      </div>
    </div>
  )
}
