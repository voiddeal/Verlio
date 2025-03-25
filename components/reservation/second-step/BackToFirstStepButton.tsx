"use client"

import { useAppDispatch } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"
import { FaArrowTurnUp } from "react-icons/fa6"

export default function BackToFirstStepButton() {
  const dispatch = useAppDispatch()

  const backToFirstStep = () => {
    document.getElementById("reservation-first-step")?.scrollIntoView()
    dispatch(appActions.setCurrentReservationStep(1))
  }

  return (
    <button
      className="flex justify-center items-center w-fit m-auto py-2 px-14 text-lg bg-theme-blue-default hover:bg-theme-blue-light cursor-pointer disabled:hover:cursor-not-allowed disabled:bg-slate-600 transition-colors text-primary-default"
      onClick={backToFirstStep}
    >
      <span className="pr-4">Back to Date & Time</span>
      <FaArrowTurnUp className="inline" />
    </button>
  )
}
