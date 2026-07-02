// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function RegisterForm() {
// //   const Navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     localStorage.setItem(
// //       "registeredUser",
// //       JSON.stringify(formData)
// //     );

// //     alert("Register Success");

// //     Navigate("/login");
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-xl"
// //       >
// //         <h2 className="mb-6 text-2xl font-bold">Register</h2>

// //         <input
// //           type="text"
// //           placeholder="Name"
// //           className="mb-4 w-full rounded-xl border p-3"
// //           onChange={(e) =>
// //             setFormData({ ...formData, name: e.target.value })
// //           }
// //         />

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className="mb-4 w-full rounded-xl border p-3"
// //           onChange={(e) =>
// //             setFormData({ ...formData, email: e.target.value })
// //           }
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="mb-4 w-full rounded-xl border p-3"
// //           onChange={(e) =>
// //             setFormData({ ...formData, password: e.target.value })
// //           }
// //         />

// //         <button className="w-full rounded-xl bg-indigo-600 py-3 text-white">
// //           Register
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { registerUser } from "../../api/authApi";

// export default function RegisterForm() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//    const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//    const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const res = await registerUser(formData);

//             console.log("Success:", res.data);

//             alert(res.data.message);

//             navigate('/login');

//         } catch (error) {
//             console.log("Error:", error.response?.data);

//             alert(error.response?.data?.message);
//         }
//     };

//   return (
//     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100 px-4 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">

//       {/* Background Blur */}
//       <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

//       <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

//       {/* Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.15)] backdrop-blur-2xl"
//       >

//         {/* Heading */}
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
//             Create Account
//           </h1>

//           <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
//             Join Infinity Courses today
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* Name */}
//           <div>
//             <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//               Full Name
//             </label>

//             <input
//               type="text"
//               required
//               placeholder="Enter your name"
//               className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   name: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//               Email Address
//             </label>

//             <input
//               type="email"
//               required
//               placeholder="Enter your email"
//               className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   email: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//               Password
//             </label>

//             <input
//               type="password"
//               required
//               placeholder="Create password"
//               className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   password: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]"
//           >
//             Create Account
//           </button>

//         </form>

//         {/* Footer */}
//         <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="font-semibold text-indigo-600 dark:text-indigo-400"
//           >
//             Login
//           </Link>
//         </p>

//       </motion.div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, User, Mail, Lock } from "lucide-react"; // Added standard icons for polish
import { registerUser } from "../../api/authApi";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  // Added global loading state for submission tracking
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Fire up loader status

    try {
      const res = await registerUser(formData);
      console.log("Success:", res.data);
      alert(res.data.message || "Registration Successful!");
      navigate('/login');
    } catch (error) {
      console.error("Error:", error.response?.data);
      alert(error.response?.data?.message || "Something went wrong during registration.");
    } finally {
      setLoading(false); // Shutdown loader status
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100 px-4 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      
      {/* Background Blur Elements */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />

      {/* Main Glassmorphism Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.15)] backdrop-blur-2xl"
      >
        {/* Header Block */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Join Infinity Courses today
          </p>
        </div>

        {/* Interactive Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Full Name Input Field */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400 pointer-events-none">
                <User size={16} />
              </span>
              <input
                type="text"
                name="name"
                required
                disabled={loading}
                value={formData.name}
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 pl-11 pr-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white disabled:opacity-60 focus:ring-2 focus:ring-indigo-500/20"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Input Field */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400 pointer-events-none">
                <Mail size={16} />
              </span>
              <input
                type="email"
                name="email"
                required
                disabled={loading}
                value={formData.email}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 pl-11 pr-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white disabled:opacity-60 focus:ring-2 focus:ring-indigo-500/20"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Input Field */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400 pointer-events-none">
                <Lock size={16} />
              </span>
              <input
                type="password"
                name="password"
                required
                disabled={loading}
                value={formData.password}
                placeholder="Create password"
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/60 pl-11 pr-4 py-3 text-sm outline-none transition focus:border-indigo-500 dark:text-white disabled:opacity-60 focus:ring-2 focus:ring-indigo-500/20"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Action Button with Active Loading Animations */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 dark:shadow-none transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Creating Account...</span>
              </>
            ) : (
              <span>Create Account</span>
            )}
          </button>

        </form>

        {/* Secondary Navigation Footer */}
        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            to={loading ? "#" : "/login"}
            className={`font-semibold text-indigo-600 dark:text-indigo-400 hover:underline ${loading ? "opacity-50 pointer-events-none" : ""}`}
          >
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
}