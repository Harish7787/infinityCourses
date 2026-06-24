// import React from "react";

// import {
//   Users,
//   BookOpen,
//   BarChart3,
//   LayoutDashboard,
// } from "lucide-react";

// import { analytics } from "../../data/dummyData";

// const icons = [
//   <Users className="h-8 w-8 text-indigo-500" />,
//   <BookOpen className="h-8 w-8 text-violet-500" />,
//   <BarChart3 className="h-8 w-8 text-emerald-500" />,
//   <LayoutDashboard className="h-8 w-8 text-pink-500" />,
// ];

// const AnalyticsCards = () => {

//   return (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

//       {analytics.map((item, index) => (
//         <div
//           key={index}
//           className="rounded-3xl border border-white/10 bg-white/70 dark:bg-zinc-900/70 p-6 shadow-xl backdrop-blur-xl"
//         >

//           <div className="flex items-center justify-between">

//             <div>

//               <p className="text-sm text-zinc-500">
//                 {item.title}
//               </p>

//               <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
//                 {item.value}
//               </h2>

//             </div>

//             {icons[index]}

//           </div>

//         </div>
//       ))}

//     </div>
//   );
// };

// export default AnalyticsCards;
import React from "react";
import { 
  Users, BookOpen, BarChart3, LayoutDashboard, 
  ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign, Activity 
} from "lucide-react";
import { analytics, revenueGraphData, courseDistribution, liveConversions } from "../../data/analytics";

const icons = [
  <Users className="h-5 w-5 text-indigo-500" />,
  <BookOpen className="h-5 w-5 text-violet-500" />,
  <BarChart3 className="h-5 w-5 text-emerald-500" />,
  <LayoutDashboard className="h-5 w-5 text-pink-500" />,
];

// Native SVG Sparkline Component
const Sparkline = ({ data, isPositive }) => {
  const width = 120;
  const height = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((val, i) => `${(i / (data.length - 1)) * width},${height - ((val - min) / (max - min || 1)) * (height - 4)}`).join(" ");
  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline fill="none" stroke={isPositive ? "#10b981" : "#ef4444"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={points} />
    </svg>
  );
};

// Native Semi-Donut / Premium Pie Chart Component
const PremiumPieChart = () => {
  // SVG Stroke values pre-calculated for precise distribution layout
  let accumulatedPercent = 0;
  return (
    <div className="relative w-44 h-44 flex items-center justify-center">
      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
        <circle cx="18" cy="18" r="15.915" fill="none" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800" strokeWidth="3.5" />
        {courseDistribution.map((slice, idx) => {
          const strokeDash = `${slice.percentage} ${100 - slice.percentage}`;
          const strokeOffset = 100 - accumulatedPercent;
          accumulatedPercent += slice.percentage;
          return (
            <circle
              key={idx}
              cx="18"
              cy="18"
              r="15.915"
              fill="none"
              stroke={slice.color}
              strokeWidth="3.8"
              strokeDasharray={strokeDash}
              strokeDashoffset={strokeOffset}
              strokeLinecap="round"
              className="transition-all duration-500 hover:stroke-[4.5] cursor-pointer"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-bold tracking-tight">9,430</span>
        <span className="text-[10px] text-zinc-400 uppercase font-semibold tracking-wider">Enrollments</span>
      </div>
    </div>
  );
};

const AnalyticsDashboard = () => {
  // Helper to draw clean main analytics line grid path coordinates
  const graphPoints = revenueGraphData.points.map((p, i) => `${(i / (revenueGraphData.points.length - 1)) * 500},${160 - (p / 100) * 130}`).join(" ");
  const areaPoints = `${graphPoints} 500,160 0,160`;

  return (
    <div className="space-y-8 p-1">
      
      {/* 1. ORIGINAL ANALYTICS CARDS (Kept exactly as requested) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {analytics.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between transition-all hover:translate-y-[-2px]"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.title}</p>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{item.value}</h2>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/40 dark:border-zinc-700/30">
                {icons[index]}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-end justify-between">
              <div className="space-y-1">
                <div className={`flex items-center gap-1 text-xs font-semibold ${item.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                  {item.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  <span>{item.change}</span>
                </div>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500">{item.timeframe}</p>
              </div>
              <div className="pl-2 opacity-90">
                <Sparkline data={item.sparklineData} isPositive={item.isPositive} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. NEW INTERACTIVE CHARTS & ANALYTICS SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Module A: Large Revenue Mainline Graph */}
        <div className="lg:col-span-2 rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500"><DollarSign size={16}/></span>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Earnings Analytics</h3>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">Platform sales pipeline metrics</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <TrendingUp size={12} /> Live Tracking
            </span>
          </div>

          {/* SaaS High-Fidelity Vector Line Chart */}
          <div className="relative h-56 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-900/60 rounded-2xl p-4 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 160">
              <defs>
                <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Mesh Background Grid Lines */}
              <line x1="0" y1="40" x2="500" y2="40" stroke="currentColor" className="text-zinc-200/40 dark:text-zinc-800/40" strokeDasharray="4" />
              <line x1="0" y1="90" x2="500" y2="90" stroke="currentColor" className="text-zinc-200/40 dark:text-zinc-800/40" strokeDasharray="4" />
              <line x1="0" y1="140" x2="500" y2="140" stroke="currentColor" className="text-zinc-200/40 dark:text-zinc-800/40" strokeDasharray="4" />
              
              {/* Main Line & Shaded Area */}
              <polygon points={areaPoints} fill="url(#areaGlow)" />
              <polyline fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={graphPoints} />
            </svg>

            {/* Micro Coordinates Interactive Overlay Elements */}
            <div className="absolute inset-x-4 bottom-2 flex justify-between text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
              {revenueGraphData.months.map((m, i) => (
                <span key={i} className="w-full text-center">{m}</span>
              ))}
            </div>
            <div className="absolute left-3 top-2 flex flex-col justify-between h-[80%] text-[10px] font-semibold text-zinc-400/70">
              <span>$50k</span><span>$25k</span><span>$0k</span>
            </div>
          </div>
        </div>

        {/* Module B: Dynamic Pie Chart (Category Distribution Breakdown) */}
        <div className="rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Course Categories</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Distribution of user volume</p>
          </div>

          <div className="my-3 flex justify-center">
            <PremiumPieChart />
          </div>

          {/* Color-Coded Categorical Meta Legends */}
          <div className="space-y-2 mt-2">
            {courseDistribution.map((category, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${category.tailwindColor}`} />
                  <span className="text-zinc-600 dark:text-zinc-400">{category.name}</span>
                </div>
                <span className="font-bold text-zinc-900 dark:text-white">{category.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Module C: Live Feed Event Ticker */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 animate-pulse"><Activity size={16}/></span>
          <h3 className="font-bold text-base text-zinc-900 dark:text-white">Real-Time Platform Acquisitions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liveConversions.map((feed) => (
            <div key={feed.id} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-900/40 flex items-center justify-between transition-all hover:border-zinc-300 dark:hover:border-zinc-800">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{feed.student}</p>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 truncate max-w-[180px]">{feed.course}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">{feed.price}</span>
                <p className="text-[10px] text-zinc-400 mt-1">{feed.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AnalyticsDashboard;