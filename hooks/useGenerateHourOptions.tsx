"use client"

interface useGenerateHourOptionsResults {
  content: string
  selected?: boolean
}

import today from "@/utils/today"
import { appActions } from "@/redux/slices/appSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

export default function useGenerateHourOptions(): useGenerateHourOptionsResults[] {
  const dispatch = useAppDispatch()
  const { hour: hourState } = useAppSelector((state) => state.reservationInfo)
  const { date } = useAppSelector((state) => state.reservationInfo)
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Vancouver" })
  )
  const options: useGenerateHourOptionsResults[] = []
  const isToday = date === today() // Check if reservation is for today
  const openHour = 12
  const closeHour = 22
  const intervalMinutes = 30
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
    let hour = isToday ? Math.max(currentHour, openHour) : openHour; // Start from the later of currentHour or openHour
    hour < closeHour;
    hour++
  ) {
    for (let minutes = 0; minutes < 60; minutes += intervalMinutes) {
      // Skip when restaurant is closed and invalid intervals for "today" OR
      // Skip AM times since the restaurant opens at 12 PM
      if (
        hour < openHour ||
        (isToday && hour === currentHour && minutes < currentMinutes)
      )
        continue

      const hour12 = hour % 12 === 0 ? 12 : hour % 12 // Convert to 12-hour format
      const period = hour < 12 ? "AM" : "PM"
      const content = `${hour12}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`

      const item = { content, selected: hourState === content }
      options.push(item)
    }
  }

  // Handle case when no options are available
  if (!options.length) {
    dispatch(appActions.setIsClosed(true))
    options.push({ content: "We're closed" })
  }

  return options
}
