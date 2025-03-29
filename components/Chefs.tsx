import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa6"

export default function Chefs() {
  return (
    <section className="py-10 w-11/12 sm:w-5/6 md:w-2/3 mx-auto">
      <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6"></div>
      <h4 className="text-3xl text-center pb-8">
        <span className="text-orange">The Masters</span> Behind the Apron
      </h4>
      <div className="flex justify-center gap-x-4 px-2">
        <div className="group transition-all">
          <div className="relative overflow-hidden rounded-3xl w-full h-full">
            <Image
              src={"/chefs/freja-charles.jpg"}
              alt="Freja Charles"
              width={500}
              height={500}
              className="w-full h-full aspect-[3/4] object-cover"
            />
            <div className="absolute inset-x-0 mx-auto bottom-0 translate-y-[calc(100%+10px)] group-hover:-translate-y-4 duration-300 flex gap-x-3 justify-center place-items-center z-20">
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-cyan-400 cursor-pointer text-white">
                <FaXTwitter className=" size-2 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-blue-600 cursor-pointer text-white">
                <FaFacebook className=" size-2 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-red-500 cursor-pointer text-white">
                <FaInstagram className=" size-2 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-blue-400 cursor-pointer text-white">
                <FaLinkedinIn className=" size-2 bg-transparent" />
              </div>
            </div>
            <div className="absolute inset-0 m-auto bg-black/0 transition-colors duration-200 group-hover:bg-black/60 z-10"></div>
          </div>
          <div className="">
            <span className="block text-center py-2">Freja Charles</span>
            <small className="block text-center text-orange">Pastry Chef</small>
          </div>
        </div>
        <div className="group transition-all">
          <div className="relative overflow-hidden rounded-b-3xl rounded-t-[50%] w-full h-full">
            <Image
              src={"/chefs/hiroshi-tanaka.jpg"}
              alt="hiroshi-tanaka"
              width={500}
              height={500}
              className="w-full h-full aspect-[3/4] object-cover"
            />
            <div className="absolute inset-x-0 mx-auto bottom-0 translate-y-[calc(100%+10px)] group-hover:-translate-y-4 duration-300 flex gap-x-3 justify-center place-items-center z-20">
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-cyan-400 cursor-pointer text-white">
                <FaXTwitter className=" size-6 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-blue-600 cursor-pointer text-white">
                <FaFacebook className=" size-6 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-red-500 cursor-pointer text-white">
                <FaInstagram className=" size-6 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-blue-400 cursor-pointer text-white">
                <FaLinkedinIn className=" size-6 bg-transparent" />
              </div>
            </div>
            <div className="absolute inset-0 m-auto bg-black/0 transition-colors duration-200 group-hover:bg-black/60 z-10"></div>
          </div>
          <div className="">
            <span className="block text-center py-2">Hiroshi Tanaka</span>
            <small className="block text-center text-orange">
              Executive Chef
            </small>
          </div>
        </div>
        <div className="group transition-all">
          <div className="relative overflow-hidden rounded-3xl w-full h-full">
            <Image
              src={"/chefs/carson-witherspoon.jpg"}
              alt="Carson Witherspoon"
              width={500}
              height={500}
              className="w-full h-full aspect-[3/4] object-cover"
            />
            <div className="absolute inset-x-0 mx-auto bottom-0 translate-y-[calc(100%+10px)] group-hover:-translate-y-4 duration-300 flex gap-x-3 justify-center place-items-center z-20">
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-cyan-400 cursor-pointer text-white">
                <FaXTwitter className=" size-6 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-blue-600 cursor-pointer text-white">
                <FaFacebook className=" size-6 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-red-500 cursor-pointer text-white">
                <FaInstagram className=" size-6 bg-transparent" />
              </div>
              <div className="p-2 rounded-full border-8 border-transparent backdrop-blur-[2px] outline outline-2 outline-white hover:outline-blue-400 cursor-pointer text-white">
                <FaLinkedinIn className=" size-6 bg-transparent" />
              </div>
            </div>
            <div className="absolute inset-0 m-auto bg-black/0 transition-colors duration-200 group-hover:bg-black/60 z-10"></div>
          </div>
          <div className="">
            <span className="block text-center py-2">Carson Witherspoon</span>
            <small className="block text-center text-orange">Sous Chef</small>
          </div>
        </div>
      </div>
    </section>
  )
}
