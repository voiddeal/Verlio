"use client"

import CoverLayer from "@/components/cover-layer-animation/CoverLayerAnimation"
import useBoundingClientRect from "@/hooks/useBoundingClientRect"
import useSmoothAnimation from "@/hooks/useViewportAnimation"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function Taste() {
  const image = useRef<HTMLImageElement>(null)
  const text = useRef<HTMLImageElement>(null)
  const { top } = useBoundingClientRect(image)
  useSmoothAnimation({ targetValue: { y: -top * 0.2 }, elementRef: image })
  useSmoothAnimation({ targetValue: { y: top * 0.1 }, elementRef: text })

  return (
    <div className="flex flex-col md:flex-row-reverse">
      <div className="relative md:w-6/12 will-change-transform" ref={image}>
        <CoverLayer to="bottom" />
        <Image
          src={"/taste.jpg"}
          width={1000}
          height={1000}
          alt="food picture"
          className="w-full h-full object-cover aspect-[3/2] md:aspect-[4/5]"
        />
      </div>
      <div className="relative md:w-6/12 will-change-transform" ref={text}>
        <CoverLayer to="right" follow />
        <div className="w-full h-full text-center px-6 py-12 bg-gray-50 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Exceptional Food, Extraordinary Flavor
          </h2>
          <p className="text-gray-600 mb-2">
            Crafted from the freshest ingredients, every dish tells a story of
            passion and precision.
          </p>
          <p className="text-gray-600 mb-2">
            From the tantalizing starters to the indulgent desserts, we bring
            bold flavors to life.
          </p>
          <p className="text-gray-600">
            Whether you're exploring our menu or savoring your favorites, each
            bite is unforgettable.
          </p>
          <Link
            href={"/menu"}
            className="cursor-pointer py-2 px-4 mt-8 bg-theme-blue-dark text-white"
          >
            View the Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
