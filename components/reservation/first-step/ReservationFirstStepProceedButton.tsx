"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"

interface Props {
  secondStep: React.RefObject<HTMLDivElement | null>
}

export default function FirstStepProceedButton({ secondStep }: Props) {
  const { hour } = useAppSelector((state) => state.reservationInfo)
  const dispatch = useAppDispatch()

  const goToSecondStep = () => {
    if (secondStep.current) {
      secondStep.current.scrollIntoView({
        behavior: "smooth",
      })
      setTimeout(() => {
        window.scrollBy({
          top: -60,
          behavior: "smooth",
        })
      }, 0)
    }
    dispatch(reservationInfoActions.setCurrentStep("2"))
  }

  return (
    <div className="p-4 bg-black bg-opacity-90 backdrop-blur-sm ">
      <button
        className="block w-fit m-auto py-2 px-14 text-lg bg-theme-blue-default hover:bg-theme-blue-light cursor-pointer disabled:hover:cursor-not-allowed disabled:bg-slate-600 transition-colors text-primary-default"
        onClick={goToSecondStep}
        disabled={!hour}
      >
        {hour ? "Proceed" : "Please select an hour"}
      </button>
    </div>
  )
}
