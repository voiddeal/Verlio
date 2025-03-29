import { Meal } from "@/types/api"
import Image from "next/image"

export default function FrontView({ strMeal, strMealThumb }: Meal) {
  return (
    <div
      className="relative block w-full h-full rounded-lg cursor-pointer"
      title={strMeal}
    >
      <Image
        src={strMealThumb}
        alt={strMeal}
        fill
        className="rounded-lg object-cover"
        draggable={false}
        loading="lazy"
      />
      <div className="absolute top-0 w-full p-2 text-lg text-white bg-black/60 backdrop-blur-[2px] rounded-ss-[inherit] rounded-se-[inherit] whitespace-nowrap text-ellipsis overflow-hidden">
        {strMeal}
      </div>
    </div>
  )
}
