import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../slices/UserSlices'



export const store = configureStore({
    reducer: {
      usersInfo: UserReducer,
      
    },
  })