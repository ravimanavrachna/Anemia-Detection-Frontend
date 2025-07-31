import { configureStore } from '@reduxjs/toolkit'
import donorSlice from "./donorReducer"
import doctorSlice from "./doctorReducer"

export const store = configureStore({
  reducer: {
    donorSlice,
    doctorSlice
  },
})