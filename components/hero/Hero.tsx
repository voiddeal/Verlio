import Image from "next/image"
import heroBottomImage from "@/public/hero-bottom-image.png"
import img1 from "@/public/img-1.png"
import HeroButton from "../hero-button/HeroButton"
import HeroInfoCards from "../hero-info-cards/HeroInfoCards"
import Records from "@/components/Records"
import "./hero.css"

export default function Hero() {
  return (
    <div className="relative bg-black h-full">
      <div className="hero-image-container relative">
        {/* <Image
          id="hero-img"
          src={heroImage}
          width={1920}
          height={1080}
          quality={100}
          alt="hero-image"
          className="grayscale-[50%] opacity-50"
          priority
        /> */}
        <picture>
          <source media="(min-width:768px)" srcSet="/hero-image-default.jpg" />
          <source media="(max-width:768px)" srcSet="/hero-image-cropped.jpg" />
          <img
            src="/hero-image-default.jpg"
            alt="chef cooking"
            className="grayscale-[50%] opacity-50"
          />
        </picture>
      </div>
      <div className="absolute w-full h-full top-0 md:flex justify-between px-20 py-10">
        <div className="flex flex-col items-center md:items-[unset]">
          <div>
            <h1 className="w-full text-5xl lg:text-8xl md:text-8xl sm:text-6xl text-yellow-300">
              Every Flavor,
              <br />
              Tells a Story.
            </h1>
            <p className="text-white text-justify text-[13px] text-opacity-90 drop-shadow-lg shadow-red-600">
              From Farm to Table. Each Ingredient
              <br />
              is Carefully Selected for Unmatched Quality.
            </p>
            <button
              type="button"
              className="text-black bg-yellow-300 px-4 py-2 mt-2"
            >
              Book a Table
            </button>
          </div>
          {/* <div className="flex gap-x-8">
            <HeroButton title="See our Menu" />
            <HeroButton title="Book a Table" />
          </div> */}
        </div>
        <HeroInfoCards />
      </div>
      <Records />
      {/* <div className="overflow-hidden w-full">
        <Image
          src={img1}
          width={1920}
          quality={100}
          alt="hero-image"
          className=" scale-x-150 opacity-80 grayscale"
        />
      </div> */}
    </div>
  )
}
