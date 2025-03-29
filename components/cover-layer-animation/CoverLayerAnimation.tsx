"use client"

import { useInView } from "react-intersection-observer"
import { useState } from "react"
import "./cover-layer-animation.css"

/* 
apply the CoverLayer as a direct child of a container element.
the container element must be position: relative;
*/

interface Props {
  to?: "left" | "right" | "top" | "bottom"
  follow?: boolean
}

export default function CoverLayer({ to = "right", follow = false }: Props) {
  const [isInView, setIsInView] = useState(false)
  const threshold = [0, 0.5]
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
    <div ref={ref} className={`cover-layer-container`}>
      <div
        className={`cover-layer to-${to} ${follow ? "follow" : "no-follow"} ${
          isInView ? "active" : ""
        }`}
      ></div>
    </div>
  )
}
