import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  errorMessage: '',
  isLoading: false
}

const pupuraCallApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(email === 'admin@login.com' && password === 'admin') {
        resolve({ email })
      } else {
        reject('Invalid email and password')
      }
    }, 2000);   
  })
}

// authLoginApi({ email: 'bambang', password: 'sedunia' })
export const authLoginApi = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const response = await pupuraCallApi(email, password)
    return response.email
  } catch (error) {
    throw error
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLoginApi.pending, state => {
        state.isLoading = true
        state.errorMessage = ''
        state.user = {}
      })
      .addCase(authLoginApi.fulfilled, (state, action) => {
        state.isLoading = false
        state.errorMessage = ''

        state.user = { email: action.payload }
      })
      .addCase(authLoginApi.rejected, (state, action) => {
        state.isLoading = false
        state.user = {}
        state.errorMessage = action.error.message
      })
  }
})

export default authSlice.reducer