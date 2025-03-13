import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/redux/store"
import today from "@/utils/today"

interface ReservationInfo {
  party: string
  date: string
  hour: string | undefined
}

const initialState: ReservationInfo = {
  party: "2",
  date: today(),
  hour: undefined,
}

export const reservationInfoSlice = createSlice({
  name: "reservation-info",
  initialState,
  reducers: {
    setParty: (state, action: PayloadAction<ReservationInfo["party"]>) => {
      state.party = action.payload
    },
    setDate: (state, action: PayloadAction<ReservationInfo["date"]>) => {
      state.date = action.payload
    },
    setHour: (state, action: PayloadAction<ReservationInfo["hour"]>) => {
      state.hour = action.payload
    },
    resetHour: (state) => {
      state.hour = ""
    },
  },
})

export default reservationInfoSlice.reducer
export const reservationInfoActions = reservationInfoSlice.actions
export const selectReservationInfo = (state: RootState) => state.reservationInfo
