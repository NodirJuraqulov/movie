import { configureStore } from '@reduxjs/toolkit'
import saved from './features/saved'

export const store = configureStore({
  reducer: {
    saved
  },
})