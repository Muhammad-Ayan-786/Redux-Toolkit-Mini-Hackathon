import { useDispatch } from "react-redux"
import { openDetailView, openEditForm } from "../store/features/uiSlice"
import { deleteApplication, setEditApp } from "../store/features/applicationsSlice"
import toast from "react-hot-toast"

export const useApplicationHandlers = (application) => {

  const dispatch = useDispatch()

  const onEdit = () => {
    dispatch(openEditForm())
    dispatch(setEditApp(application))
  }

  const onDelete = (id) => {
    dispatch(deleteApplication(id))
    toast.success('Application deleted successfully')
  }

  return { onEdit, onDelete }
}