import Heading from "@/components/Heading"
import blogs from "@/db/blogs.json"
import Image from "next/image"
import Link from "next/link"

export default function BlogsPage() {
  const blogPosts = blogs.map((blog) => {
    const { title, date, by, description, img, href } = blog
    return (
      <Link
        key={href}
        href={`/blogs/${href}`}
        className="w-full h-80 relative mb-10 border-8 border-theme-green-light rounded-2xl overflow-hidden block"
      >
        <Image
          src={img}
          fill
          alt="picture of person"
          className="object-cover outline-dashed outline-4 -outline-offset-[12px] outline-white"
        />
        <div className="absolute w-full bottom-0 bg-black/60 backdrop-blur-sm">
          <div className="flex flex-col text-white pl-4">
            <span className="text-xl">{title}</span>
            <i className="">’’{description}’’</i>
            <small className="">{date}</small>
            <small>
              By <span className="text-theme-blue-default">{by}</span>
            </small>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div>
      <Heading heading="Recipes from the Heart" />
      <div className="w-[90%] sm:w-[75%] lg:w-[65%] mx-auto">
        <div className="px-4 my-10">
          <p>
            <span className="text-lg">Welcome!</span>
            <br />
            Passionate food enthusiasts come together to share their culinary
            adventures. Our blog is a celebration of creativity, flavor, and the
            joy of cooking. Every post is a glimpse into the soul of someone who
            truly loves being in the kitchen.
            <br />
            those magical moments where chopping, stirring, and tasting bring
            dishes to life.
          </p>
          <br />
          <p>
            Here, you'll find recipes that aren't just instructions—they're
            stories.
            <br />
            Each dish is lovingly crafted and shared by home cooks, aspiring
            chefs, and culinary dreamers. Whether it's a classic family recipe
            passed down through generations, a creative twist on an old
            favorite, or a daring experiment that turned out beautifully.
          </p>
          <br />
          <p>
            We hope these recipes inspire you to tie on your apron, get your
            hands messy, and create something extraordinary in your own kitchen!
          </p>
        </div>
        <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6 my-10"></div>
        <div className="w-[90%] sm:w-[70%] lg:w-[65%] mx-auto my-10">
          {blogPosts}
        </div>
        <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6 my-10"></div>
      </div>
    </div>
  )
}
