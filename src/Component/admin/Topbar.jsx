// // export default Topbar;
// import React from "react";

// import {
//   Menu,
//   Bell,
//   Search,
// } from "lucide-react";

// const Topbar = ({ setSidebarOpen }) => {

//   return (
//     <header className="sticky top-0 z-40 border-b border-white/10 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-3xl">

//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

//         <div className="flex items-center gap-4">

//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="rounded-xl p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 lg:hidden"
//           >

//             <Menu className="text-zinc-800 dark:text-white" />

//           </button>

//           <div>

//             <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
//               Dashboard
//             </h1>

//             <p className="text-sm text-zinc-500">
//               Welcome back, Admin 👋
//             </p>

//           </div>

//         </div>

//         <div className="flex items-center gap-4">

//           {/* SEARCH */}
//           <div className="hidden md:flex items-center gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 px-5 py-3 shadow-sm">

//             <Search className="h-4 w-4 text-zinc-500" />

//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent text-sm outline-none dark:text-white"
//             />

//           </div>

//           {/* NOTIFICATION */}
//           <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 shadow-sm">

//             <Bell className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />

//             <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />

//           </button>

//         </div>

//       </div>

//     </header>
//   );
// };

// export default Topbar;

import React from 'react';
import { Menu, Search, Bell, ChevronDown } from 'lucide-react';

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-16 px-4 md:px-6 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
          <Menu size={20} />
        </button>
        
        {/* Premium Command Search Structure */}
        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          <input 
            type="text" 
            placeholder="Search commands, courses, users..." 
            className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 focus:bg-white dark:focus:bg-slate-950 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications Mock Indicator */}
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl relative transition-all">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full" />
        </button>

        {/* User Identity Element */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-800">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
            alt="Profile Avatar" 
            className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/10"
          />
          <div className="hidden md:block text-left">
            <p className="text-sm font-semibold leading-none">Sarah Jenkins</p>
            <p className="text-xs text-slate-400 mt-1">Platform Admin</p>
          </div>
          <ChevronDown size={14} className="text-slate-400 hidden md:block" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;