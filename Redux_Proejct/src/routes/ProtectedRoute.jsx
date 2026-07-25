import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const ProtectedRoute = ({ children }) => {

  const { loggedInUser } = useSelector(state => state.authentication)

  if (!loggedInUser) {
    return <Navigate to={'/'} />
  }

  return <Outlet />
}

export default ProtectedRoute