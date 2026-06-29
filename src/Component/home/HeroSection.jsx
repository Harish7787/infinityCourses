
// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   PlayCircle,
//   BookOpen,
//   Users,
//   Award,
//   CheckCircle,
//   ArrowRight,
//   MonitorPlay,
//   BarChart3,
//   Sparkles,
// } from "lucide-react";
// import { redirect } from "react-router-dom";
// import Course from "../../pages/User/Course"


// const stats = [
//   {
//     icon: <Users className="h-6 w-6" />,
//     title: "15K+ Students",
//     desc: "Learning from expert instructors worldwide.",
//   },
//   {
//     icon: <BookOpen className="h-6 w-6" />,
//     title: "250+ Courses",
//     desc: "Modern courses for developers & designers.",
//   },
//   {
//     icon: <Award className="h-6 w-6" />,
//     title: "Certified Programs",
//     desc: "Industry-recognized certifications included.",
//   },
// ];

// const features = [
//   "Live Interactive Classes",
//   "AI-Based Learning Dashboard",
//   "Real-Time Progress Tracking",
//   "Downloadable Course Materials",
//   "Expert Mentors & Community",
//   "Certificates After Completion",
// ];



// export default function HeroSection() {
//     const navigate = useNavigate();
//   return (
    

//     <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 pt-40 pb-24 px-6">
//       <div className="absolute top-0 left-0 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full" />
//       <div className="absolute bottom-0 right-0 h-72 w-72 bg-violet-500/20 blur-3xl rounded-full" />

//       <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white/70 dark:bg-zinc-800/60 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300 shadow-sm mb-6">
//             <Sparkles className="h-4 w-4" />
//             Smart Course Management Platform
//           </div>

//           <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-zinc-900 dark:text-white">
//             Welcome to the
//             <span className="block mt-2 bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
//               Future of Learning
//             </span>
//           </h1>

//           <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl">
//             Build skills, manage courses, track progress, and learn from
//             industry experts with a modern AI-powered course platform.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4 ">
//             <button  onClick={() => navigate("/courses")} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-4 text-white font-semibold shadow-xl ">
//               Explore Courses
//               <ArrowRight className="h-5 w-5" />
//             </button>

//             <button className="flex items-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 px-7 py-4 text-zinc-800 dark:text-white font-semibold">
//               <PlayCircle className="h-5 w-5 text-indigo-500" />
//               Watch Demo
//             </button>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-4 mt-10">
//             {features.map((item) => (
//               <div key={item} className="flex items-center gap-3">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600">
//                   <CheckCircle className="h-4 w-4" />
//                 </div>

//                 <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="relative"  
//         >
//           <div className="rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-8">
//             <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 p-6 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm opacity-80">
//                     Active Learning Progress
//                   </p>

//                   <h2 className="text-4xl font-black mt-2">92%</h2>
//                 </div>

//                 <div className="rounded-2xl bg-white/20 p-4">
//                   <BarChart3 className="h-8 w-8" />
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-5 mt-6 ">
//               <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 p-5">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600">
//                   <MonitorPlay className="h-6 w-6" />
//                 </div>

//                 <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
//                   Live Classes
//                 </h3>
//               </div>

//               <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 p-5">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-600">
//                   <Award className="h-6 w-6" />
//                 </div>

//                 <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
//                   Certificates
//                 </h3>
//               </div>
//             </div>
//           </div>

//           <div className="absolute -bottom-50 lg:pt-50 left-1/2 -translate-x-1/2 grid sm:grid-cols-3 gap-4 w-full">
//             {stats.map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-5 shadow-lg"
//               >
//                 <div className="text-indigo-600 dark:text-indigo-400">
//                   {item.icon}
//                 </div>

//                 <h4 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">
//                   {item.title}
//                 </h4>

//                 <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  PlayCircle,
  BookOpen,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  MonitorPlay,
  BarChart3,
  Sparkles,
} from "lucide-react";


const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "15K+ Students",
    desc: "Learning from expert instructors worldwide.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "250+ Courses",
    desc: "Modern courses for developers & designers.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Certified Programs",
    desc: "Industry-recognized certifications included.",
  },
];


const features = [
  "Live Interactive Classes",
  "AI-Based Learning Dashboard",
  "Real-Time Progress Tracking",
  "Downloadable Course Materials",
  "Expert Mentors & Community",
  "Certificates After Completion",
];


export default function HeroSection() {

  const navigate = useNavigate();


  return (

<section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 pt-24 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6">

<div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">


{/* Left */}
<motion.div
 initial={{ opacity:0,x:-60 }}
 animate={{ opacity:1,x:0 }}
>

<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white/70 dark:bg-zinc-800/60 px-4 py-2 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-300 shadow-sm mb-6">

<Sparkles className="h-4 w-4" />

Smart Course Management Platform

</div>



<h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-zinc-900 dark:text-white">

Welcome to the

<span className="block mt-2 bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">

Future of Learning

</span>

</h1>



<p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl">

Build skills, manage courses, track progress, and learn from
industry experts with a modern AI-powered course platform.

</p>




<div className="mt-8 flex flex-col sm:flex-row gap-4">


<button
onClick={()=>navigate("/courses")}
className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-4 text-white font-semibold shadow-xl w-full sm:w-auto"
>

Explore Courses

<ArrowRight className="h-5 w-5"/>

</button>



<button className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 px-7 py-4 text-zinc-800 dark:text-white font-semibold w-full sm:w-auto">

<PlayCircle className="h-5 w-5 text-indigo-500"/>

Watch Demo

</button>


</div>





<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

{features.map((item)=>(

<div key={item} className="flex items-center gap-3">

<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600">

<CheckCircle className="h-4 w-4"/>

</div>


<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">

{item}

</span>

</div>

))}

</div>


</motion.div>





{/* Right */}

<motion.div

initial={{opacity:0,x:60}}

animate={{opacity:1,x:0}}

className="relative"

>


<div className="rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-5 sm:p-8">


<div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 p-5 sm:p-6 text-white">


<div className="flex items-center justify-between">


<div>

<p className="text-sm opacity-80">

Active Learning Progress

</p>


<h2 className="text-3xl sm:text-4xl font-black mt-2">

92%

</h2>


</div>



<div className="rounded-2xl bg-white/20 p-3 sm:p-4">

<BarChart3 className="h-7 w-7 sm:h-8 sm:w-8"/>

</div>


</div>


</div>





<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">


<div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 p-5">


<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600">

<MonitorPlay className="h-6 w-6"/>

</div>


<h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">

Live Classes

</h3>


</div>




<div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 p-5">


<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-600">

<Award className="h-6 w-6"/>

</div>


<h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">

Certificates

</h3>


</div>



</div>


</div>





{/* Stats */}

<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">

{stats.map((item,index)=>(

<div
key={index}
className=" rounded-2xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-5 shadow-lg"
>


<div className="text-indigo-600 dark:text-indigo-400">

{item.icon}

</div>


<h4 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">

{item.title}

</h4>


<p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">

{item.desc}

</p>


</div>

))}


</div>


</motion.div>


</div>

</section>

  );
}