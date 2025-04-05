"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"
import ConfirmationModal from "../ConfirmationModal"
import { lazy, Suspense } from "react"
import BarLoader from "@/components/loaders/BarLoader"

const Portal = lazy(
  () =>
    new Promise<{ default: React.ComponentType<any> }>((resolve) => {
      setTimeout(() => resolve(import("@/components/Portal")), 10000)
    })
)

export default function SubmitButton() {
  const dispatch = useAppDispatch()
  const { reservationConfirmationModalDisplay } = useAppSelector(
    (state) => state.app
  )

  const sumbitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    const formElement = document.getElementById(
      "reservation-form"
    ) as HTMLFormElement

    if (!formElement.checkValidity()) {
      formElement.reportValidity()
      return
    }

    dispatch(appActions.setReservationConfirmationModalDisplay(true))
  }
  return (
    <>
      <button
        type="button"
        className="block w-full text-center cursor-pointer py-4 text-xl bg-theme-blue-dark/100 text-white mb-8 hover:bg-theme-blue-default/100"
        onClick={sumbitHandler}
      >
        Confirm Reservation
      </button>
      {reservationConfirmationModalDisplay && (
        <Suspense fallback={<BarLoader />}>
          <Portal>
            <ConfirmationModal />
          </Portal>
        </Suspense>
      )}
    </>
  )
}
