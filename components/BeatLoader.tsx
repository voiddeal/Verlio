"use client"

import Loader from "react-spinners/BeatLoader"

export default function BeatLoader() {
  return (
    <div className="flex items-center justify-center min-h-dvh bg-gray-100 z-30">
      <Loader size={30} color="lightgreen" />
    </div>
  )
}
