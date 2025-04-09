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
  ref: React.RefObject<T | null>
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

    updateRect()

    window.addEventListener("scroll", updateRect)

    return () => {
      window.removeEventListener("scroll", updateRect)
    }
  }, [ref])

  return rect
}
