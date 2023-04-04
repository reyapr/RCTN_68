import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/counterSlice'
import counterClReducer from '../components/CounterCl/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterCl: counterClReducer
  }
})