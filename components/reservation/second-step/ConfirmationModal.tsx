"use client"

import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { GoPerson } from "react-icons/go"
import { CiCalendar } from "react-icons/ci"
import { appActions } from "@/redux/slices/appSlice"

export default function ConfirmationModal() {
  const dispatch = useAppDispatch()
  const { fname, lname, party, email, date, hour, occasion, request, tel } =
    useAppSelector((state) => state.reservationInfo)

  useEffect(() => {
    document.documentElement.style.overflow = "hidden"
    document.documentElement.style.height = "100vh"

    return () => {
      document.documentElement.style.overflow = "unset"
      document.documentElement.style.height = "auto"
    }
  }, [])

  return (
    <dialog
      id="reservation-confirmation-modal"
      className="fixed h-dvh w-dvw inset-0 bg-black bg-opacity-20 backdrop-blur-xl text-white flex flex-col justify-center items-center z-50 overflow-y-auto"
    >
      <div className="w-[90%] sm:w-6/12 bg-blue-500/50 rounded-lg ">
        <center className="text-2xl border-b-2 py-4 flex justify-center items-center gap-x-1 text-theme-green-default">
          <span className="">Reservation Successful!</span>
          <span>
            <IoMdCheckmarkCircleOutline />
          </span>
        </center>
        <div className="flex flex-col gap-y-2 p-4">
          <span>
            Reserved By:{" "}
            <strong>
              {fname} {lname}
            </strong>
          </span>
          <span className="flex items-center gap-x-2">
            <CiCalendar size={20} />
            At:{" "}
            <strong>
              {date.split(" | ")[1]} {hour?.toLowerCase()}
            </strong>
          </span>
          <span className="flex items-center gap-x-2">
            <GoPerson size={20} />
            For: <strong>{party} People</strong>
          </span>
          <span className="mt-4">Details:</span>
          <div className="flex flex-col border p-4">
            <span>Email: {email}</span>
            <span>Phone Number: {tel}</span>
            <span>Occasion: {occasion}</span>
            <span title={request}>
              Special Request: {request ? "Received" : "none"}
            </span>
          </div>
        </div>
      </div>
      <button
        className="text-xl bg-theme-green-dark px-8 py-4 rounded-lg my-4 cursor-pointer"
        onClick={() =>
          dispatch(appActions.setReservationConfirmationModalDisplay(false))
        }
      >
        OK
      </button>
    </dialog>
  )
}
