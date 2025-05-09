import Image from "next/image"
import Link from "next/link"
import blogs from "@/db/blogs.json"

export default function Blogs() {
  const blogJSX = blogs.map((blog, index) => {
    if (index === 0) return
    const isLast = index + 1 === blogs.length
    const { date, description, href, img, title } = blog

    return (
      <Link
        key={date}
        href={`/blogs/${href}`}
        className={`flex-1 lg:flex-initial flex flex-col lg:flex-row lg:justify-center items-center gap-y-1 lg:gap-y-0 lg:gap-x-2 rounded-lg p-4 hover:scale-105 transition-transform ${
          isLast ? "sm:flex hidden" : ""
        }`}
      >
        <Image
          src={img}
          width={230}
          height={230}
          alt="blog preview image"
          className="rounded-xl w-full lg:w-2/5"
        />
        <div className="w-full lg:w-[60%] flex flex-col">
          <span className="text-xs text-primary-light">{date}</span>
          <span className="mb-auto">{title}</span>
          <span className="text-xs text-primary-light line-clamp-2">
            {description}
          </span>
        </div>
      </Link>
    )
  })

  return (
    <section className="py-5 flex flex-col justify-center w-11/12 sm:w-5/6 lg:w-2/3 mx-auto">
      {/* Blog Header */}
      <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6"></div>
      <header className="my-8">
        <h4 className="text-3xl text-center text-orange">Recipe Blogs</h4>
      </header>
      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center gap-x-6 p-5">
        {/* Main post */}
        <Link
          href={`/blogs/${blogs[0].href}`}
          className="w-full lg:w-[60%] flex flex-col justify-center items-center m-auto lg:m-[unset] group overflow-hidden rounded-xl transition-transform"
        >
          <Image
            src={blogs[0].img}
            alt="blog preview image"
            width={1000}
            height={1000}
            className="w-full group-hover:scale-105 rounded-[inherit] transition-transform"
          />
          <div className="flex flex-col self-start pt-2 pb-8 p lg:py-4 lg:pr-2">
            <span className="text-xs text-primary-light pb-1">
              {blogs[0].date}
            </span>
            <span>{blogs[0].title}</span>
            <span className="text-xs text-primary-light">
              {blogs[0].description}
            </span>
          </div>
        </Link>
        {/* Posts */}
        <div className="w-full lg:w-[40%] flex lg:flex-col justify-center lg:justify-start gap-x-2">
          {blogJSX}
        </div>
      </div>
    </section>
  )
}
