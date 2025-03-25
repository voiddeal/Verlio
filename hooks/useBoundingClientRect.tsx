import { useEffect, useState } from "react"

interface Rect {
  top: number
  right: number
  left: number
  bottom: number
  width: number
  height: number
}

const initialValue: Rect = {
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: 0,
  height: 0,
}

export default function useBoundingClientRect<T extends HTMLElement>(
  ref: React.RefObject<T | null> // Account for `null` in the ref type
): Rect {
  const [rect, setRect] = useState<Rect>(initialValue)

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        const domRect = ref.current.getBoundingClientRect()
        const { top, right, bottom, left, width, height } = domRect
        setRect({ top, right, left, bottom, width, height })
      }
    }

    // Initialize rect when component mounts
    updateRect()

    // Add event listeners to update the rect on scroll and resize
    window.addEventListener("scroll", updateRect)
    window.addEventListener("resize", updateRect)

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateRect)
      window.removeEventListener("resize", updateRect)
    }
  }, [ref])

  return rect
}
