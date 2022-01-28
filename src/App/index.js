import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Reducer/UserReducer'
export const index = configureStore({
  reducer: {
      User:UserSlice,
  },
})