"use client"

import Image from "next/image"
import CoverLayer from "@/components/cover-layer-animation/CoverLayerAnimation"
import useBoundingClientRect from "@/hooks/useBoundingClientRect"
import useSmoothAnimation from "@/hooks/useViewportAnimation"
import { useRef } from "react"
import Link from "next/link"

export default function Vibe() {
  const image = useRef<HTMLImageElement>(null)
  const text = useRef<HTMLImageElement>(null)
  const { top } = useBoundingClientRect(image)
  useSmoothAnimation({ targetValue: { y: -top * 0.2 }, elementRef: image })
  useSmoothAnimation({ targetValue: { y: top * 0.1 }, elementRef: text })

  return (
    <div className="flex flex-col md:flex-row z-20 relative">
      <div className="relative md:w-6/12 will-change-transform" ref={image}>
        <CoverLayer to="bottom" />
        <Image
          src={"/vibe.jpg"}
          width={1000}
          height={1000}
          alt="food picture"
          className="w-full h-full object-cover object-bottom aspect-[3/2] md:aspect-[4/5]"
        />
      </div>
      <div className="relative md:w-6/12 will-change-transform" ref={text}>
        <CoverLayer to="right" follow />
        <div className="w-full h-full text-center px-6 py-12 bg-gray-50 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            A Feast for the Senses
          </h2>
          <p className="text-gray-600 mb-2">
            Step into a world where culinary artistry meets a warm and inviting
            atmosphere.
          </p>
          <p className="text-gray-600 mb-2">
            Surrounded by elegant decor and the aroma of freshly prepared
            dishes, every detail delights.
          </p>
          <p className="text-gray-600">
            Whether you&#39;re here for a celebration or a quiet escape, this is
            a place to savor moments that matter.
          </p>
          <Link
            href={"/gallery"}
            className="cursor-pointer py-2 px-4 mt-8 bg-theme-blue-dark text-white"
          >
            View the Vibe
          </Link>
        </div>
      </div>
    </div>
  )
}
