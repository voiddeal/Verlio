"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"
import { IoIosArrowDown, IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaCircleXmark } from "react-icons/fa6"

export default function HourSelectButton() {
  const dispatch = useAppDispatch()
  const { hour } = useAppSelector((state) => state.reservationInfo)
  const openHourSelectionModal = () => {
    dispatch(appActions.setHourModalDisplay(true))
  }

  return (
    <div>
      {hour ? (
        <IoMdCheckmarkCircleOutline
          color="green"
          size={50}
          className="mx-auto mb-4"
        />
      ) : (
        <FaCircleXmark color="coral" size={50} className="mx-auto mb-4" />
      )}
      <div
        className={`reservation-form-basics-container ${
          hour ? "" : "required"
        }`}
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
    </div>
  )
}
