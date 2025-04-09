"use client"

import { useInView } from "react-intersection-observer"
import { useState } from "react"
import "./cover-layer-animation.css"

/* 
apply the CoverLayer as a direct child of its parent.
the container element must be position: relative;
*/

interface Props {
  to?: "left" | "right" | "top" | "bottom"
  follow?: boolean
  threshold?: [number, number]
}

export default function CoverLayer({
  to = "right",
  follow = false,
  threshold = [0, 0.6],
}: Props) {
  const [isInView, setIsInView] = useState(false)
  const { ref } = useInView({
    threshold,
    triggerOnce: false,
    onChange: (inView, entry) => {
      if (inView && entry.intersectionRatio >= threshold[1]) {
        setIsInView(true)
      } else if (!inView && entry.intersectionRatio <= threshold[0]) {
        setIsInView(false)
      }
    },
  })

  return (
    <div
      ref={ref}
      className={`cover-layer-container ${isInView ? "hide" : ""}`}
    >
      <div
        className={`cover-layer to-${to} ${follow ? "follow" : "no-follow"} ${
          isInView ? "active" : ""
        }`}
      ></div>
    </div>
  )
}
