import { configureStore } from "@reduxjs/toolkit"
import reservationInfo from "./slices/reservationInfoSlice"
import restaurant from "./slices/restaurantSlice"

export const makeStore = () => {
  return configureStore({
    reducer: { reservationInfo, restaurant },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
