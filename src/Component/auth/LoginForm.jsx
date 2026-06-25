import React, { useState } from "react";
import { useNavigate, Link, Router } from "react-router-dom";
import { motion } from "framer-motion";
import { loginUser } from "../../api/authApi";

export default function LoginForm() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const [isLoading, setIsLoading] = useState(false);

const [error, setError] = useState("");

const handleChange = (e) => {

  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Clear error while typing
  if (error) setError("");
};

const validateForm = () => {

  if (!formData.email.trim()) {
    return "Email is required";
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return "Invalid email address";
  }

  if (!formData.password.trim()) {
    return "Password is required";
  }

  if (formData.password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
};

const handleSubmit = async (e) => {

  e.preventDefault();

  const validationError = validateForm();

  if (validationError) {
    setError(validationError);
    return;
  }

  try {

    setIsLoading(true);
    setError("");

    const res = await loginUser(formData);

    const loginData = res?.data?.Data;

    if (!loginData?.token || !loginData?.user) {
      throw new Error("Invalid server response");
    }

    const { token, user } = loginData;

    // Save minimal user data only
    localStorage.setItem("token", token);

    // localStorage.setItem(
    //   "user",
    //   JSON.stringify({
    //     id: user.id,
    //     role: user.role,
    //     email: user.email,
    //   })
    // );

    // Role-based navigation
    const roleRoutes = {
      ADMIN: "/admin",
      SELLER: "/seller",
      USER: "/",
    };

    navigate(roleRoutes[user.role] || "/");

  } catch (error) {

    console.error("Login Error:", error);

    setError(
      error?.response?.data?.message ||
      error.message ||
      "Something went wrong"
    );

  } finally {
    setIsLoading(false);
  }
};

// const navigate = useNavigate();

// const [formData, setFormData] = useState({
//   email: "",
//   password: "",
// });

// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState("");

// const handleChange = (e) => {
//   const { name, value } = e.target;

//   setFormData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!formData.email || !formData.password) {
//     setError("All fields are required");
//     return;
//   }

//   setIsLoading(true);
//   setError("");

//   try {
//     const res = await loginUser(formData);

//     const loginData = res?.data?.Data;

//     if (!loginData?.token || !loginData?.user) {
//       throw new Error("Invalid server response");
//     }

//     const { token, user } = loginData;

//     // Store only necessary data
//     localStorage.setItem("token", token);

//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         id: user.id,
//         role: user.role,
//         email: user.email,
//       })
//     );

//     // Redirect safely
//     switch (user.role) {
//       case "ADMIN":
//         navigate("/admin");
//         break;

//       case "SELLER":
//         navigate("/seller");
//         break;

//       default:
//         navigate("/");
//     }

//   } catch (error) {
//     console.error("Login Error:", error);

//     setError(
//       error?.response?.data?.message ||
//       error.message ||
//       "Login failed"
//     );
//   } finally {
//     setIsLoading(false);
//   }
// };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100 px-4 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.15)] backdrop-blur-2xl"
      >

        {/* Heading */}
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Login to continue learning
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Email */}
          <div>

            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </label>

            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white"
              //   onChange={(e) =>
              //     setFormData({
              //       ...formData,
              //       email: e.target.value,
              //     })
              //   }
              onChange={handleChange}
            />

          </div>

          {/* Password */}
          <div>

            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Password
            </label>

            <input
              type="password"
              required
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white"
              //   onChange={(e) =>
              //     setFormData({
              //       ...formData,
              //       password: e.target.value,
              //     })
              //   }
              onChange={handleChange}
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-indigo-600 dark:text-indigo-400"
          >
            Register
          </Link>

        </p>

      </motion.div>
    </div>
  );
}