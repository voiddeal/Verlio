import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/redux/store"

interface App {
  isClosed: boolean
  shouldHourModalOpen: boolean
  currentReservationStep: 1 | 2
}

const initialState: App = {
  isClosed: false,
  shouldHourModalOpen: false,
  currentReservationStep: 1,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsClosed: (state, action: PayloadAction<App["isClosed"]>) => {
      state.isClosed = action.payload
    },
    setShouldHourModalOpen: (
      state,
      action: PayloadAction<App["shouldHourModalOpen"]>
    ) => {
      state.shouldHourModalOpen = action.payload
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
