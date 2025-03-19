import { configureStore } from "@reduxjs/toolkit"
import reservationInfo from "./slices/reservationInfoSlice"
import app from "./slices/appSlice"

export const makeStore = () => {
  return configureStore({
    reducer: { reservationInfo, app },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
