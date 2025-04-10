"use client"

import useSmoothAnimation from "@/hooks/useViewportAnimation"
import useScrollTracker from "@/hooks/useScrollTracker"
import Image from "next/image"
import { useRef } from "react"
import CTA from "./CTA"

export default function Hero() {
  const y = useScrollTracker()
  const hero = useRef<HTMLDivElement>(null)
  useSmoothAnimation({
    targetValue: { y: y * 0.5 },
    elementRef: hero,
    factor: 1,
  })
  return (
    <div className="relative z-30 w-dvw h-dvh overflow-hidden">
      {/* Hero Image */}
      <div ref={hero} className="absolute w-full h-full will-change-transform">
        <Image
          id="hero-img"
          src="/hero/hero-image.jpg"
          fill
          quality={80}
          alt="hero-image"
          className="grayscale-[30%] object-cover"
          priority
          placeholder="empty"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
      <header className="absolute w-full h-full top-0 md:flex justify-between">
        <h1 className="w-fit mb-auto mx-auto lg:mr-auto lg:ml-32 xl:ml-52 lg:mt-[20dvh] mt-[13dvh] text-white lg:scale-[1.5] 2xl:scale-[2] ">
          <span className="text-[10rem] leading-[11rem] monsieur-la-doulaise-regular">
            Verlio
          </span>
          <br />
          <span className="text-2xl leading-none capitalize">RESTAURANT</span>
        </h1>
        <CTA />
      </header>
    </div>
  )
}
