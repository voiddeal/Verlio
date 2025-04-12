import Image from "next/image"
import Link from "next/link"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook, FaInstagram } from "react-icons/fa6"

export default function Footer() {
  return (
    <>
      <div className="translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1c1917"
            fill-opacity="1"
            d="M0,128L80,128C160,128,320,128,480,160C640,192,800,256,960,277.3C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <footer className="flex flex-col bg-stone-900 text-white relative mb-14">
        {/* top image */}

        <div className="w-full h-20 bg-[url('/linebreak-1.png')] bg-contain bg-center mt-10 mb-5"></div>
        <div className="text-center my-5">
          <h4 className="text-3xl mb-4">Verlio</h4>
          <i className="w-6/12 m-auto text-sm">
            let’s make every meal extraordinary.
          </i>
        </div>
        <div className="text-center my-7 ">
          <span className="block text-sm">Today&#39;s hours:</span>
          <span>12:00 PM - 10:00 PM</span>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-center items-center mb-7 gap-x-4 text-lg">
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
          <a href="#how-it-works" className="hover:text-theme-default">
            Learn/How-to
          </a>
          <Link href="/menu" className="hover:text-theme-default">
            Recipes
          </Link>
          <Link href="/menu" className="hover:text-theme-default">
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
          src="/pepper.png"
          width={100}
          height={100}
          alt="chili pepper"
          className="absolute -rotate-[90deg] top-[-13%] right-14 scale-y-[-1]"
        />
        <Image
          src={"/verlio.png"}
          width={500}
          height={500}
          alt="verlio logo"
          className="absolute w-12 sm:w-32 inset-y-0 left-10 sm:left-20 my-auto"
        />
      </footer>
    </>
  )
}
