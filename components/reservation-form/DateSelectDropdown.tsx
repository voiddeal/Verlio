"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import dateFormatter from "@/utils/today"
import { IoIosArrowDown } from "react-icons/io"

export default function DateSelectDropdown() {
  const dispatch = useAppDispatch()
  const generateNextDay = (() => {
    let count = 0
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    return () => {
      const today = new Date()
      const nextDay = new Date(today)
      nextDay.setDate(today.getDate() + count)
      const nextDayName = daysOfWeek[nextDay.getDay()]
      count++
      return {
        name: nextDayName,
        date: nextDay.toLocaleDateString("en-CA", {
          timeZone: "America/Toronto",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
      }
    }
  })()

  const dayOptions = new Array(7).fill(null).map((_item, index) => {
    const { date, name } = generateNextDay()
    return (
      <option value={date} key={index}>
        {index === 0 ? "Today" : index === 1 ? "Tomorrow" : name}
      </option>
    )
  })

  const updateDate = (date: string) => {
    dispatch(reservationInfoActions.setDate(date))
    dispatch(reservationInfoActions.resetHour())
  }

  return (
    <div className="reservation-form-basics-container">
      <select
        name="reservation-date"
        className="reservation-form-basics"
        defaultValue={dateFormatter()}
        aria-label="Choose a date"
        onChange={(e) => updateDate(e.currentTarget.value)}
      >
        {dayOptions}
      </select>
      <div className="reservation-form-dropdown-arrow-container">
        <IoIosArrowDown />
      </div>
    </div>
  )
}
