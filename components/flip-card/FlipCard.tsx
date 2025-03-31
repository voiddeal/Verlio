"use client"

import { useRef, useState, createContext } from "react"
import "./styles/flip-card.css"

interface Props {
  id: string
  front: React.ReactNode | React.JSX.Element
  back: React.ReactNode | React.JSX.Element
  size?: string
  frontSize?: string
  backSize?: string
  frontWidth?: string
  backWidth?: string
  frontHeight?: string
  backHeight?: string
  direction?: "top" | "right" | "bottom" | "left"
  duration?: number
}

export default function FlipCard({
  id,
  front,
  back,
  size,
  frontSize,
  backSize,
  frontWidth,
  backWidth,
  frontHeight,
  backHeight,
  direction,
  duration,
}: Props) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  const face = useRef<HTMLDivElement>(null)

  return (
    <FlipContext.Provider value={{ isFlipped }}>
      <div className="container" id={id}>
        <div
          className={`face ${isFlipped ? "is-flipped" : ""}`}
          ref={face}
          data-direction={direction || "left"}
          style={
            {
              "--front-width": frontWidth || frontSize || size || "auto",
              "--front-height": frontHeight || frontSize || size || "auto",
              "--back-width": backWidth || backSize || size || "auto",
              "--back-height": backHeight || backSize || size || "auto",
              "--duration": duration ? `${duration}ms` : `${1000}ms`,
            } as React.CSSProperties
          }
        >
          <div
            className={`front ${isFlipped ? "off-view" : "in-view"}`}
            onClick={() => setIsFlipped(true)}
          >
            {front}
          </div>
          <div
            className={`back ${isFlipped ? "in-view" : "off-view"}`}
            onClick={() => setIsFlipped(false)}
          >
            {back}
          </div>
        </div>
      </div>
    </FlipContext.Provider>
  )
}

export const FlipContext = createContext({ isFlipped: false })
