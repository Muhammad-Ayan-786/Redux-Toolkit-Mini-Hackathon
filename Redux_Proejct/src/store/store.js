import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import applicationsReducer from './features/applicationsSlice'
import uiReducer from './features/uiSlice'

export const store = configureStore({
  reducer: {
    authentication: authReducer,
    applications: applicationsReducer,
    ui: uiReducer,
  }
})