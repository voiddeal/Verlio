"use client"

import React from "react"
import LightGallery from "lightgallery/react"
import Image from "next/image"
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-zoom.css"
import Heading from "@/components/Heading"

const images = new Array(20).fill(null).map((_, index) => {
  return (
    <a
      key={index}
      href={`/gallery/gallery-pic-${index + 1}.jpg`}
      data-src={`/gallery/gallery-pic-${index + 1}.jpg`}
      className="size-96 max-w-full relative bg-white overflow-hidden"
    >
      <Image
        src={`/gallery/gallery-pic-${index + 1}.jpg`}
        alt="Gallery Image"
        width={384}
        height={384}
        className="object-cover object-center hover:scale-105 hover:opacity-95 transition-[transform_opacity] size-full outline outline-2 -outline-offset-[12px] outline-white hover:outline-none"
        quality={90}
        loading="lazy"
      />
    </a>
  )
})

const Gallery = () => {
  return (
    <main>
      <header className="relative">
        <Image
          src="/gallery/gallery-head.jpg"
          fill
          alt="gallery header image"
          className="object-cover"
          quality={80}
        />
        <Heading heading="Gallery" />
      </header>
      <LightGallery
        plugins={[lgThumbnail, lgZoom]}
        speed={500}
        animateThumb={false}
        elementClassNames="relative w-[90%] sm:w-full mx-auto grid [grid-template-columns:repeat(auto-fit,_minmax(384px,_1fr))] place-items-center gap-y-[50px] overflow-hidden my-20"
      >
        {images}
      </LightGallery>
    </main>
  )
}

export default Gallery
