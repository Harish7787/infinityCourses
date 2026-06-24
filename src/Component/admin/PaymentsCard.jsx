import React, { useState } from "react";
import { CreditCard, Search, ArrowUpRight, CheckCircle2, XCircle, AlertCircle, RefreshCw, Download, ExternalLink } from "lucide-react";
import { paymentTransactions } from "../../data/paymentTransactions";

const PaymentsCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status) => {
    switch (status) {
      case "Succeeded":
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/30 dark:border-emerald-800/30"><CheckCircle2 size={12}/> Succeeded</span>;
      case "Failed":
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200/30 dark:border-rose-800/30"><XCircle size={12}/> Failed</span>;
      case "Refunded":
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/30 dark:border-amber-800/30"><RefreshCw size={12}/> Refunded</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-zinc-50 text-zinc-700 dark:bg-zinc-800/40 dark:text-zinc-400"><AlertCircle size={12}/> {status}</span>;
    }
  };

  const filteredTxns = paymentTransactions.filter(txn =>
    txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    txn.customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Payments Registry</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Monitor payouts, merchant payouts, global settlement records, and webhooks.</p>
        </div>
        <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 text-white font-medium px-4 py-2.5 rounded-xl text-sm transition-all shadow-sm">
          <Download size={15} /> Export Ledger
        </button>
      </div>

      {/* Mini Volume Performance Sub-Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl border border-zinc-200/60 dark:border-white/5 bg-white dark:bg-zinc-900 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Gross Sales Volume</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold text-zinc-900 dark:text-white">$142,384.50</span>
            <span className="text-xs text-emerald-500 font-semibold flex items-center"><ArrowUpRight size={12}/> 14.2%</span>
          </div>
        </div>
        <div className="p-5 rounded-2xl border border-zinc-200/60 dark:border-white/5 bg-white dark:bg-zinc-900 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Successful Payouts</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold text-zinc-900 dark:text-white">1,204</span>
            <span className="text-xs text-zinc-400 font-normal">99.2% rate</span>
          </div>
        </div>
        <div className="p-5 rounded-2xl border border-zinc-200/60 dark:border-white/5 bg-white dark:bg-zinc-900 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Disputes Open</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold text-zinc-900 dark:text-white">2</span>
            <span className="text-xs text-rose-500 font-semibold">0.01% threshold</span>
          </div>
        </div>
      </div>

      {/* Central Command Input Filter Strip */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={16} />
        <input 
          type="text" 
          placeholder="Search by Txn ID or Customer Name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
        />
      </div>

      {/* Primary Data Surface Layer */}
      <div className="rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
        {/* Table View (Desktops/Tablets) */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-950 text-zinc-400 font-semibold text-xs uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">
                <th className="py-3.5 px-6">Transaction ID</th>
                <th className="py-3.5 px-6">Customer</th>
                <th className="py-3.5 px-6">Amount</th>
                <th className="py-3.5 px-6">Method</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6">Settlement Date</th>
                <th className="py-3.5 px-6 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
              {filteredTxns.map((txn) => (
                <tr key={txn.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-colors">
                  <td className="py-4 px-6 font-mono text-xs font-semibold text-zinc-600 dark:text-zinc-400">{txn.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img src={txn.customer.avatar} alt="" className="w-7 h-7 rounded-full object-cover" />
                      <div>
                        <p className="font-medium text-zinc-900 dark:text-white">{txn.customer.name}</p>
                        <p className="text-xs text-zinc-400">{txn.customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-zinc-900 dark:text-white">{txn.amount}</td>
                  <td className="py-4 px-6 text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-2 mt-2">
                    <CreditCard size={14} className="text-zinc-400"/> {txn.method}
                  </td>
                  <td className="py-4 px-6">{getStatusBadge(txn.status)}</td>
                  <td className="py-4 px-6 text-zinc-400 dark:text-zinc-500 text-xs">{txn.date}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1.5 text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all inline-flex">
                      <ExternalLink size={14}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Responsive Blocks Card Stack */}
        <div className="grid grid-cols-1 divide-y divide-zinc-100 dark:divide-zinc-800 md:hidden">
          {filteredTxns.map((txn) => (
            <div key={txn.id} className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <img src={txn.customer.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{txn.customer.name}</h4>
                    <p className="text-[11px] font-mono text-zinc-400">{txn.id}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-zinc-900 dark:text-white">{txn.amount}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-zinc-400">{txn.date}</span>
                {getStatusBadge(txn.status)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentsCard;