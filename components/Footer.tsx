import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import pepper from "@/public/pepper.png"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex flex-col bg-stone-900 text-white relative">
      <div className="w-full h-20 bg-[url('/line-break-1.png')] bg-contain bg-center z-50 mt-10 mb-5"></div>
      <h4 className="text-3xl text-center mt-10 mb-5">Verlio</h4>
      <p className="text-center w-6/12 m-auto text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        perspiciatis..
      </p>
      {/* Social Media Links */}
      <div className="flex justify-center items-center my-7 gap-x-4 text-lg">
        <Link href="#" className="hover:text-blue-400 transition-colors">
          <FaTwitter />
        </Link>
        <Link href="#" className="hover:text-pink-500 transition-colors">
          <FaInstagram />
        </Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">
          <FaFacebook />
        </Link>
      </div>
      <div className="w-10/12 m-auto border-t border-b border-neutral-800 flex gap-x-5 justify-center py-2 text-sm">
        <Link href="#" className="hover:text-theme-default">
          Contact
        </Link>
        <Link href="#" className="hover:text-theme-default">
          Learn/How-to
        </Link>
        <Link href="#" className="hover:text-theme-default">
          Recipes
        </Link>
        <Link href="#" className="hover:text-theme-default">
          Seasonal Sensations
        </Link>
      </div>
      <div className="flex my-4 w-10/12 m-auto text-sm">
        <div className="flex-grow">Verlio 2025 | All Rights Reserved</div>
        <div className="flex gap-x-4">
          <Link href="#" className="hover:text-theme-dark">
            Term and Conditions
          </Link>
          <Link href="#" className="hover:text-theme-dark">
            Privacy Policy
          </Link>
        </div>
      </div>
      {/* Pepper Image */}
      <Image
        src={pepper}
        width={100}
        height={100}
        alt="chili pepper"
        className="absolute -rotate-[90deg] top-[-13%] right-14 scale-y-[-1]"
      />
    </footer>
  )
}
