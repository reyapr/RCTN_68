import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Fn Component',
  count: 0
}

// reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count += 1
    },
    /**
     * 
     * @param {*} state 
     * @param {*} payload = {
     *  value : 10
     * }
     */
    dynamicIncrement: (state, action) => { 
      state.count += action.payload.value
    }
  }
})

// actions
export const { increment, decrement, dynamicIncrement } = counterSlice.actions // object list of action

// for creating a store later
export default counterSlice.reducer