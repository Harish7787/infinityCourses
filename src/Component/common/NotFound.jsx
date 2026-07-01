import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Home,
  ArrowLeft,
  Search,
} from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 flex items-center justify-center px-6">

      {/* Background Blur */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute -bottom-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl w-full rounded-[32px] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-10 md:p-16 text-center"
      >
        {/* Floating Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 shadow-xl"
        >
          <AlertTriangle className="h-12 w-12 text-white" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
          }}
          className="mt-8 text-8xl md:text-9xl font-black bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
          Oops! Page Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          The page you're looking for may have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-7 py-3 font-semibold text-zinc-700 dark:text-zinc-300 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>

        </div>

        {/* Extra Tip */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Search className="h-4 w-4" />
          Check the URL or return to the homepage.
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;