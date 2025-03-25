"use client"

import useGenerateHourOptions from "@/hooks/useGenerateHourOptions"
import { useAppDispatch } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { appActions } from "@/redux/slices/appSlice"
import { FaMinus } from "react-icons/fa6"
import { useEffect, useRef } from "react"
import "./styles/hour-selection-modal.css"

export default function HourSelectModal() {
  const dispatch = useAppDispatch()
  const list = useRef<HTMLUListElement>(null)

  const timeOptions = useGenerateHourOptions()
  const timeOptionElementsList = timeOptions.map((time) => {
    const { content, selected } = time

    return (
      <li
        key={content}
        data-selected={`${selected}`}
        className="py-4 border-t last:border-b hover:bg-theme-green-light active:bg-theme-green-default hover:text-primary-default select-none cursor-pointer data-[selected=true]:bg-theme-green-default data-[selected=true]:text-primary-default"
        onClick={() => selectHour(content)}
      >
        {content.toLowerCase()}
      </li>
    )
  })

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget.id === "modal-backdrop") {
      dispatch(appActions.setShouldHourModalOpen(false))
    }
  }

  const selectHour = (time: string) => {
    dispatch(reservationInfoActions.setHour(time))
    dispatch(appActions.setShouldHourModalOpen(false))
  }

  useEffect(() => {
    document.documentElement.style.overflow = "hidden"
    document.documentElement.style.height = "100vh"
    const li = list.current?.querySelector('li[data-selected="true"]')
    setTimeout(() => {
      li?.scrollIntoView({ behavior: "smooth" })
    }, 500) // 500 is the time it takes for the translate animation to finish

    return () => {
      document.documentElement.style.overflow = "unset"
      document.documentElement.style.height = "auto"
    }
  }, [])

  return (
    <div
      id="modal-backdrop"
      className="fixed h-dvh w-dvw inset-0 bg-black bg-opacity-20 backdrop-blur-xl text-white flex justify-center items-center z-50 overflow-y-auto pt-20"
      onClick={handleBackdropClick}
    >
      <ul className="hour-selection-modal-list" ref={list}>
        {timeOptionElementsList}
        <li
          className="flex justify-center items-center gap-x-2 cursor-pointer py-8 bg-theme-blue-dark hover:bg-red-400 hover:text-white"
          onClick={() => dispatch(reservationInfoActions.resetHour())}
        >
          <FaMinus className="text-red-600" />
          <small>CLEAR</small>
        </li>
      </ul>
    </div>
  )
}
