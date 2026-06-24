// Keep your existing analytics array exactly as it is...
export const analytics = [
  {
    title: "Total Students",
    value: "24,892",
    change: "+12.3%",
    isPositive: true,
    timeframe: "vs last month",
    sparklineData: [20, 35, 25, 45, 30, 60, 55, 80],
  },
  {
    title: "Active Courses",
    value: "184",
    change: "+4.1%",
    isPositive: true,
    timeframe: "vs last quarter",
    sparklineData: [10, 15, 12, 18, 22, 20, 26, 32],
  },
  {
    title: "Gross Revenue",
    value: "$142,384",
    change: "+28.4%",
    isPositive: true,
    timeframe: "vs last month",
    sparklineData: [30, 40, 35, 70, 65, 85, 75, 100],
  },
  {
    title: "Engagement Rate",
    value: "68.2%",
    change: "-2.5%",
    isPositive: false,
    timeframe: "vs last week",
    sparklineData: [80, 75, 85, 70, 68, 62, 65, 58],
  },
];

// NEW DATA FOR ADVANCED GRAPH AND PIE CHART MODULES
export const revenueGraphData = {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  amounts: ["$12k", "$18k", "$15k", "$29k", "$22k", "$38k", "$34k", "$45k"],
  points: [20, 40, 30, 70, 50, 85, 75, 100] // SVG-mapped coordinates
};

export const courseDistribution = [
  { name: "Development", count: 4250, percentage: 45, color: "#6366f1", tailwindColor: "bg-indigo-500" },
  { name: "UI/UX Design", count: 2830, percentage: 30, color: "#a855f7", tailwindColor: "bg-violet-500" },
  { name: "Business & PM", count: 1410, percentage: 15, color: "#10b981", tailwindColor: "bg-emerald-500" },
  { name: "Marketing", count: 940, percentage: 10, color: "#ec4899", tailwindColor: "bg-pink-500" },
];

export const liveConversions = [
  { id: 1, student: "Alex Rivera", course: "Next.js 14 Masterclass", price: "$199", time: "3 mins ago" },
  { id: 2, student: "Marcus Chen", course: "UI/UX Figma System", price: "$149", time: "12 mins ago" },
  { id: 3, student: "Emma Watson", course: "AI Product Strategies", price: "$299", time: "45 mins ago" },
];