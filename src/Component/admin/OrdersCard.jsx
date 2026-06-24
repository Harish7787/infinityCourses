import React, { useState } from "react";
import { ShoppingBag, Search, Tag, Filter, CheckCircle, Clock, XCircle, ArrowRight } from "lucide-react";
import { platformOrders } from "../../data/paymentTransactions";

const OrdersCard = () => {
  const [filterState, setFilterState] = useState("All");

  const getFulfillmentBadge = (state) => {
    switch (state) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
            <CheckCircle size={12}/> Completed
          </span>
        );
      case "Processing":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
            <Clock size={12}/> Processing
          </span>
        );
      case "Cancelled":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 dark:text-zinc-500 bg-zinc-500/10 px-2 py-0.5 rounded-md">
            <XCircle size={12}/> Cancelled
          </span>
        );
      default:
        return <span className="text-xs text-zinc-400">{state || "Unknown"}</span>;
    }
  };

  const filteredOrders = filterState === "All" 
    ? platformOrders 
    : (platformOrders || []).filter(order => order.fulfillment === filterState);

  return (
    <div className="space-y-6">
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Order Catalog</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Audit customer structural purchases, cross-verify promo discounts, and handle custom access provisioning overrides.
          </p>
        </div>
      </div>

      {/* Filter States Controller Bar Toggle Group */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-2 rounded-2xl border border-zinc-200/80 dark:border-zinc-800">
        <div className="flex items-center gap-1">
          {["All", "Completed", "Processing", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterState(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filterState === tab
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 transition-all">
          <Filter size={13}/> Advanced Filtering
        </button>
      </div>

      {/* Primary Data Surface Table Block */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
        
        {/* Table Component View (Desktop Only) */}
        <div className="overflow-x-auto hidden md:block">
          {filteredOrders.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
              No orders found matching this criteria.
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 text-zinc-400 font-semibold text-xs uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-3.5 px-6">Order ID</th>
                  <th className="py-3.5 px-6">Student Account</th>
                  <th className="py-3.5 px-6">Purchased Module</th>
                  <th className="py-3.5 px-6">Promo Tag</th>
                  <th className="py-3.5 px-6">Gross Amount</th>
                  <th className="py-3.5 px-6">Fulfillment State</th>
                  <th className="py-3.5 px-6 text-right">Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-colors">
                    <td className="py-4 px-6 font-mono text-xs font-bold text-zinc-900 dark:text-white">{order.id}</td>
                    <td className="py-4 px-6 font-medium text-zinc-700 dark:text-zinc-300">{order.customer}</td>
                    <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400 max-w-xs truncate font-medium">{order.course}</td>
                    <td className="py-4 px-6">
                      {order.coupon && order.coupon !== "None" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-500 bg-indigo-500/10 dark:bg-indigo-500/5 px-2 py-0.5 rounded-md border border-indigo-500/10">
                          <Tag size={10}/> {order.coupon}
                        </span>
                      ) : (
                        <span className="text-zinc-400 dark:text-zinc-600 text-xs">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 font-bold text-zinc-900 dark:text-white">{order.gross}</td>
                    <td className="py-4 px-6">{getFulfillmentBadge(order.fulfillment)}</td>
                    <td className="py-4 px-6 text-right">
                      <button className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all inline-flex items-center gap-1 font-semibold text-xs">
                        Inspect <ArrowRight size={12}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Responsive Mobile Layout Stack */}
        <div className="grid grid-cols-1 divide-y divide-zinc-100 dark:divide-zinc-800 md:hidden">
          {filteredOrders.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
              No orders found matching this criteria.
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="p-4 space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-zinc-900 dark:text-white">{order.id}</span>
                  {getFulfillmentBadge(order.fulfillment)}
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{order.course}</p>
                  <p className="text-xs text-zinc-400">Purchased by: {order.customer}</p>
                </div>
                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="text-zinc-900 dark:text-white font-bold">{order.gross}</span>
                  {/* Added explicit safety check for order.date */}
                  <span className="text-[11px] text-zinc-400">{order.date || "No Date"}</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default OrdersCard;