"use client"

import { BiSolidHappy } from "react-icons/bi"
import { BsFillCartCheckFill } from "react-icons/bs"
import { MdFoodBank } from "react-icons/md"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import CoverLayer from "./cover-layer-animation/CoverLayerAnimation"

export default function Records() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <div className="text-white relative z-10">
      <CoverLayer to="bottom" follow />
      {/* BG */}
      <div className="absolute w-full h-full bg-black/60 -z-10"></div>
      <Image
        src="/woman-eating.jpg"
        fill
        alt="wine at table"
        className="w-full h-full object-cover -z-20 object-top"
      />
      {/* </div> */}
      <div className="py-10">
        <Image
          src="/five-star.png"
          width={500}
          height={500}
          alt="five-star"
          className="w-6/12 h-min mx-auto"
        />
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-center py-2">
          <span>A Culinary Experience of</span>
          <br />
          <span className="text-orange">Elegance and Excellence</span>
        </h2>
        <p className="text-center py-6 text-sm sm:text-base">
          at Verlio five-star experience isn’t just a promise —
          <span className="text-orange"> it’s a standard.</span>
        </p>
      </div>
      <div
        className="lg:w-9/12 lg:mx-auto w-full flex justify-evenly md:justify-center md:gap-x-10  items-center py-8"
        ref={ref}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <BiSolidHappy className="text-2xl" />
          </div>
          {(inView && (
            <CountUp
              start={0}
              end={1_100_000}
              suffix="+"
              duration={4}
              className="text-lg"
            />
          )) ||
            "0"}
          <small>Satisfied Customers</small>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <BsFillCartCheckFill className="text-2xl" />
          </div>
          {(inView && (
            <CountUp
              start={0}
              end={12_000}
              suffix="+"
              duration={4}
              className="text-lg"
            />
          )) ||
            "0"}
          <small>Online Orders</small>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <MdFoodBank className="text-2xl" />
          </div>
          {(inView && (
            <CountUp
              start={0}
              end={850_000}
              suffix="+"
              duration={4}
              className="text-lg"
            />
          )) ||
            "0"}
          <small>Served Dinners</small>
        </div>
      </div>
    </div>
  )
}
