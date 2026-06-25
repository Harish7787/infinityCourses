

import React, { useState } from "react";
import Sidebar from "../admin/Sidebar";
import Topbar from "../admin/Topbar";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children, currentTab, setCurrentTab }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 mt-9 md:p-6 max-w-[1600px] w-full mx-auto macro-scrollbar">
          {/* {children} */}
         <Outlet />
        </main>
        {/* <main className="flex-1 p-6">

          <Outlet />

        </main> */}
      </div>

    </div>
  );
};

export default AdminLayout;