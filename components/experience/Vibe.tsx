import Image from "next/image"
import CoverLayer from "@/components/cover-layer-animation/CoverLayerAnimation"

export default function Vibe() {
  return (
    <div className="flex flex-col md:flex-row z-20 mx-auto relative">
      <div className="relative md:w-6/12">
        <CoverLayer to="bottom" />
        <Image
          src={"/vibe.jpg"}
          width={500}
          height={1000}
          alt="food picture"
          className="w-full h-full object-cover object-bottom aspect-[3/2] md:aspect-[4/5]"
        />
      </div>
      <div className="flex-col md:flex-row relative md:w-6/12">
        <CoverLayer to="right" follow />
        <div className="w-full h-full text-center px-6 py-12 bg-gray-100">
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
            Whether you're here for a celebration or a quiet escape, this is a
            place to savor moments that matter.
          </p>
          <button
            type="button"
            className="cursor-pointer py-2 px-4 mt-8 bg-theme-blue-dark text-white"
          >
            View the Vibe
          </button>
        </div>
      </div>
    </div>
  )
}
