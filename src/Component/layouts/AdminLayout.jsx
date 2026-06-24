// import React, { useState } from "react";
// import Sidebar from "../admin/Sidebar";
// import Topbar from "../admin/Topbar";

// const AdminLayout = ({ children }) => {

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">

//       {/* Sidebar */}
//       <Sidebar
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />

//       {/* Main */}
//       <div className="lg:ml-72">

//         {/* Topbar */}
//         <Topbar setSidebarOpen={setSidebarOpen} />

//         {/* Page Content */}
//         <main className="p-6">

//           <div className="mx-auto max-w-7xl">
//             {children}
//           </div>

//         </main>

//       </div>

//     </div>
//   );
// };

// export default AdminLayout;

import React, { useState } from "react";
import Sidebar from "../admin/Sidebar";
import Topbar from "../admin/Topbar";

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
        
        <main className="flex-1 p-4 md:p-6 max-w-[1600px] w-full mx-auto macro-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;