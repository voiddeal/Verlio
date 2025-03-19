"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"
import { IoIosArrowDown } from "react-icons/io"

export default function HourSelectButton() {
  const dispatch = useAppDispatch()
  const { hour } = useAppSelector((state) => state.reservationInfo)
  const openHourSelectionModal = () => {
    dispatch(appActions.setIsHourModalOpen(true))
  }

  return (
    <div
      className={`reservation-form-basics-container ${hour ? "" : "required"}`}
    >
      <div
        className="reservation-form-basics"
        aria-label="Choose an hour"
        onClick={openHourSelectionModal}
      >
        {hour ? hour : "Select hour"}
      </div>
      <div className="reservation-form-dropdown-arrow-container">
        <IoIosArrowDown />
      </div>
    </div>
  )
}
