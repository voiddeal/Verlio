"use client"

import { useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"

export default function FirstNameInput() {
  const [value, setValue] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    dispatch(reservationInfoActions.setFname(e.currentTarget.value))
  }

  return (
    <div className="flex flex-col gap-y-1">
      <input
        value={value}
        onChange={handleChange}
        name="fname"
        type="text"
        placeholder="First Name"
        className="border p-3 sm:w-4/12"
        required
      />
      <small>First name is required.</small>
    </div>
  )
}
