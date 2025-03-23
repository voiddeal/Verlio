"use client"

import { useEffect, useState } from "react"
import { isBrowser } from "./isBrowser"

export default function scrollYTracker(): number {
  const [y, setY] = useState<number>(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      if (!isBrowser()) return
      setY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return y
}
