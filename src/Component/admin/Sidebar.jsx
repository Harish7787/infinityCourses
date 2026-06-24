

import React from "react";

import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  CreditCard,
  ShoppingCart,
  Settings,
  LogOut,
  Sun,
  Moon,
  Monitor,
  X,
  GraduationCap,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useTheme } from "../context/ThemeContext";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Courses",
    path: "/admin/courses",
    icon: BookOpen,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: Users,
   },
  // {
  //   label: "Analytics",
  //   path: "/admin/analytics",
  //   icon: BarChart3,
  // },
  {
    label: "Payments",
    path: "/admin/payments",
    icon: CreditCard,
  },
  {
    label: "Orders",
    path: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    label: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {

  const { theme, setTheme } = useTheme();

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };

  const SidebarContent = () => (

    <div className="flex h-full flex-col border-r border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#111827]">

      {/* LOGO */}
      <div className="mb-10 flex items-center justify-between px-2">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-indigo-600 p-2 text-white shadow-lg shadow-indigo-500/30">

            <GraduationCap size={22} />

          </div>

          <div>

            <h1 className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
              EduVerse
            </h1>

            <p className="text-xs text-slate-500">
              Admin Panel
            </p>

          </div>

        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen(false)}
        >

          <X size={20} className="text-slate-500" />

        </button>

      </div>

      {/* MENU */}
      <nav className="flex-1 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

           <NavLink
  key={item.label}
  to={item.path}
  end={item.path === "/admin"}
  onClick={() => setIsOpen(false)}
  className={({ isActive }) =>
    `group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300
    ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg"
        : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
    }`
  }
>
  <Icon size={18} />
  {item.label}
</NavLink>
          );
        })}

      </nav>

      {/* FOOTER */}
      <div className="space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">

        {/* THEME */}
        <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-1 dark:bg-slate-900">

          {[
            { id: "light", icon: Sun },
            { id: "dark", icon: Moon },
            { id: "system", icon: Monitor },
          ].map((mode) => {

            const Icon = mode.icon;

            return (
              <button
                key={mode.id}
                onClick={() => setTheme(mode.id)}
                className={`flex flex-1 items-center justify-center rounded-xl py-2 transition-all

                ${
                  theme === mode.id
                    ? "bg-white text-indigo-600 shadow-sm dark:bg-slate-800 dark:text-indigo-400"
                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                }`}
              >

                <Icon size={18} />

              </button>
            );
          })}

        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 px-4 py-3 font-medium text-white transition-all hover:bg-red-600"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </div>
  );

  return (
    <>
      {/* DESKTOP */}
      <aside className="fixed left-0 top-0 bottom-0 z-30 hidden w-64 lg:block">

        <SidebarContent />

      </aside>

      {/* MOBILE */}
      <AnimatePresence>

        {isOpen && (
          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black lg:hidden"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed left-0 top-0 bottom-0 z-50 w-64 lg:hidden"
            >

              <SidebarContent />

            </motion.aside>

          </>
        )}

      </AnimatePresence>
    </>
  );
};

export default Sidebar;