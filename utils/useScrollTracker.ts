"use client"

import { useEffect, useState } from "react"

export default function useScrollTracker() {
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    // Set the initial scroll position
    setScrollY(window.scrollY)

    // Attach the event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollY
}
