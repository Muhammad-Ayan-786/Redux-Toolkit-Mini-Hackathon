import { createBrowserRouter, RouterProvider } from 'react-router'

import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'


const AppRoutes = () => {

  const router = createBrowserRouter([
    { //* Auth Layout
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: '',
          element: <AuthLayout />,
          children: [
            { path: '', element: <LoginPage /> },
            { path: '/register', element: <RegisterPage /> }
          ]

        },
      ]
    },

    { //* Main Layout
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            { path: '', element: <HomePage /> },
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes