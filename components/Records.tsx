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
    <div className="flex justify-evenly items-center p-3" ref={ref}>
      <div className="flex flex-col justify-center items-center">
        <div>
          <BiSolidHappy className="text-2xl" />
        </div>
        {(inView && (
          <CountUp start={0} end={1_100_000} suffix="+" duration={4} />
        )) ||
          "0"}
        <div>Satisfied Customers</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <BsFillCartCheckFill className="text-2xl" />
        </div>
        {(inView && (
          <CountUp start={0} end={12_000} suffix="+" duration={4} />
        )) ||
          "0"}
        <div>Online Orders</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <MdFoodBank className="text-2xl" />
        </div>
        {(inView && (
          <CountUp start={0} end={850_000} suffix="+" duration={4} />
        )) ||
          "0"}
        <div>Served Dinners</div>
      </div>
    </div>
  )
}
