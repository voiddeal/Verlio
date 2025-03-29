"use client"

import { useEffect, useRef, useState } from "react"
import { isBrowser } from "./isBrowser"

export default function useScrollTracker() {
  const [scrollY, setScrollY] = useState<number>(0)
  const isScrollListenerInitialized = useRef<boolean>(false)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    if (!isScrollListenerInitialized.current) {
      isScrollListenerInitialized.current = true
      window.addEventListener("scroll", handleScroll)
    }
    setScrollY(window.scrollY)
  }, [])
  return scrollY
}
