// import React, { useEffect, useState } from "react";
// import {
//   Link,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import { motion, AnimatePresence } from "framer-motion";

// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
// } from "lucide-react";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Courses", path: "/courses" },
//   { name: "Latest", path: "/latest" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const location = useLocation();

//   const navigate = useNavigate();

//   // Theme
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   // User
// // const [user, setUser] = useState(() => {
// //   try {
// //     const storedUser = localStorage.getItem("user");

// //     return storedUser ? JSON.parse(storedUser) : null;

// //   } catch (error) {

// //     console.log("Invalid user data in localStorage");

// //     localStorage.removeItem("user");

// //     return null;
// //   }
// // });

// const token = localStorage.getItem("token");

// let user = null;

// if (token) {
//   try {
//     user = JSON.parse(atob(token.split(".")[1]));
//   } catch (e) {
//     console.log("Invalid token");
//   }
// }

//   // Logout
// const handleLogout = () => {

//   localStorage.removeItem("user");
//   localStorage.removeItem("token");

//   navigate("/");
// };
//   // Theme Effect
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");

//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");

//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <>
//       {/* HEADER */}
//       <header className="fixed top-5 left-0 right-0 z-50 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center justify-between rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

//             {/* LOGO */}
//             <div
//               onClick={() => navigate("/")}
//               className="flex items-center gap-3 cursor-pointer"
//             >
//               <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
//                 <img
//                   src="/learn.jpg"
//                   alt="Logo"
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div className="leading-tight">
//                 <h1 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
//                   Infinity
//                 </h1>

//                 <p className="text-xs text-zinc-500 dark:text-zinc-400">
//                   Courses
//                 </p>
//               </div>
//             </div>

//             {/* DESKTOP NAVIGATION */}
//             <nav className="hidden lg:flex items-center gap-2">
//               {navItems.map((item) => (
//                 <div key={item.name} className="relative">
//                   <Link
//                     to={item.path}
//                     className="relative z-10 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
//                   >
//                     {location.pathname === item.path && (
//                       <motion.div
//                         layoutId="navbar-underline"
//                         transition={{
//                           type: "spring",
//                           stiffness: 300,
//                           damping: 25,
//                         }}
//                         className="absolute left-0 bottom-1 h-[3px] w-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600"
//                       />
//                     )}

//                     <motion.span
//                       whileHover={{ y: -1 }}
//                       className="block"
//                     >
//                       {item.name}
//                     </motion.span>
//                   </Link>
//                 </div>
//               ))}
//             </nav>

//             {/* RIGHT SIDE */}
//             <div className="hidden lg:flex items-center gap-3">

//               {/* THEME BUTTON */}
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-zinc-800/60"
//               >
//                 {darkMode ? (
//                   <Moon className="h-4 w-4 text-white" />
//                 ) : (
//                   <Sun className="h-4 w-4 text-black" />
//                 )}
//               </motion.button>

//               {/* USER LOGGED IN */}
//               {user ? (
//                 <div className="flex items-center gap-3">

//                   <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
//                     Hi, {user?.name}
//                   </span>

//                   <button
//                     onClick={() => navigate("/courses")}
//                     className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
//                   >
//                     Get Started
//                   </button>

//                   <button
//                     onClick={handleLogout}
//                     className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex items-center gap-3">

//                   <button
//                     onClick={() => navigate("/login")}
//                     className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200"
//                   >
//                     Login
//                   </button>

//                   <button
//                     onClick={() => navigate("/register")}
//                     className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
//                   >
//                     Register
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="lg:hidden text-zinc-800 dark:text-white"
//             >
//               {mobileOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>

//           </div>
//         </div>

        
//       </header>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed top-24 left-4 right-4 z-[999] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-2xl lg:hidden"
//           >

//             {/* MOBILE NAV */}
//             <nav className="flex flex-col gap-3">

//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => setMobileOpen(false)}
//                   className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//             </nav>

//             {/* MOBILE BUTTONS */}
//             <div className="mt-5 flex flex-col gap-3">

//               {/* THEME */}
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200"
//               >
//                 {darkMode ? "Light Mode" : "Dark Mode"}
//               </button>

//               {user ? (
//                 <>
//                   <button
//                     onClick={() => {
//                       navigate("/courses");

//                       setMobileOpen(false);
//                     }}
//                     className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white"
//                   >
//                     Get Started
//                   </button>

//                   <button
//                     onClick={() => {
//                       handleLogout();

//                       setMobileOpen(false);
//                     }}
//                     className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => {
//                       navigate("/login");

//                       setMobileOpen(false);
//                     }}
//                     className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200"
//                   >
//                     Login
//                   </button>

//                   <button
//                     onClick={() => {
//                       navigate("/register");

//                       setMobileOpen(false);
//                     }}
//                     className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white"
//                   >
//                     Register
//                   </button>
//                 </>
//               )}

//             </div>

//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Latest", path: "/latest" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Theme State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // User State: Safely decode JWT token once on mount
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
      // Split JWT and decode payload safely
      const base64Url = token.split(".")[1];
      if (!base64Url) return null;
      return JSON.parse(atob(base64Url));
    } catch (error) {
      console.error("Invalid token found in storage:", error);
      localStorage.removeItem("token");
      return null;
    }
  });

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // Now React immediately updates the UI!
    navigate("/");
  };

  // Theme Side-Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-5 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            
            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                <img
                  src="/learn.jpg"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="leading-tight">
                <h1 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                  Infinity
                </h1>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Courses
                </p>
              </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className="relative z-10 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                  >
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navbar-underline"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        className="absolute left-0 bottom-1 h-[3px] w-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600"
                      />
                    )}
                    <motion.span whileHover={{ y: -1 }} className="block">
                      {item.name}
                    </motion.span>
                  </Link>
                </div>
              ))}
            </nav>

            {/* RIGHT SIDE (DESKTOP) */}
            <div className="hidden lg:flex items-center gap-3">
              {/* THEME BUTTON */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-zinc-800/60 transition-colors"
              >
                {darkMode ? (
                  <Moon className="h-4 w-4 text-white" />
                ) : (
                  <Sun className="h-4 w-4 text-black" />
                )}
              </motion.button>

              {/* AUTH ACTION ELEMENTS */}
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Hi, {user.name}
                  </span>
                  <button
                    onClick={() => navigate("/courses")}
                    className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={handleLogout}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate("/login")}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-zinc-800 dark:text-white p-1"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE DRAWERS */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-[999] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-2xl lg:hidden"
          >
            {/* MOBILE NAVIGATION */}
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE ACTION BUTTONS */}
            <div className="mt-5 flex flex-col gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>

              {user ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/courses");
                      setMobileOpen(false);
                    }}
                    className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setMobileOpen(false);
                    }}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setMobileOpen(false);
                    }}
                    className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}