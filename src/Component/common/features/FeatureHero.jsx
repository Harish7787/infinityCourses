import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const FeatureHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 pt-36 pb-24 px-6">

      {/* Background Blur */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
        >

          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-4 py-2 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Discover Our Features
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-zinc-900 dark:text-white">
            Everything You Need
            <span className="block bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
              To Learn Better
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Infinity Courses provides industry-focused learning,
            practical projects, expert mentorship,
            and certificates to help you build a successful career.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3 text-white font-semibold shadow-xl">
              Explore Courses
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-7 py-3 font-semibold dark:text-white">
              Learn More
            </button>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="h-80 w-80 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl">

              <BookOpen className="h-36 w-36 text-white" />

            </div>

            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-300"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FeatureHero;