"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { CiLock } from "react-icons/ci"
import CountdownTimer from "@/components/CountdownTimer"
import { FaArrowTurnUp } from "react-icons/fa6"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import ReservationSecondStepForm from "./ReservationSecondStepForm"

interface Props {
  ref: React.RefObject<HTMLDivElement | null>
  firstStep: React.RefObject<HTMLDivElement | null>
}

export default function ReservationSecondStep({ ref, firstStep }: Props) {
  const { currentStep } = useAppSelector((state) => state.reservationInfo)
  const dispatch = useAppDispatch()

  const backToFirstStep = () => {
    if (firstStep.current) {
      firstStep.current.scrollIntoView({
        behavior: "smooth",
      })
      setTimeout(() => {
        window.scrollBy({
          top: -60,
          behavior: "smooth",
        })
      }, 0)
    }
    dispatch(reservationInfoActions.setCurrentStep("1"))
  }

  return (
    <div className="relative my-4" ref={ref}>
      {/* Lock overaly */}
      <div
        className={
          currentStep === "2"
            ? "hidden"
            : "absolute w-full h-full bg-black bg-opacity-60 backdrop-blur-[2px] text-center text-white text-lg z-10"
        }
      >
        <CiLock className="inline-block m-auto size-28 mt-10" />
      </div>
      <button
        className="flex justify-center items-center w-fit m-auto py-2 px-14 text-lg bg-theme-blue-default hover:bg-theme-blue-light cursor-pointer disabled:hover:cursor-not-allowed disabled:bg-slate-600 transition-colors text-primary-default"
        onClick={backToFirstStep}
      >
        <span className="pr-4">Back to Date & Time</span>
        <FaArrowTurnUp className="inline" />
      </button>
      <div className="bg-sky-100 py-2 my-4 text-center">
        <p>
          Due to limited availability, we can hold a table for you for 5
          minutes.
        </p>
        {currentStep === "2" ? <CountdownTimer /> : null}
      </div>
      <div className="py-6">
        <h4 className="text-xl py-4 font-semibold">
          <span>Things To Know </span>
          <FaArrowTurnUp className="inline rotate-180 -scale-x-100 ml-2" />
        </h4>
        <div>
          <h6 className="font-semibold">Important dining information</h6>
          <p>
            We have a 15 minute grace period. Please call us if you are running
            later than 15 minutes after your reservation time.
          </p>
          <br />
          <p>
            We may contact you about this reservation, so please ensure your
            email and phone number are up to date.
          </p>
          <br />
          <p>
            Your table will be reserved for 1 hour 45 minutes for parties of up
            to 2; 2 hours for parties of up to 4; and 2 hours 30 minutes for
            parties of 5+.
          </p>
        </div>
        <br />
        <div>
          <h6 className="font-semibold">A note from the restaurant</h6>
          <p>
            Your reservation is booked for indoors. We do not allow any outside
            food. For groups of 6 or more, your bill will be presented as one,
            with an automatic 20% gratuity.
          </p>
        </div>
      </div>
      <h3 id="reservation-form-second-step" className="py-2 text-xl font-bold">
        2. Your Details
      </h3>
      <ReservationSecondStepForm />
      <p className="text-sm">
        By selecting “Confirm Reservation” you are agreeing to the terms and
        conditions of the Verlio User Agreement and Privacy Policy.
      </p>
      <br />
      <p className="text-sm">
        *Message & data rates may apply. You can opt out of receiving text
        messages at any time in your account setting or by replying STOP.
      </p>
      <br />
      <p className="text-sm">
        Certain U.S. consumers may have additional data rights, which can be
        exercised by clicking Do Not Sell or Share My Personal Information.
      </p>
    </div>
  )
}
