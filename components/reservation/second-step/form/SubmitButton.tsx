"use client"

import BarLoader from "@/components/loaders/BarLoader"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"
import type { PortalProps } from "@/types/models"
import { lazy, Suspense } from "react"
import ConfirmationModal from "../ConfirmationModal"

const Portal = lazy(
  () =>
    new Promise<{ default: React.ComponentType<PortalProps> }>((resolve) => {
      setTimeout(() => resolve(import("@/components/Portal")), 4000)
    })
)

export default function SubmitButton() {
  const dispatch = useAppDispatch()
  const { reservationConfirmationModalDisplay } = useAppSelector(
    (state) => state.app
  )

  const sumbitHandler = () => {
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
