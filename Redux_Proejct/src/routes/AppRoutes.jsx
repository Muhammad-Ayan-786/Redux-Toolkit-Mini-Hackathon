import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'

const AppRoutes = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: {
        path: "",
        element: <div>Home</div>
      }
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes