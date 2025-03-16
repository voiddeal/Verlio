import { useState, useEffect } from "react"

interface CountdownTimerProps {
  time?: number
}

export default function CountdownTimer({ time = 300 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(time)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          // When times reached 0
          clearInterval(interval)
          timeUp()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUp = () => {}

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div>
      <span>Time Left: </span>
      <strong>{formatTime(timeLeft)}</strong>
    </div>
  )
}
