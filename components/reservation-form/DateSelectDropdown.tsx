"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import today from "@/utils/today"
import { IoIosArrowDown } from "react-icons/io"

export default function DateSelectDropdown() {
  const dispatch = useAppDispatch()
  const { isClosed } = useAppSelector((state) => state.restaurant)
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
    const isToday = index === 0
    const tomorrow = index === 1

    return (
      <option value={date} key={index} disabled={isToday && isClosed}>
        {isToday ? "Today" : tomorrow ? "Tomorrow" : name}
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
        defaultValue={today()}
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
