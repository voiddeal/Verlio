"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { ReservationInfo } from "@/types/models"
import { useState } from "react"

export default function OccasionInput() {
  const [value, setValue] = useState<string>("")
  const dispatch = useAppDispatch()
  const handleOccasionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.currentTarget
    const value = e.currentTarget.value as ReservationInfo["occasion"]
    if (value === "none") {
      target.selectedIndex = 0
    }
    setValue(value)
    dispatch(reservationInfoActions.setOccasion(value))
  }

  return (
    <select
      name="occasion"
      aria-label="Select an occasion (optional)"
      className="border p-3 w-fit"
      value={value}
      onChange={handleOccasionChange}
    >
      <option hidden>Select an occasion (optional)</option>
      <option label="None" value="none">
        None
      </option>
      <option label="Birthday" value="birthday">
        Birthday
      </option>
      <option label="date" value="date">
        Date
      </option>
      <option label="Anniversary" value="anniversary">
        Anniversary
      </option>
      <option label="Special Occasion" value="special-occasion">
        Special Occasion
      </option>
      <option label="Business Meal" value="business-meal">
        Business Meal
      </option>
    </select>
  )
}
