import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa6"
import CoverLayer from "./cover-layer-animation/CoverLayerAnimation"
import chefs from "@/db/chefs.json"

export default function Chefs() {
  const socialLinkClasses =
    "p-1 lg:p-2 rounded-full border-2 lg:border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white cursor-pointer text-white"

  const socialIconClasses = "size-4 sm:size-6 bg-transparent transition-none"

  const chefJSX = chefs.map((chef) => {
    const { name, role, img, socials } = chef
    return (
      <div key={name} className="group h-full">
        <div className="relative overflow-hidden rounded-3xl size-full">
          <div className="absolute size-full inset-0 m-auto opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-black/0 z-[15] group-hover:bg-black/60 gap-y-2">
            <a
              href={socials.twitter || undefined}
              className={`${socialLinkClasses} hover:outline-cyan-400`}
            >
              <FaXTwitter className={socialIconClasses} />
            </a>
            <a
              href={socials.facebook || undefined}
              className={`${socialLinkClasses} hover:outline-blue-600`}
            >
              <FaFacebook className={socialIconClasses} />
            </a>
            <a
              href={socials.instagram || undefined}
              className={`${socialLinkClasses} hover:outline-red-500`}
            >
              <FaInstagram className={socialIconClasses} />
            </a>
            <a
              href={socials.linkedin || undefined}
              className={`${socialLinkClasses} hover:outline-blue-400`}
            >
              <FaLinkedinIn className={socialIconClasses} />
            </a>
          </div>
          <Image
            src={img}
            alt="Freja Charles"
            width={500}
            height={500}
            className="size-full object-cover"
          />
        </div>
        <div className="w-full h-full">
          <span className="block text-center py-2">{name}</span>
          <small className="block text-center text-orange">{role}</small>
        </div>
      </div>
    )
  })

  return (
    <section className="relative my-10">
      <CoverLayer to="bottom" />
      <div className="py-10 w-11/12 sm:w-5/6 md:w-2/3 mx-auto">
        <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6"></div>
        <h4 className="text-3xl text-center my-8">
          <span className="text-orange">The Masters</span> Behind the Apron
        </h4>
        <div className="flex justify-center gap-x-4 px-2">{chefJSX}</div>
      </div>
    </section>
  )
}
