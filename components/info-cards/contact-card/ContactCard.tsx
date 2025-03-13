"use client"

import { useRef } from "react"
import { FaPhone } from "react-icons/fa6"
import "./contact-card.css"

export default function ContactCard() {
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
          className="front absolute w-full h-full bg-[#222222] text-white cursor-pointer text-center flex flex-col justify-center items-center"
          onClick={openCard}
        >
          <FaPhone color="yellow" />
          <div>
            {" "}
            <span className="bg-black bg-opacity-50 px-px">+1</span>{" "}
            <span>123 4567</span>
          </div>
          <div className="text-sm opacity-40">Call Us</div>
        </div>
        <div
          className="back flex flex-col items-start justify-center"
          onClick={closeCard}
        >
          <div>
            {" "}
            <span className="bg-black bg-opacity-50 px-px">+25</span>{" "}
            <span>123 4567</span>
          </div>
          <div>
            <span className="bg-black bg-opacity-50 px-px">+98</span>{" "}
            <span>123 456 7890</span>
          </div>
        </div>
      </div>
    </div>
  )
}
