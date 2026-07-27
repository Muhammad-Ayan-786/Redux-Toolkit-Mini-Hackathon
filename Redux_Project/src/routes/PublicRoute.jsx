import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const PublicRoute = ({ children }) => {

  const { loggedInUser } = useSelector(state => state.authentication)

  if (loggedInUser) {
    return <Navigate to={'/main'} />
  }

  return <Outlet />
}

export default PublicRoute