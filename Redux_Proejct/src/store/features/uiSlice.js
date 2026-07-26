import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',

  initialState: {
    isFormOpen: false,
    isEditing: false,
    isViewingApp: null,
    searchQuery: ''
  },

  reducers: {
    openAddForm: (state) => {
      state.isFormOpen = true
      state.editingApp = false
    },

    closeForm: (state) => {
      state.isFormOpen = false
      state.editingApp = false
    },

    openEditForm: (state) => {
      state.isFormOpen = true
      state.editingApp = true
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