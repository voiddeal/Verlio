"use client"

import useBoundingClientRect from "@/hooks/useBoundingClientRect"
import Image from "next/image"
import { useRef } from "react"

export default function Carrot() {
  const image = useRef<HTMLImageElement>(null)
  const { top } = useBoundingClientRect(image)
  const breakpoints = "-right-56 sm:-right-40 md:-right-64"

  return (
    <Image
      ref={image}
      src="/carrot.png"
      width={500}
      height={500}
      alt="Carrot image"
      className={`absolute w-96 transition-transform duration-1000 ease-out my-auto inset-y-0 z-20  select-none ${breakpoints}`}
      style={{ transform: `translateY(${top * 0.2}px)` }}
      draggable={false}
    />
  )
}
