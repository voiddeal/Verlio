"use client"

import { TbClockHour3 } from "react-icons/tb"
import { GoPerson } from "react-icons/go"
import { CiCalendar } from "react-icons/ci"
import { useAppSelector } from "@/redux/hooks"

export default function Summery() {
  const { date, hour, party } = useAppSelector((state) => state.reservationInfo)
  const display = date.split(" | ")[1]

  return (
    <div className="border-b border-gray-300 py-6 bg-black bg-opacity-90 backdrop-blur-sm text-white px-5">
      <h4 className="text-xl pb-2 font-bold mb-2">Verlio</h4>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-1">
          <CiCalendar size={25} />
          <p>{display}</p>
        </div>
        <div className="flex items-center gap-x-1">
          <TbClockHour3 size={25} />
          <p>{hour?.toLowerCase() || "Please select an hour"}</p>
        </div>
        <div className="flex items-center gap-x-1">
          <GoPerson size={25} />
          <p>{party} People</p>
        </div>
      </div>
    </div>
  )
}
