import Image from "next/image"
import stew from "@/public/blogs/beef-dumpling-stew/1.jpg"
import fajita from "@/public/blogs/chicken-fajita/1.jpg"
import ratatouille from "@/public/blogs/ratatouille/1.jpg"
import shakshuka from "@/public/blogs/shakshuka/1.jpg"
import Link from "next/link"

export default function Blogs() {
  return (
    <section className="py-5 flex flex-col justify-center itm">
      {/* Blog Header */}
      <div className="flex justify-between px-5">
        <h4>Recipe Blogs</h4>
        <button type="button">View More</button>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center gap-x-6 p-5">
        {/* Main post */}
        <Link
          href="#"
          className="w-full md:w-[60%] flex flex-col justify-center items-center m-auto md:m-[unset]"
        >
          <Image
            src={stew}
            layout="responsive"
            alt="blog preview image"
            width={400}
            height={400}
            className="rounded-xl w-full"
          />
          <div className="flex flex-col self-start pt-2 pb-8 p md:py-4 md:pr-2">
            <span className="text-xs text-primary-light pb-1">
              November 16, 2022
            </span>
            <span>title</span>
            <span className="text-xs text-primary-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores.
            </span>
          </div>
        </Link>
        {/* Posts */}
        <div className="w-full md:w-[40%] flex md:flex-col justify-center md:justify-between gap-x-2">
          <Link
            href="#"
            className="flex-1 md:flex-initial flex flex-col md:flex-row md:justify-center items-center gap-y-1 md:gap-y-0 md:gap-x-2 bg-theme-blue-light rounded-md p-4"
          >
            <Image
              src={shakshuka}
              width={230}
              height={230}
              alt="blog preview image"
              className="rounded-xl w-full md:w-2/5"
            />
            <div className="w-full md:w-[60%] flex flex-col">
              <span className="text-xs text-primary-light">
                November 16, 2022
              </span>
              <span className="mb-auto">title</span>
              <span className="text-xs text-primary-light line-clamp-2">
                1 ipsum dolor sit amet consectetur adipisicing elit. Maiores
                totam nulla quibusdam.
              </span>
            </div>
          </Link>
          <Link
            href="#"
            className="flex-1 md:flex-initial flex flex-col md:flex-row md:justify-center items-center gap-y-1 md:gap-y-0 md:gap-x-2 bg-theme-blue-light rounded-md p-4"
          >
            <Image
              src={ratatouille}
              width={230}
              height={230}
              alt="blog preview image"
              className="rounded-xl w-full md:w-2/5"
            />
            <div className="w-full md:w-[60%] flex flex-col">
              <span className="text-xs text-primary-light">
                November 16, 2022
              </span>
              <span className="mb-auto">title</span>
              <span className="text-xs text-primary-light line-clamp-2">
                Lorem ipsum dolor amet elit.
              </span>
            </div>
          </Link>
          <Link
            href="#"
            className="flex-1 md:flex-initial sm:flex flex-col md:flex-row md:justify-center items-center gap-y-1 md:gap-y-0 md:gap-x-2 bg-theme-blue-light rounded-md p-4 hidden"
          >
            <Image
              src={fajita}
              width={230}
              height={230}
              alt="blog preview image"
              className="rounded-xl w-full md:w-2/5"
            />
            <div className="w-full md:w-[60%] flex flex-col">
              <span className="text-xs text-primary-light">
                November 16, 2022
              </span>
              <span className="mb-auto">title</span>
              <span className="text-xs text-primary-light line-clamp-2">
                Lorem ipsum dolor sit adipisicing elit. Maiores totam nulla
                quibusdam.
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
