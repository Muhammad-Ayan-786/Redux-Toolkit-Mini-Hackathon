import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'authentication',

  initialState: {
    registeredUsers: JSON.parse(localStorage.getItem('registeredUsers')) || [],
    loggedInUser: JSON.parse(localStorage.getItem('loggedInUser'))
  },

  reducers: {
    addUser: (state, action) => {
      state.registeredUsers.push(action.payload)
      localStorage.setItem('registeredUsers', JSON.stringify(state.registeredUsers))
    },
    loginUser: (state, action) => {
      state.loggedInUser = action.payload
      localStorage.setItem('loggedInUser', JSON.stringify(state.loggedInUser))
    }
  }
})

export const {
  registeredUsers,
  loggedInUser,
  addUser,
  loginUser
} = authSlice.actions

export default authSlice.reducer