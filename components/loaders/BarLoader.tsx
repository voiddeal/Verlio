"use client"

import Loader from "react-spinners/BarLoader"

export default function BarLoader() {
  return (
    <div className="fixed h-dvh w-dvw inset-0 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md z-30">
      <span className="text-2xl text-white py-2">Reserving Table</span>
      <Loader color="teal" height={5} width={200} />
    </div>
  )
}
