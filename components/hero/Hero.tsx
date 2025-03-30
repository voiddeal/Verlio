"use client"

import useScrollTracker from "@/utils/useScrollTracker"
import InfoCards from "../info-cards/InfoCards"
import Image from "next/image"

export default function Hero() {
  const y = useScrollTracker()
  return (
    <div className="relative z-30 w-dvw h-dvh overflow-hidden">
      {/* Hero Image */}
      <div
        className="absolute w-full h-full will-change-transform"
        style={{
          transform: `translateY(${y * 0.5}px)`,
        }}
      >
        <Image
          id="hero-img"
          src="/hero/hero-image.jpg"
          fill
          quality={100}
          alt="hero-image"
          className="grayscale-[30%]  object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
      <div className="absolute w-full h-full top-0 md:flex justify-between">
        <h1 className="w-fit m-auto mt-[13dvh] text-white lg:scale-[1.5] 2xl:scale-[2] ">
          <span className="text-[10rem] leading-[11rem] monsieur-la-doulaise-regular">
            Verlio
          </span>
          <br />
          <span className="text-2xl leading-none capitalize">RESTAURANT</span>
        </h1>
        {/* <InfoCards /> */}
      </div>
      {/* <Image
        src={"/verlio.png"}
        width={500}
        height={500}
        alt="verlio logo"
        className="w-32 absolute bottom-0 right-0 m-2"
      /> */}
    </div>
  )
}
