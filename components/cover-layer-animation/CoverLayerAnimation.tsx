"use client"

import { useInView } from "react-intersection-observer"
import { useState } from "react"
import "./cover-layer-animation.css"

interface Props {
  to: "left" | "right" | "top" | "bottom"
  follow?: boolean
}

export default function CoverLayer({ to = "right", follow = false }: Props) {
  const [isInView, setIsInView] = useState(false)
  const threshold = [0, 0.4]
  const { ref } = useInView({
    threshold, // Observe multiple thresholds
    triggerOnce: false,
    onChange: (inView, entry) => {
      if (inView && entry.intersectionRatio >= threshold[1]) {
        setIsInView(true) // Element enters at 70% visibility
      } else if (!inView && entry.intersectionRatio <= threshold[0]) {
        setIsInView(false) // Element exits at 25% visibility
      }
    },
  })

  return (
    <div ref={ref} className={`cover-layer-container`}>
      <div
        className={`cover-layer to-${to} ${follow ? "follow" : "no-follow"} ${
          isInView ? "active" : ""
        }`}
      ></div>
    </div>
  )
}
