import Image from "next/image"
import cards from "@/db/how-it-works-cards.json"
import Link from "next/link"
import { CgArrowLongRight } from "react-icons/cg"
import { FaArrowTurnUp } from "react-icons/fa6"

export default function HowItWorks() {
  const cardElements = cards.map((card) => {
    const { title, description, img, imgAlt, btnText, href } = card
    return (
      <Link
        href={href}
        className="relative flex-1 flex flex-col justify-center items-center hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)] rounded-[80px] transition-all backdrop-blur-sm hover:backdrop-blur-[8px] border-b-2 border-green-300/70 hover:border-transparent cursor-pointer select-none group overflow-hidden"
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
      </Link>
    )
  })

  return (
    <section id="how-it-works">
      <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6"></div>
      <h4 className="text-center text-4xl my-8 text-orange">
        <FaArrowTurnUp className="inline rotate-180 mr-4" />
        How it Works
        <FaArrowTurnUp className="inline rotate-180 -scale-x-100 ml-4" />
      </h4>
      <div className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-8 gap-y-14 mx-16 my-16">
        {cardElements}
      </div>
    </section>
  )
}
