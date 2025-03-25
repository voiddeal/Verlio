import Image from "next/image"
import { CgArrowLongRight } from "react-icons/cg"

interface Cards {
  title: string
  description: string
  img: string
  imgAlt: string
  btnText: string
}

export default function HowItWorks() {
  const cards: Cards[] = [
    {
      title: "Explore Our Menu",
      description:
        "Dive into our carefully curated menu featuring a delightful selection of dishes crafted to suit every taste.",
      img: "/how-it-works/menu-book.png",
      imgAlt: "menu book image",
      btnText: "See The Menu",
    },
    {
      title: "Book a Table",
      description:
        "Reserve your table effortlessly in just a few clicks and secure your spot for an unforgettable dining experience.",
      img: "/how-it-works/table.png",
      imgAlt: "table image",
      btnText: "Reserve A Table",
    },
    {
      title: "Enjoy Your Meal",
      description:
        "Sit back, relax, and savor our delicious dishes served with care in a warm and welcoming atmosphere.",
      img: "/how-it-works/pork.png",
      imgAlt: "pork image",
      btnText: "See The Gallery",
    },
  ]

  const cardElements = cards.map((card) => {
    const { title, description, img, imgAlt, btnText } = card
    return (
      <div
        className="relative flex-1 flex flex-col justify-center items-center hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)] rounded-[80px] transition-all backdrop-blur-sm hover:backdrop-blur-[8px] border-2 border-gray-300/80 border-x-0 border-t-0 hover:border-transparent cursor-pointer select-none group overflow-hidden"
        key={title}
      >
        <Image
          width={220}
          height={220}
          src={img}
          alt={imgAlt}
          // className=" group-hover:shadow-[0_3px_6px_0px_rgba(0,0,0,0.2)] transition-shadow"
          className="group-hover:scale-105 transition-transform"
        />
        <div className="text-center pb-4 px-8 py-4">
          <h6 className="text-xl text-theme-green-dark py-2">{title}</h6>
          <span className="text-sm">{description}</span>
        </div>
        <button className="py-4" type="button">
          <small className="pr-2">{btnText}</small>
          <CgArrowLongRight className="inline-block size-7 group-hover:translate-x-5 transition-transform" />
        </button>
      </div>
    )
  })

  return (
    <section>
      <h4 className="text-center text-4xl font-bold my-8">How it Works</h4>
      <div className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-8 gap-y-14 mx-16 my-16">
        {cardElements}
      </div>
    </section>
  )
}
