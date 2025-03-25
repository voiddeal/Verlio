import CoverLayer from "@/components/cover-layer-animation/CoverLayerAnimation"
import Image from "next/image"

export default function Taste() {
  return (
    <div className="flex flex-col md:flex-row mx-auto">
      <div className="relative md:w-6/12">
        <CoverLayer to="bottom" />
        <Image
          src={"/taste.jpg"}
          width={1000}
          height={1000}
          alt="food picture"
          className="w-full h-full object-cover aspect-[3/2] md:aspect-[4/5]"
        />
      </div>
      <div className="flex-col md:flex-row relative md:w-6/12">
        <CoverLayer to="right" follow />
        <div className="w-full h-full text-center px-6 py-12 bg-gray-100">
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
          <button
            type="button"
            className="cursor-pointer py-2 px-4 mt-8 bg-theme-blue-dark text-white"
          >
            View the Menu
          </button>
        </div>
      </div>
    </div>
  )
}
