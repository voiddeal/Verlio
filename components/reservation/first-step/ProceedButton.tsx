"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"

export default function ProceedButton() {
  const { hour } = useAppSelector((state) => state.reservationInfo)
  const dispatch = useAppDispatch()

  const goToSecondStep = () => {
    document.getElementById("reservation-second-step")?.scrollIntoView()
    dispatch(appActions.setCurrentReservationStep(2))
  }

  return (
    <div className="p-4 bg-black bg-opacity-90 backdrop-blur-sm ">
      <button
        className="block w-fit m-auto py-2 px-14 text-lg bg-theme-blue-default hover:bg-theme-blue-light cursor-pointer disabled:hover:cursor-not-allowed disabled:bg-slate-600 transition-colors text-primary-default"
        onClick={goToSecondStep}
        disabled={!hour}
        tabIndex={!hour ? 0 : -1}
      >
        {hour ? "Proceed" : "Please select an hour"}
      </button>
    </div>
  )
}
