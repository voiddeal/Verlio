import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/redux/store"

interface Restaurant {
  isClosed: boolean
}

const initialState: Restaurant = {
  isClosed: false,
}

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setIsClosed: (state, action: PayloadAction<Restaurant["isClosed"]>) => {
      state.isClosed = action.payload
    },
  },
})

export default restaurantSlice.reducer
export const restaurantActions = restaurantSlice.actions
export const selectRestaurant = (state: RootState) => state.restaurant
