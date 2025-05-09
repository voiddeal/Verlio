"use client"

import DateSelectDropdown from "./DateSelectDropdown"
import HourSelectButton from "./HourSelectButton"
import PartySelectDropdown from "./PartySelectDropdown"
import Summery from "./Summery"
import ProceedButton from "./ProceedButton"
import { useAppSelector } from "@/redux/hooks"
import Portal from "@/components/Portal"
import HourSelectionModal from "./hour-selection-modal/HourSelectionModal"
import LockOverlay from "../LockOverlay"
import "./styles/first-step.css"

export default function FirstStep() {
  const { hourModalDisplay } = useAppSelector((state) => state.app)

  return (
    <section id="reservation-first-step">
      <div className="h-20 w-full"></div>
      <h3 id="reservation-form-first-step" className="py-2 text-xl font-bold">
        1. Date & Time
      </h3>
      <div className="relative">
        <LockOverlay originStep={1} />
        <div className="w-full bg-black bg-opacity-90 backdrop-blur-sm justify-center px-5">
          <div
            className="flex justify-evenly sm:justify-center sm:gap-x-4 py-6"
            aria-labelledby="reservation-form-first-step"
            role="form"
          >
            <PartySelectDropdown />
            <DateSelectDropdown />
            <HourSelectButton />
          </div>
        </div>
        <Summery />
        <ProceedButton />
      </div>
      {hourModalDisplay && (
        <Portal>
          <HourSelectionModal />
        </Portal>
      )}
    </section>
  )
}
