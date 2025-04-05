"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { useState } from "react"

export default function RequestInput() {
  const [value, setValue] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
    dispatch(reservationInfoActions.setRequest(e.currentTarget.value))
  }

  return (
    <textarea
      value={value}
      onChange={handleChange}
      name="specialRequest"
      aria-label="Add a special request (optional)"
      placeholder="Add a special request (optional)"
      className="border p-3 sm:w-4/12"
    />
  )
}
