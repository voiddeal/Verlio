"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { IoIosArrowDown } from "react-icons/io"
import dateFormatter from "@/utils/dateFormatter"

export default function DateSelectDropdown() {
  const dispatch = useAppDispatch()
  const { isClosed } = useAppSelector((state) => state.app)
  const { date } = useAppSelector((state) => state.reservationInfo)

  const nextSevenDays = () => {
    const days = []
    const today = new Date()
    const day = new Date(today)

    for (let i = 0; i < 7; i++) {
      day.setDate(today.getDate() + i)
      const { display, iso } = dateFormatter(day)
      const [weekday] = display.split(", ")
      days.push({ weekday, iso, display })
    }

    return days
  }

  const dayOptions = nextSevenDays().map((day, index) => {
    const { weekday, iso, display } = day
    const isToday = index === 0
    const tomorrow = index === 1

    return (
      <option
        value={`${iso.toString()} | ${display}`}
        key={index}
        disabled={isToday && isClosed}
      >
        {isToday ? "Today" : tomorrow ? "Tomorrow" : weekday}
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
        value={date}
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
