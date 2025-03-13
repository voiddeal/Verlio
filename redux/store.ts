import { configureStore } from "@reduxjs/toolkit"
import reservationInfoReducer from "./slices/reservationInfoSlice"

export const makeStore = () => {
  return configureStore({
    reducer: { reservationInfo: reservationInfoReducer },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
