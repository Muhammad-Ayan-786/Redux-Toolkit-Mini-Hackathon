import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { addUser, loginUser } from "../store/features/authSlice"
import { nanoid } from "@reduxjs/toolkit"

export const useAuth = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const dispatch = useDispatch()
  const { registeredUsers } = useSelector(state => state.authentication)

  //* Login
  const loginFormSubmit = (data) => {
    const matchedUser = registeredUsers.find((user) => (
      user.email === data.email && user.password === data.password
    ))

    if (!matchedUser) {
      toast.error('User not found')
      reset()
      return
    }

    dispatch(loginUser(matchedUser))
    toast.success('Login successful')
    navigate('/main')

    reset()
  }

  //* Registration
  const registrationformSubmit = (data) => {
    dispatch(addUser({ ...data, id: nanoid() }))
    toast.success('Registration successful')
    navigate('/')

    reset();
  }

  return {
    register,
    handleSubmit,
    errors,
    loginFormSubmit,
    registrationformSubmit
  }
}