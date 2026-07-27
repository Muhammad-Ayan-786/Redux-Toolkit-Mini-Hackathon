import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',

  initialState: {
    isFormOpen: false,
    isViewingApp: null,
    searchQuery: ''
  },

  reducers: {
    openAddForm: (state) => {
      state.isFormOpen = true
    },

    closeForm: (state) => {
      state.isFormOpen = false
    },

    openEditForm: (state) => {
      state.isFormOpen = true
    },

    openDetailView: (state, action) => {
      state.isViewingApp = action.payload
    },

    closeDetailView: (state) => {
      state.isViewingApp = null
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    }
  }
})

export const {
  openAddForm,
  openEditForm,
  closeForm,
  openDetailView,
  closeDetailView,
  setSearchQuery
} = uiSlice.actions

export default uiSlice.reducer