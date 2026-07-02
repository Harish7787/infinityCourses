// import React, { useEffect, useState } from "react";
// import {
//   Mail,
//   Phone,
//   ShieldCheck,
//   Pencil,
//   Activity,
//   Hash,
//   CalendarDays,
//   BookOpen,
//   Award,
//   GraduationCap,
//   Loader2,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";
// import Navbar from "../../Component/common/header";
// import Footer from "../../Component/common/footer";

// const UserProfile = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadProfile();
//   }, []);

//   const loadProfile = async () => {
//     try {
//       const res = await api.get("/api/users/me");
//       setUser(res.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <>
//         <Navbar />

//         <div className="min-h-screen flex justify-center items-center">
//           <Loader2
//             size={55}
//             className="animate-spin text-indigo-600"
//           />
//         </div>

//         <Footer />
//       </>
//     );
//   }

//   if (!user) {
//     return (
//       <>
//         <Navbar />

//         <div className="min-h-screen flex justify-center items-center">
//           User not found
//         </div>

//         <Footer />
//       </>
//     );
//   }

//   const avatar =
//     user.avatar && user.avatar.trim() !== ""
//       ? user.avatar
//       : `https://ui-avatars.com/api/?name=${encodeURIComponent(
//           user.name
//         )}&background=4f46e5&color=ffffff&size=256`;

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-slate-100 dark:bg-black py-10 px-4">

//         <div className="max-w-6xl mx-auto">

//           {/* Cover */}

//           <motion.div
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-2xl"
//           >

//             <div className="absolute inset-0 bg-black/10" />

//           </motion.div>

//           {/* Profile Card */}

//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="-mt-28 relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8"
//           >

//             {/* Header */}

//             <div className="flex flex-col lg:flex-row justify-between gap-8">

//               <div className="flex flex-col md:flex-row items-center gap-6">

//                 <img
//                   src={avatar}
//                   alt={user.name}
//                   className="h-40 w-40 rounded-full border-[6px] border-white object-cover shadow-xl"
//                   onError={(e) => {
//                     e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                       user.name
//                     )}&background=4f46e5&color=fff`;
//                   }}
//                 />

//                 <div>

//                   <h1 className="text-4xl font-black dark:text-white">
//                     {user.name}
//                   </h1>

//                   <p className="mt-2 text-zinc-500">
//                     {user.email}
//                   </p>

//                   <span className="inline-flex mt-4 items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-4 py-2 font-semibold">

//                     <ShieldCheck size={18} />

//                     {user.role}

//                   </span>

//                 </div>

//               </div>

//               <div>

//                 <button
//                   onClick={() => navigate("/profile/edit")}
//                   className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition"
//                 >

//                   <Pencil className="inline mr-2" size={18} />

//                   Edit Profile

//                 </button>

//               </div>

//             </div>

//             {/* Stats */}

//             <div className="grid md:grid-cols-3 gap-6 mt-12">

//               <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-950 p-6 text-center">

//                 <BookOpen className="mx-auto text-indigo-600" />

//                 <h2 className="text-4xl font-black mt-4 dark:text-white">
//                   12
//                 </h2>

//                 <p className="text-zinc-500 mt-2">
//                   Enrolled Courses
//                 </p>

//               </div>

//               <div className="rounded-2xl bg-green-50 dark:bg-green-950 p-6 text-center">

//                 <GraduationCap className="mx-auto text-green-600" />

//                 <h2 className="text-4xl font-black mt-4 dark:text-white">
//                   8
//                 </h2>

//                 <p className="text-zinc-500 mt-2">
//                   Completed Courses
//                 </p>

//               </div>

//               <div className="rounded-2xl bg-yellow-50 dark:bg-yellow-950 p-6 text-center">

//                 <Award className="mx-auto text-yellow-600" />

//                 <h2 className="text-4xl font-black mt-4 dark:text-white">
//                   5
//                 </h2>

//                 <p className="text-zinc-500 mt-2">
//                   Certificates
//                 </p>

//               </div>

//             </div>

//             {/* Information */}

//             <div className="grid md:grid-cols-2 gap-6 mt-12">

//               <InfoCard
//                 icon={<Mail className="text-indigo-600" />}
//                 title="Email"
//                 value={user.email}
//               />

//               <InfoCard
//                 icon={<Phone className="text-indigo-600" />}
//                 title="Phone"
//                 value={user.phone || "Not Available"}
//               />

//               <InfoCard
//                 icon={<Hash className="text-indigo-600" />}
//                 title="User ID"
//                 value={`#${user.id}`}
//               />

//               <InfoCard
//                 icon={<CalendarDays className="text-indigo-600" />}
//                 title="Member Since"
//                 value="January 2026"
//               />

//               <InfoCard
//                 icon={<Activity className="text-indigo-600" />}
//                 title="Account Status"
//                 value={user.active ? "Active" : "Inactive"}
//               />

//               <InfoCard
//                 icon={<ShieldCheck className="text-indigo-600" />}
//                 title="Role"
//                 value={user.role}
//               />

//             </div>

//           </motion.div>

//         </div>
//  <Footer />
//       </div>

     
//     </>
//   );
// };

// const InfoCard = ({ icon, title, value }) => {
//   return (
//     <div className="rounded-2xl bg-slate-50 dark:bg-zinc-800 p-6 shadow">

//       <div className="mb-3">
//         {icon}
//       </div>

//       <p className="text-sm text-zinc-500">
//         {title}
//       </p>

//       <h3 className="mt-2 text-lg font-semibold dark:text-white">
//         {value}
//       </h3>

//     </div>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  ShieldCheck,
  Pencil,
  Activity,
  Hash,
  CalendarDays,
  BookOpen,
  Award,
  GraduationCap,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Navbar from "../../Component/common/header";
import Footer from "../../Component/common/footer";

// Motion variants for clean staggered layout entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await api.get("/api/users/me");
      setUser(res.data);
    } catch (err) {
      console.error("Profile payload fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Modern Screen Loading State
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-zinc-950">
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center gap-3">
          <Loader2 size={44} className="animate-spin text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium text-zinc-500 tracking-wide">Syncing secure data...</span>
        </div>
        <Footer />
      </div>
    );
  }

  // Graceful Fallback Error View
  if (!user) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-zinc-950">
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
          <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-full text-red-600 dark:text-red-400 mb-4">
            <Activity size={32} />
          </div>
          <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">Session Missing</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1 max-w-xs text-sm">
            We couldn't parse your session properties. Please re-authenticate.
          </p>
          <button 
            onClick={() => navigate("/")} 
            className="mt-5 px-5 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-sm font-medium transition hover:opacity-90"
          >
            Return Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "User")}&background=4f46e5&color=ffffff&size=256`;
  const avatar = user.avatar && user.avatar.trim() !== "" ? user.avatar : fallbackAvatar;
  const formattedDate = user.createdAt 
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : "January 2026";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          {/* Animated Interactive Cover */}
          <motion.div
            variants={itemVariants}
            className="relative h-44 sm:h-56 rounded-3xl overflow-hidden bg-gradient-to-tr from-indigo-600 via-violet-600 to-purple-600 shadow-lg group"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* Main Content Base */}
          <motion.div
            variants={itemVariants}
            className="-mt-20 relative bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800/80 p-5 sm:p-8 backdrop-blur-md"
          >
            
            {/* Header / Bio Layer */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-800/60">
              <div className="flex flex-col sm:flex-row items-center sm:items-end text-center sm:text-left gap-5 w-full md:w-auto">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  src={avatar}
                  alt={user.name}
                  className="h-32 w-32 sm:h-36 sm:w-36 rounded-2xl border-4 border-white dark:border-zinc-900 object-cover shadow-md bg-white flex-shrink-0"
                  onError={(e) => { e.target.src = fallbackAvatar; }}
                />
                <div className="space-y-1 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                    {user.name}
                  </h1>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {user.email}
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 text-xs font-semibold border border-indigo-100/30 dark:border-indigo-900/20">
                      <ShieldCheck size={14} />
                      {user.role || "Student"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/profile/edit")}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-950 px-5 py-2.5 text-sm font-semibold shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:focus:ring-offset-zinc-900"
                >
                  <Pencil size={14} />
                  <span>Edit Profile</span>
                </motion.button>
              </div>
            </div>

            {/* Metrics Dashboard Row */}
            <motion.section variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <StatCard icon={<BookOpen size={20} className="text-indigo-600 dark:text-indigo-400" />} count={12} label="Enrolled Courses" />
              <StatCard icon={<GraduationCap size={20} className="text-emerald-600 dark:text-emerald-400" />} count={8} label="Completed Courses" />
              <StatCard icon={<Award size={20} className="text-amber-500 dark:text-amber-400" />} count={5} label="Certificates Earned" />
            </motion.section>

            {/* Grid Information Matrix */}
            <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <InfoCard icon={<Mail size={16} />} title="Email Endpoint" value={user.email} />
              <InfoCard icon={<Phone size={16} />} title="Phone Vector" value={user.phone || "Unspecified"} isUnset={!user.phone} />
              <InfoCard icon={<Hash size={16} />} title="Internal Account ID" value={`#${user.id || "0000"}`} />
              <InfoCard icon={<CalendarDays size={16} />} title="Registration Date" value={formattedDate} />
              <InfoCard 
                icon={<Activity size={16} />} 
                title="System Operational Status" 
                value={user.active ? "Active Status" : "Inactive Profile"} 
                accent={user.active ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-400"}
              />
              <InfoCard icon={<ShieldCheck size={16} />} title="Authorized Role Status" value={user.role || "User Base"} />
            </motion.section>

          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

// Subcomponent: Minimal Stat Grid Element
const StatCard = ({ icon, count, label }) => (
  <motion.div 
    whileHover={{ y: -3 }}
    className="rounded-2xl p-4 flex items-center gap-4 bg-zinc-50/50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800/60"
  >
    <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800/40">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">{count}</h3>
      <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mt-0.5">{label}</p>
    </div>
  </motion.div>
);

// Subcomponent: Profile Property Grid Cell
const InfoCard = ({ icon, title, value, isUnset = false, accent = "" }) => (
  <div className="group flex items-start gap-4 rounded-xl p-4 bg-zinc-50/30 dark:bg-zinc-800/10 border border-zinc-100/80 dark:border-zinc-800/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-all duration-200">
    <div className="p-2 bg-white dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 rounded-lg shadow-xs border border-zinc-100 dark:border-zinc-800 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{title}</span>
      <p className={`mt-0.5 text-sm font-semibold truncate text-zinc-800 dark:text-zinc-200 ${isUnset ? "text-zinc-400 dark:text-zinc-600 font-normal italic" : ""} ${accent}`}>
        {value}
      </p>
    </div>
  </div>
);

export default UserProfile;