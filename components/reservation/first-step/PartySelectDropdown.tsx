"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { IoIosArrowDown } from "react-icons/io"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

export default function PartySelectDropdown() {
  const dispatch = useAppDispatch()
  const partySizeOptions = new Array(8).fill(null).map((_item, index) => {
    return (
      <option value={index + 1} key={index}>
        {index + 1} people
      </option>
    )
  })

  const updatePartySize = (size: string) => {
    dispatch(reservationInfoActions.setParty(size))
  }

  return (
    <div>
      <IoMdCheckmarkCircleOutline
        color="green"
        size={50}
        className="mx-auto mb-4"
      />
      <div className="reservation-form-basics-container">
        <select
          name="reservation-party-size"
          defaultValue={"2"}
          className="reservation-form-basics"
          aria-label="Choose your party size"
          onChange={(e) => updatePartySize(e.currentTarget.value)}
        >
          {partySizeOptions}
        </select>
        <div className="reservation-form-dropdown-arrow-container">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  )
}
