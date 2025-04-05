import Image from "next/image"
import person from "@/public/gallery/kid-laughing.jpg"
import pic1 from "@/public/gallery/food-pic-2.jpg"
import pic2 from "@/public/gallery/food-pic-4.jpg"
import pic3 from "@/public/gallery/food-pic-5.jpg"
import Link from "next/link"
import { CgArrowLongRight } from "react-icons/cg"

export default function HealthyTable() {
  const attention = "border-b-2 border-b-theme-green-light"
  return (
    <div className="w-full sm:flex justify-center bg-black/60 sm:backdrop-blur-sm sm:bg-black/90 relative py-20">
      <div className="flex flex-col w-full h-full sm:w-6/12 px-10 text-white">
        <h3 className="text-3xl py-4">
          A healthier way now has a seat at the table.
        </h3>
        <div className="py-2">
          <p>
            Freshness, flavor, and care come together at every meal.
            <br />
            Our commitment to quality means using only the{" "}
            <span className={attention}>finest</span>, responsibly sourced
            ingredients, prepared to perfection.
            <br />
            With every bite, you'll taste our{" "}
            <span className={attention}>dedication</span> to serving wholesome,
            nourishing dishes
            <br />
            that elevate your dining experience.
            <br />
            <span>
              Now, <span className={attention}>healthier</span> choices have a
              place at every table.
            </span>
          </p>
          <Link
            href={"/blogs/healthy-table"}
            className="inline-block my-4 py-4 px-8 bg-theme-green-light text-black rounded-lg group"
          >
            <span className="pr-2">Read More</span>
            <CgArrowLongRight className="inline-block size-7 group-hover:translate-x-5 transition-transform" />
          </Link>
        </div>
      </div>
      <div className="w-full h-full sm:max-w-60 sm:flex justify-center items-center absolute inset-0 sm:relative -z-10 sm:z-0">
        <Image
          src={person}
          width={1000}
          height={1000}
          alt="person"
          className="sm:rounded-xl -z-10 sm:z-10 sm:border-2 sm:border-white w-full h-full sm:w-auto sm:h-auto object-cover"
        />
        <Image
          src={pic1}
          width={100}
          height={100}
          alt="food picture"
          className="rounded-xl absolute -bottom-6 -right-8 z-20 border-2 border-white hidden sm:block"
        />
        <Image
          src={pic3}
          width={100}
          height={100}
          alt="food picture"
          className="rounded-xl absolute -bottom-10 -left-8 z-20 border-2 border-white hidden sm:block"
        />
        <Image
          src={pic2}
          width={100}
          height={100}
          alt="food picture"
          className="rounded-xl absolute -top-8 -left-12 border-2 border-white hidden sm:block"
        />
      </div>
    </div>
  )
}
