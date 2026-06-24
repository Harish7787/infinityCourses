// NEW DATA FOR PAYMENTS & ORDERS MODULES
export const paymentTransactions = [
  {
    id: "TXN-84920",
    customer: { name: "Oliver Smith", email: "oliver@smith.dev", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80" },
    amount: "$199.00",
    method: "Visa •••• 4242",
    status: "Succeeded",
    date: "Jun 03, 2026, 02:14 PM",
  },
  {
    id: "TXN-84919",
    customer: { name: "Sophia Liang", email: "sophia.l@tech.io", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&q=80" },
    amount: "$299.00",
    method: "Apple Pay",
    status: "Succeeded",
    date: "Jun 02, 2026, 11:45 AM",
  },
  {
    id: "TXN-84918",
    customer: { name: "Marcus Brody", email: "marcus@brody.design", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" },
    amount: "$149.00",
    method: "Mastercard •••• 8812",
    status: "Failed",
    date: "Jun 01, 2026, 09:30 AM",
  },
  {
    id: "TXN-84917",
    customer: { name: "Emma Watson", email: "emma@watson.org", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" },
    amount: "$199.00",
    method: "PayPal",
    status: "Refunded",
    date: "May 28, 2026, 04:12 PM",
  },
];

export const platformOrders = [
  {
    id: "ORD-9921",
    customer: "Oliver Smith",
    course: "Full-Stack Next.js 14 Masterclass",
    coupon: "SUMMER50",
    gross: "$199.00",
    fulfillment: "Completed",
    date: "Jun 03, 2026",
  },
  {
    id: "ORD-9920",
    customer: "Sophia Liang",
    course: "Advanced Product Management Strategies",
    coupon: "None",
    gross: "$299.00",
    fulfillment: "Completed",
    date: "Jun 02, 2026",
  },
  {
    id: "ORD-9919",
    customer: "Lucas Vance",
    course: "Mastering UI/UX Design with Figma",
    coupon: "LAUNCH20",
    gross: "$119.20",
    fulfillment: "Processing",
    date: "Jun 02, 2026",
  },
  {
    id: "ORD-9918",
    customer: "Amara Okafor",
    course: "Full-Stack Next.js 14 Masterclass",
    coupon: "None",
    gross: "$199.00",
    fulfillment: "Cancelled",
    date: "May 31, 2026",
  },
];