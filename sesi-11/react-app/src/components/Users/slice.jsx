import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
  data: [],
  isLoading: false
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch(usersUrl)
  const data = await response.json()
  return data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
  }
})

export default usersSlice.reducer