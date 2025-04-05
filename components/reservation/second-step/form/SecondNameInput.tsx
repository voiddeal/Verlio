"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { useState } from "react"

export default function SecondNameInput() {
  const [value, setValue] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    dispatch(reservationInfoActions.setLname(e.currentTarget.value))
  }

  return (
    <input
      type="text"
      name="lname"
      value={value}
      onChange={handleChange}
      placeholder="Last Name"
      className="border p-3 sm:w-4/12"
    />
  )
}
