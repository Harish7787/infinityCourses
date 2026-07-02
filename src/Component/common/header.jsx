

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { User, LogOut, Settings, ChevronDown } from "lucide-react";
import api from "../../api/axios";
import { useRef } from "react";
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
  const [profileOpen, setProfileOpen] = useState(false);

 

  const navigate = useNavigate();


  const [openProfile, setOpenProfile] = useState(false);

  const profileRef = useRef(null);

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

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await api.get("/api/users/me");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const avatar =
    user?.avatar
      ? user.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
        user?.name || "User"
      )}&background=4f46e5&color=fff`;

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
              {/* {user ? (
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
              )} */}

              {user ? (
                <div
                  className="relative flex items-center gap-3"
                  ref={profileRef}
                >
                  {/* Get Started */}
                  <button
                    onClick={() => navigate("/courses")}
                    className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                  >
                    Get Started
                  </button>

                  {/* Profile */}
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="
      flex
      items-center
      gap-3
      rounded-full
      border
      border-zinc-200
      dark:border-zinc-700
      px-2
      py-1.5
      hover:shadow-lg
      transition
      "
                  >
                    <img
                      src={avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div className="text-left hidden xl:block">
                      <h4 className="text-sm font-semibold dark:text-white">
                        {user.name}
                      </h4>

                      <p className="text-xs text-zinc-500">
                        {user.role}
                      </p>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`transition ${profileOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown */}

                  {profileOpen && (
                    <div
                      className="
        absolute
        right-0
        top-16
        w-72
        rounded-2xl
        bg-white
        dark:bg-zinc-900
        border
        border-zinc-200
        dark:border-zinc-700
        shadow-2xl
        overflow-hidden
        "
                    >
                      {/* Header */}

                      <div className="px-5 py-5 border-b dark:border-zinc-700">

                        <img
                          src={avatar}
                          alt=""
                          className="w-16 h-16 rounded-full mb-4 object-cover"
                        />

                        <h3 className="font-bold text-lg dark:text-white">
                          {user.name}
                        </h3>

                        <p className="text-sm text-zinc-500">
                          {user.email}
                        </p>
                      </div>

                      {/* Menu */}

                      <button
                        onClick={() => {
                          navigate("/profile");
                          setProfileOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition  dark:text-white"
                      >
                        <User size={18} />
                        My Profile
                      </button>

                      <button
                        onClick={() => {
                          navigate("/profile/edit");
                          setProfileOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition dark:text-white"
                      >
                        <Settings size={18} />
                        Edit Profile
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-5 py-4 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </div>
                  )}
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

              {/* {user ? (
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
              ) : ( */}

              {user ? (
                <>
                  <div className="flex items-center gap-3 border-b pb-4">

                    <img
                      src={avatar}
                      className="w-14 h-14 rounded-full"
                      alt=""
                    />

                    <div>
                      <h3 className="font-semibold">
                        {user.name}
                      </h3>

                      <p className="text-sm text-zinc-500">
                        {user.email}
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={() => {
                      navigate("/profile");
                      setMobileOpen(false);
                    }}
                    className="rounded-xl border px-4 py-3 text-left  text-white"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/profile/edit");
                      setMobileOpen(false);
                    }}
                    className="rounded-xl border px-4 py-3 text-left dark:text-white"
                  >
                    Edit Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/courses");
                      setMobileOpen(false);
                    }}
                    className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 text-white"
                  >
                    Get Started
                  </button>

                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="rounded-xl border border-red-200 text-red-600 px-4 py-3"
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