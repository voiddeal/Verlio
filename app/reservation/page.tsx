"use client"

import HourSelectionModal from "@/components/reservation/first-step/hour-selection-modal/HourSelectionModal"
import ReservationFirstStep from "@/components/reservation/first-step/ReservationFirstStep"
import ReservationSecondStep from "@/components/reservation/second-step/ReservationSecondStep"
import { useAppSelector } from "@/redux/hooks"
import { useRef } from "react"

export default function ReservationsPage() {
  const { isHourModalOpen } = useAppSelector((state) => state.app)
  const firstStep = useRef<HTMLDivElement>(null)
  const secondStep = useRef<HTMLDivElement>(null)
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-[url('/food-pattern-light.jpg')] bg-repeat bg-cover bg-center opacity-5 -z-10"></div>
      <div
        className={`pb-16 px-4 overflow-x-hidden ${
          isHourModalOpen ? "w-dvw h-dvh overflow-hidden" : ""
        }`}
      >
        <h2 className="text-3xl pt-32 pb-10 text-center">
          Reservation at Verlio
        </h2>
        <div>
          <ReservationFirstStep secondStep={secondStep} ref={firstStep} />
          <ReservationSecondStep ref={secondStep} firstStep={firstStep} />
        </div>
      </div>
      <HourSelectionModal />
    </div>
  )
}
