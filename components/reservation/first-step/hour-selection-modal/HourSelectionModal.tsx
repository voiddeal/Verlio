import useGenerateHourOptions from "@/hooks/useGenerateHourOptions"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { reservationInfoActions } from "@/redux/slices/reservationInfoSlice"
import { appActions } from "@/redux/slices/appSlice"
import { FaMinus } from "react-icons/fa6"
import "./styles/hour-selection-modal.css"

export default function HourSelectModal() {
  const dispatch = useAppDispatch()
  const { isHourModalOpen } = useAppSelector((state) => state.app)
  const { hour } = useAppSelector((state) => state.reservationInfo)

  const timeOptions = useGenerateHourOptions()
  const timeOptionElementsList = timeOptions.map((time, index) => (
    <li
      key={index}
      className="py-4 border-t last:border-b hover:bg-theme-green-light hover:text-primary-default select-none cursor-pointer"
      onClick={() => selectHour(time)}
    >
      {time.toLowerCase()}
    </li>
  ))

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget.id === "modal-backdrop") {
      dispatch(appActions.setIsHourModalOpen(false))
    }
  }

  const selectHour = (time: string) => {
    dispatch(reservationInfoActions.setHour(time))
    dispatch(appActions.setIsHourModalOpen(false))
  }

  return (
    <>
      {isHourModalOpen ? (
        <div
          id="modal-backdrop"
          className="fixed h-dvh w-dvw inset-0 bg-black bg-opacity-20 backdrop-blur-xl text-white flex justify-center items-center z-40 overflow-y-auto pt-20"
          onClick={handleBackdropClick}
        >
          <ul className="hour-selection-modal-list">
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
      ) : null}
    </>
  )
}
