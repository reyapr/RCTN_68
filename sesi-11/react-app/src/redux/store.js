import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from '../components/Counter/slice'
import usersSliceReducer from '../components/Users/slice'
import authSliceReducer from '../components/Auth/slice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    users: usersSliceReducer,
    auth: authSliceReducer
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
  devTools: true
})