import Image from "next/image"
import stew from "@/public/blog-beef-dumpling-stew/1.jpg"
import fajita from "@/public/blog-chicken-fajita/1.jpg"
import ratatouille from "@/public/blog-ratatouille/1.jpg"
import shakshuka from "@/public/blog-shakshuka/1.jpg"
import Link from "next/link"

export default function Blogs() {
  return (
    <div className="py-5 flex flex-col justify-center itm">
      <div className="flex justify-between px-5">
        <h4>Recipe Blogs</h4>
        <button type="button">View More</button>
      </div>
      <div className="flex justify-center gap-x-6 p-5">
        <Link href="#" className="flex flex-col justify-center items-center">
          <Image
            src={stew}
            width={400}
            height={300}
            alt="blog preview image"
            className="rounded-xl"
          />
          <div className="flex flex-col self-start py-4 pr-2">
            <span className="text-xs text-primary-light pb-1">
              November 16, 2022
            </span>
            <span>title</span>
            <span className="text-xs text-primary-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores.
            </span>
          </div>
        </Link>
        <div className="w-[40%] flex flex-col justify-between items-center">
          <Link href="#" className="w-full flex justify-center gap-x-2">
            <Image
              src={shakshuka}
              width={120}
              height={120}
              alt="blog preview image"
              className="rounded-xl"
            />
            <div className="w-[60%] flex flex-col">
              <span className="text-xs text-primary-light flex-1">
                November 16, 2022
              </span>
              <span className="">title</span>
              <span className="text-xs text-primary-light line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                totam nulla quibusdam.
              </span>
            </div>
          </Link>
          <Link href="#" className="w-full flex justify-center gap-x-2">
            <Image
              src={ratatouille}
              width={120}
              height={120}
              alt="blog preview image"
              className="rounded-xl"
            />
            <div className="w-[60%] flex flex-col">
              <span className="text-xs text-primary-light flex-1">
                November 16, 2022
              </span>
              <span className="">title</span>
              <span className="text-xs text-primary-light line-clamp-2">
                Lorem ipsum dolor amet elit.
              </span>
            </div>
          </Link>
          <Link href="#" className="w-full flex justify-center gap-x-2">
            <Image
              src={fajita}
              width={120}
              height={120}
              alt="blog preview image"
              className="rounded-xl"
            />
            <div className="w-[60%] flex flex-col">
              <span className="text-xs text-primary-light flex-1">
                November 16, 2022
              </span>
              <span className="">title</span>
              <span className="text-xs text-primary-light line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                totam nulla quibusdam.
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
