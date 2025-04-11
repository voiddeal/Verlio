"use client"

import { useAppSelector } from "@/redux/hooks"
import { useState, useEffect } from "react"

interface CountdownTimerProps {
  time?: number
}

export default function CountdownTimer({ time = 300 }: CountdownTimerProps) {
  const { currentReservationStep } = useAppSelector((state) => state.app)
  const [timeLeft, setTimeLeft] = useState<number>(time)
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          // When times reached 0
          clearInterval(interval)
          setIsTimeUp(true)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    if (currentReservationStep !== 2) {
      clearInterval(interval)
      setTimeLeft(time)
      setIsTimeUp(false)
    }

    return () => clearInterval(interval)
  }, [currentReservationStep, time])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div>
      {isTimeUp ? (
        <p className="text-red-400">
          Time is up. You can continue but the reservation may not be
          successful.
        </p>
      ) : (
        <>
          <span>Time Left: </span>
          <strong>{formatTime(timeLeft)}</strong>
        </>
      )}
    </div>
  )
}
