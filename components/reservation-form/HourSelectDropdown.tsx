"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { IoIosArrowDown } from "react-icons/io"
import today from "@/utils/today"

export default function HourSelectDropdown() {
  const dispatch = useAppDispatch()
  const { date, hour } = useAppSelector((state) => state.reservationInfo)
  const generateTimeOptions = () => {
    const options = []
    const now = new Date()
    const isToday = date === today() // Check if reservation is for today
    const openHour = 12
    const closeHour = 22
    const intervalMinutes = 15
    const offsetMinutes = 15
    let currentHour = now.getHours()
    let currentMinutes = now.getMinutes() + offsetMinutes

    // Handle overflow when minutes exceed 60
    if (currentMinutes >= 60) {
      currentMinutes -= 60 // Reset minutes
      currentHour += 1 // Move to the next hour
    }

    // Round up to the next interval
    const remainder = currentMinutes % intervalMinutes
    if (remainder !== 0) {
      currentMinutes += intervalMinutes - remainder // Round to the next interval
      if (currentMinutes >= 60) {
        currentMinutes -= 60 // Reset minutes
        currentHour += 1 // Move to the next hour
      }
    }

    // Generate time options
    for (
      let hour = isToday ? currentHour : openHour;
      hour < closeHour;
      hour++
    ) {
      for (let minutes = 0; minutes < 60; minutes += intervalMinutes) {
        // Skip invalid intervals for "today"
        if (isToday && hour === currentHour && minutes < currentMinutes)
          continue

        const hour12 = hour % 12 === 0 ? 12 : hour % 12 // Convert to 12-hour format
        const period = hour < 12 ? "AM" : "PM"
        const time = `${hour12}:${minutes
          .toString()
          .padStart(2, "0")} ${period}`
        options.push(time)
      }
    }

    return options
  }

  const timeOptions = generateTimeOptions()
  const timeOptionElements = timeOptions.map((time, index) => (
    <option key={index} value={time}>
      {time}
    </option>
  ))
  const updateHour = (h: string) => {
    dispatch(reservationInfoActions.setHour(h))
  }

  return (
    <div className="reservation-form-basics-container">
      <select
        value={hour}
        defaultValue={hour}
        name="reservation-hour"
        className="reservation-form-basics"
        aria-label="Choose an hour"
        onChange={(e) => updateHour(e.currentTarget.value)}
      >
        <option value={""} disabled hidden>
          Select an hour
        </option>
        {timeOptionElements}
      </select>
      <div className="reservation-form-dropdown-arrow-container">
        <IoIosArrowDown />
      </div>
    </div>
  )
}
