
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// const Topbar = ({ onMenuClick }) => {
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();

//   const [open, setOpen] = useState(false);

//   const dropdownRef = useRef(null);

//   const user = useMemo(() => {

//     const token = localStorage.getItem("token");

//     if (!token) return null;

//     try {

//       return JSON.parse(atob(token.split(".")[1]));

//     } catch {

//       return null;

//     }

//   }, []);
// const name = profile?.name ?? "Administrator";

// const role = profile?.role ?? "ADMIN";

// const email = profile?.email ?? "";

// const avatar =
//     profile?.avatar && profile.avatar.trim() !== ""
//         ? profile.avatar
//         : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4f46e5&color=ffffff&size=128`;

//   useEffect(() => {

//     const handleClickOutside = (e) => {

//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target)
//       ) {
//         setOpen(false);
//       }

//     };

//     useEffect(() => {
//     fetchProfile();
// }, []);

//     document.addEventListener("mousedown", handleClickOutside);

//     return () =>
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );

//   }, []);

//   const logout = () => {

//     localStorage.removeItem("token");

//     navigate("/login");

//   };
// const fetchProfile = async () => {
//     try {
//         const token = localStorage.getItem("token");

//         const res = await axios.get(
//             "http://localhost:2334/api/users/me",
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );

//         console.log(res.data);

//         setProfile(res.data);

//     } catch (err) {
//         console.log(err);
//     }
// };

const Topbar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  const token = localStorage.getItem("token");

  const name = profile?.name || "Administrator";
  const role = profile?.role || "ADMIN";
  const email = profile?.email || "";

  const avatar =
    profile?.avatar && profile.avatar.trim() !== ""
      ? profile.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
          name
        )}&background=4f46e5&color=ffffff&size=128`;

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2334/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("PROFILE =", res.data);

      setProfile(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  // Fetch profile once
  useEffect(() => {
    fetchProfile();
  }, []);

  // Close dropdown
  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header className="sticky top-0 z-40 h-16 backdrop-blur-xl bg-white/80 dark:bg-[#111827]/80 border-b border-slate-200 dark:border-slate-800">

      <div className="flex h-full items-center justify-between px-4 lg:px-8">

        {/* Left */}

        <div className="flex items-center gap-4 flex-1">

          <button
            onClick={onMenuClick}
            className="lg:hidden rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Menu size={22} />
          </button>

          {/* Search */}

          <div className="relative hidden md:block w-full max-w-lg">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              placeholder="Search users, courses, payments..."
              className="
              w-full
              rounded-2xl
              bg-slate-100
              dark:bg-slate-900
              pl-11
              pr-5
              py-2.5
              text-sm
              outline-none
              border
              border-transparent
              focus:border-indigo-500
              focus:ring-4
              focus:ring-indigo-500/10
              transition
              "
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          {/* Notification */}

          <button className="relative rounded-2xl p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition">

            <Bell size={19} />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#111827]" />

          </button>

          {/* Profile */}

          <div
            ref={dropdownRef}
            className="relative"
          >

            <button
              onClick={() => setOpen(!open)}
              className="
              flex
              items-center
              gap-3
              rounded-2xl
              px-2
              py-1.5
              hover:bg-slate-100
              dark:hover:bg-slate-800
              transition
              "
            >

              <div className="relative">

                <img
                  src={
                    profile?.avatar
                      ? profile.avatar
                      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        profile?.name || "Admin"
                      )}&background=4f46e5&color=fff`
                  }
                  alt={profile?.name}
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      profile?.name || "Admin"
                    )}&background=4f46e5&color=fff`;
                  }}
                />

                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white dark:border-[#111827]" />

              </div>

              <div className="hidden lg:block text-left">

                <p className="font-semibold text-sm">
                  {name}
                </p>

                <p className="text-xs text-slate-500">
                  {role}
                </p>

              </div>

              <ChevronDown
                size={16}
                className={`transition ${open ? "rotate-180" : ""
                  }`}
              />

            </button>

            <AnimatePresence>

              {open && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                    scale: .97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 15,
                    scale: .97,
                  }}
                  transition={{
                    duration: .18,
                  }}
                  className="
                  absolute
                  right-0
                  mt-3
                  w-72
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  dark:bg-[#111827]
                  shadow-2xl
                  border
                  border-slate-200
                  dark:border-slate-700
                  "
                >

                  {/* Header */}

                  <div className="px-6 py-5 border-b dark:border-slate-700">

                    <div className="flex gap-4">

                      <img
    src={avatar}
    alt={name}
    className="w-10 h-10 rounded-full object-cover"
    onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src =
            `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4f46e5&color=ffffff`;
    }}
/>

                      <div>

                        <h3 className="font-bold">
                          {name}
                        </h3>

                       <p className="text-sm text-slate-500">
    {email}
</p>

                        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">

                          <ShieldCheck size={14} />

                          {role}

                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Menu */}

                  <div className="p-2">

                    <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/admin/profile");
                      }}
                      className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >

                      <User size={18} />

                      View Profile

                    </button>

                    <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/admin/profile/edit");
                      }}
                      className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >

                      <Settings size={18} />

                      Edit Profile

                    </button>

                  </div>

                  <div className="border-t dark:border-slate-700 p-2">

                    <button
                      onClick={logout}
                      className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-2xl
                      px-4
                      py-3
                      text-red-600
                      hover:bg-red-50
                      dark:hover:bg-red-900/20
                      transition
                      "
                    >

                      <LogOut size={18} />

                      Logout

                    </button>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        </div>

      </div>

    </header>
  );

};

export default Topbar;