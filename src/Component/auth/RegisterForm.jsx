// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RegisterForm() {
//   const Navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     localStorage.setItem(
//       "registeredUser",
//       JSON.stringify(formData)
//     );

//     alert("Register Success");

//     Navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-xl"
//       >
//         <h2 className="mb-6 text-2xl font-bold">Register</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           className="mb-4 w-full rounded-xl border p-3"
//           onChange={(e) =>
//             setFormData({ ...formData, name: e.target.value })
//           }
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="mb-4 w-full rounded-xl border p-3"
//           onChange={(e) =>
//             setFormData({ ...formData, email: e.target.value })
//           }
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="mb-4 w-full rounded-xl border p-3"
//           onChange={(e) =>
//             setFormData({ ...formData, password: e.target.value })
//           }
//         />

//         <button className="w-full rounded-xl bg-indigo-600 py-3 text-white">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { registerUser } from "../../api/authApi";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

   const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

   const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await registerUser(formData);

            console.log("Success:", res.data);

            alert(res.data.message);

        } catch (error) {
            console.log("Error:", error.response?.data);

            alert(error.response?.data?.message);
        }
    };

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
            Create Account
          </h1>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Join Infinity Courses today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Full Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
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
              placeholder="Create password"
              className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 dark:text-indigo-400"
          >
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
}