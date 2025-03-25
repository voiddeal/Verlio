"use client"

import { useEffect, useRef, useState } from "react"
import { isBrowser } from "./isBrowser"

// const initialValue = isBrowser() ? window.scrollY : 0
const initialValue = window.scrollY

export default function useScrollTracker() {
  const [scrollY, setScrollY] = useState<number>(initialValue)
  const isScrollListenerInitialized = useRef<boolean>(false)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    if (!isScrollListenerInitialized.current) {
      isScrollListenerInitialized.current = true
      window.addEventListener("scroll", handleScroll)
    }
  }, [])
  return scrollY
}
