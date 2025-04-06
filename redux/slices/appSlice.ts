import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/redux/store"

interface App {
  isClosed: boolean
  hourModalDisplay: boolean
  reservationConfirmationModalDisplay: boolean
  locationModalDisplay: boolean
  currentReservationStep: 1 | 2
}

const initialState: App = {
  isClosed: false,
  hourModalDisplay: false,
  reservationConfirmationModalDisplay: false,
  locationModalDisplay: false,
  currentReservationStep: 1,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsClosed: (state, action: PayloadAction<App["isClosed"]>) => {
      state.isClosed = action.payload
    },

    setHourModalDisplay: (
      state,
      action: PayloadAction<App["hourModalDisplay"]>
    ) => {
      state.hourModalDisplay = action.payload
    },

    setReservationConfirmationModalDisplay: (
      state,
      action: PayloadAction<App["reservationConfirmationModalDisplay"]>
    ) => {
      state.reservationConfirmationModalDisplay = action.payload
    },

    setLocationModalDisplay: (
      state,
      action: PayloadAction<App["locationModalDisplay"]>
    ) => {
      state.locationModalDisplay = action.payload
    },

    setCurrentReservationStep: (
      state,
      action: PayloadAction<App["currentReservationStep"]>
    ) => {
      state.currentReservationStep = action.payload
    },
  },
})

export default appSlice.reducer
export const appActions = appSlice.actions
export const selectApp = (state: RootState) => state.app
