"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { useState } from "react"

export default function TelInput() {
  const [value, setValue] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    dispatch(reservationInfoActions.setTel(e.currentTarget.value))
  }

  return (
    <input
      value={value}
      onChange={handleChange}
      type="tel"
      name="tel"
      placeholder="Phone number"
      className="border p-3"
      required
    />
  )
}
