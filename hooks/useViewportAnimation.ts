"use client"

import { useRef, useEffect } from "react"

/* 
A hook for creating smooth animation of an UI element,
based on its current position on the viewport.
Supports movement in X and Y.
throttling for improved performance.
*/

interface UseSmoothAnimationProps {
  targetValue: { x?: number; y?: number }
  elementRef: React.RefObject<HTMLElement | null>
  factor?: number // Smoothing factor (default 0.05)
}

const useSmoothAnimation = ({
  targetValue,
  elementRef,
  factor = 0.05,
}: UseSmoothAnimationProps): void => {
  const currentPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)
  const lastUpdate = useRef<number>(0)

  useEffect(() => {
    if (!elementRef.current) return
    const element = elementRef.current

    const updatePosition = (timestamp: number) => {
      const timeSinceLastUpdate = timestamp - lastUpdate.current

      // Throttle updates to ~60fps (16ms per frame)
      if (timeSinceLastUpdate > 16) {
        const nextX =
          targetValue.x !== undefined
            ? currentPosition.current.x +
              (targetValue.x - currentPosition.current.x) * factor
            : currentPosition.current.x

        const nextY =
          targetValue.y !== undefined
            ? currentPosition.current.y +
              (targetValue.y - currentPosition.current.y) * factor
            : currentPosition.current.y

        currentPosition.current = { x: nextX, y: nextY }

        element.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`

        lastUpdate.current = timestamp
      }

      animationRef.current = requestAnimationFrame(updatePosition)
    }

    animationRef.current = requestAnimationFrame(updatePosition)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [targetValue, elementRef, factor])
}

export default useSmoothAnimation
