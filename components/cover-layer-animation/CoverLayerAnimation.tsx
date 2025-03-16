"use client"

import { useInView } from "react-intersection-observer"
import { useState } from "react"
import "./cover-layer-animation.css"

export default function CoverLayer() {
  const [isInView, setIsInView] = useState(false)
  const { ref } = useInView({
    threshold: [0, 0.7], // Observe multiple thresholds
    triggerOnce: false,
    onChange: (inView, entry) => {
      // Use the `inView` argument to toggle state
      if (inView && entry.intersectionRatio >= 0.7) {
        setIsInView(true) // Element enters at 70% visibility
      } else if (!inView && entry.intersectionRatio <= 0) {
        setIsInView(false) // Element exits at 25% visibility
      }
    },
  })

  return (
    <div
      ref={ref}
      className={`cover-layer-container ${isInView ? "active" : ""}`}
    ></div>
  )
}
