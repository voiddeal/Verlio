"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { useState } from "react"

export default function EmailInput() {
  const [value, setValue] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    dispatch(reservationInfoActions.setEmail(e.currentTarget.value))
  }

  return (
    <div className="flex flex-col gap-y-1">
      <input
        value={value}
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Email"
        className="border p-3 sm:w-4/12"
        required
      />
      <small>Email is required.</small>
    </div>
  )
}
