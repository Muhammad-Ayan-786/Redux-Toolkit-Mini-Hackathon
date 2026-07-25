import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const RegisterPage = () => {

  const { register, handleSubmit, registrationformSubmit, errors } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-50 via-white to-amber-100 px-4">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-8">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join Sky Mart and start shopping.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(registrationformSubmit)}
          className="space-y-5"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              {...register("name", {
                required: "Name is required!",
              })}
              id="name"
              type="text"
              placeholder="Enter your name"
              className={`w-full rounded-xl bg-white/80 px-4 py-3 outline-none transition duration-300 placeholder:text-gray-400 
              ${errors.name
                  ? "border border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200"
                  : "border border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-200"
                }`}
            />

            {errors.name && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              {...register("email", {
                required: "Email is required!",
              })}
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full rounded-xl bg-white/80 px-4 py-3 outline-none transition duration-300 placeholder:text-gray-400 ${errors.email
                ? "border border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200"
                : "border border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-200"
                }`}
            />

            {errors.email && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters are required",
                },
              })}
              id="password"
              type="password"
              placeholder="Create a password"
              className={`w-full rounded-xl bg-white/80 px-4 py-3 outline-none transition duration-300 placeholder:text-gray-400 ${errors.password
                ? "border border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200"
                : "border border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-200"
                }`}
            />

            {errors.password && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-400 py-3 font-semibold text-gray-900 shadow-lg shadow-yellow-300/50 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-500 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="mt-8 text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate('/')}
            className="cursor-pointer font-semibold text-yellow-600 transition hover:text-yellow-700 hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;