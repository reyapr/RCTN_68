import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
  title: 'title'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, payload) => {
      state.count += 1
    },
    decrement: (state, payload) => {
      state.count -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer