"use client"

import { BiSolidHappy } from "react-icons/bi"
import { BsFillCartCheckFill } from "react-icons/bs"
import { MdFoodBank } from "react-icons/md"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function Records() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <div
      className="lg:w-9/12 lg:mx-auto w-full flex justify-evenly md:justify-center md:gap-x-10  items-center py-8 text-white bg-gray-900"
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
  )
}
