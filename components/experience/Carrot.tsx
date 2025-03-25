"use client"

import useBoundingClientRect from "@/hooks/useBoundingClientRect"
import Image from "next/image"
import { useRef } from "react"

export default function Carrot() {
  const image = useRef<HTMLImageElement>(null)
  const { top } = useBoundingClientRect(image)
  const queries = "-right-56 sm:-right-40 md:-right-64"

  return (
    <Image
      ref={image}
      src="/carrot.png"
      width={500}
      height={500}
      alt="Carrot image"
      className={`absolute w-96 transition-transform duration-1000 ease-out my-auto inset-y-0 z-20 drop-shadow-[0_0_30px_rgba(0,0,0,0.6)] select-none ${queries}`}
      style={{ transform: `translateY(${top * 0.2}px)` }}
      draggable={false}
    />
  )
}
