"use client"

import DateSelectDropdown from "./DateSelectDropdown"
import HourSelectionModalButton from "./HourSelectionModalButton"
import PartySelectDropdown from "./PartySelectDropdown"
import ReservationFirstStepSummery from "./ReservationFirstStepSummery"
import FirstStepProceedButton from "./ReservationFirstStepProceedButton"
import { useAppSelector } from "@/redux/hooks"
import { CiLock } from "react-icons/ci"
import "../styles/reservations-page.css"

interface Props {
  secondStep: React.RefObject<HTMLDivElement | null>
  ref: React.RefObject<HTMLDivElement | null>
}

export default function ReservationFirstStep({ secondStep, ref }: Props) {
  const { currentStep } = useAppSelector((state) => state.reservationInfo)
  return (
    <div className="relative" ref={ref}>
      {/* Lock overlay */}
      <div
        className={
          currentStep === "1"
            ? "hidden"
            : "absolute w-full h-full flex justify-center items-center inset-0 m-auto bg-black bg-opacity-60 backdrop-blur-[2px] text-center text-white text-lg z-10"
        }
      >
        <CiLock className="size-28" />
      </div>
      <h3 id="reservation-form-first-step" className="py-2 text-xl font-bold">
        1. Date & Time
      </h3>
      <div className="w-full bg-black bg-opacity-90 backdrop-blur-sm justify-center px-5">
        <div
          className="flex justify-evenly sm:justify-center sm:gap-x-4 py-6"
          aria-labelledby="reservation-form-first-step"
          role="form"
        >
          <PartySelectDropdown />
          <DateSelectDropdown />
          <HourSelectionModalButton />
        </div>
      </div>
      <ReservationFirstStepSummery />
      <FirstStepProceedButton secondStep={secondStep} />
    </div>
  )
}
