import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/redux/store"
import today from "@/utils/today"

interface ReservationInfo {
  party: string
  date: string
  hour: string | undefined
  fname: string | undefined
  lname: string | undefined
  tel: string | undefined
  email: string | undefined
  request: string | undefined
  occasion:
    | "none"
    | "birthday"
    | "date"
    | "anniversary"
    | "special-occasion"
    | "business-meal"
}

const initialState: ReservationInfo = {
  party: "2",
  date: today(),
  hour: undefined,
  fname: undefined,
  lname: undefined,
  tel: undefined,
  email: undefined,
  request: undefined,
  occasion: "none",
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
    setFname: (state, action: PayloadAction<ReservationInfo["fname"]>) => {
      state.fname = action.payload
    },
    setLname: (state, action: PayloadAction<ReservationInfo["lname"]>) => {
      state.lname = action.payload
    },
    setTel: (state, action: PayloadAction<ReservationInfo["tel"]>) => {
      state.tel = action.payload
    },
    setEmail: (state, action: PayloadAction<ReservationInfo["email"]>) => {
      state.email = action.payload
    },
    setRequest: (state, action: PayloadAction<ReservationInfo["request"]>) => {
      state.request = action.payload
    },
    setOccasion: (
      state,
      action: PayloadAction<ReservationInfo["occasion"]>
    ) => {
      state.occasion = action.payload
    },
  },
})

export default reservationInfoSlice.reducer
export const reservationInfoActions = reservationInfoSlice.actions
export const selectReservationInfo = (state: RootState) => state.reservationInfo
