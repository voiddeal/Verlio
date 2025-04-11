"use client"

import useBoundingClientRect from "@/hooks/useBoundingClientRect"
import { useRef } from "react"

interface Props {
  heading: string
}

export default function Heading({ heading }: Props) {
  const headingRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLHeadingElement>(null)
  const { left, top, width, height } = useBoundingClientRect(headingRef)
  const intensity = 10

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX - left // Mouse X relative to div
    const y = e.clientY - top // Mouse Y relative to div
    const moveX = (x / width - 0.5) * intensity
    const moveY = (y / height - 0.5) * intensity

    if (headingRef.current) {
      headingRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }
  }

  // const handleMouseLeave = () => {
  //   if (headingRef.current) {
  //     headingRef.current.style.transform = "translate(0px, 0px)" // Reset position
  //   }
  // }

  return (
    <div
      ref={containerRef}
      className="relative h-[50dvh] flex items-center justify-center overflow-hidden bg-paper/70"
      onMouseMove={handleMouseMove}
    >
      <h1
        ref={headingRef}
        className="text-5xl font-bold transition-transform duration-1000 ease-out text-white text-center px-4"
      >
        {heading}
      </h1>
    </div>
  )
}
