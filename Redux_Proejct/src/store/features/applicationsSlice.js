import { createSlice, nanoid } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "applications",

  initialState: {
    applicationsArr: JSON.parse(localStorage.getItem('applicationsArray')) || [],
    editingApp: null
  },

  reducers: {
    addApplication: (state, action) => {
      state.applicationsArr.push({
        ...action.payload,
        id: nanoid()
      })
      localStorage.setItem('applicationsArray', JSON.stringify(state.applicationsArr))
    },

    setEditApp: (state, action) => {
      state.editingApp = action.payload
    },

    resetEditApp: (state) => {
      state.editingApp = null
    },

    updateApplication: (state, action) => {
      const currentApp = state.applicationsArr.findIndex(app => app.id === state.editingApp.id)

      state.applicationsArr[currentApp] = action.payload
      localStorage.setItem('applicationsArray', JSON.stringify(state.applicationsArr))

      state.editingApp = null
    },

    deleteApplication: (state, action) => {
      state.applicationsArr = state.applicationsArr.filter(app => app.id !== action.payload)
      localStorage.setItem('applicationsArray', JSON.stringify(state.applicationsArr))
    },
  }
})

export const {
  addApplication,
  setEditApp,
  resetEditApp,
  updateApplication,
  deleteApplication
} = applicationSlice.actions

export default applicationSlice.reducer