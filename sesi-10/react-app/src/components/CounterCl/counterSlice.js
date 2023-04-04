import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Class Component',
  count: 0
}

// reducer
const counterSlice = createSlice({
  name: 'counter-class',
  initialState,
  reducers: {
    increment: (state) => {
      console.log( `<===================increment  ==================`);
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    /**
     * 
     * @param {*} state 
     * @param {*} payload = {
     *  value : 10
     * }
     */
    dynamicIncrement: (state, payload) => { 
      state.count += payload.value
    }
  }
})

// actions
export const { increment, decrement, dynamicIncrement } = counterSlice.actions // object list of action

// for creating a store later
export default counterSlice.reducer