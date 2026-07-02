import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6">

      {/* Animated Background */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 px-10 py-20 text-center shadow-2xl"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur-md">

            <Sparkles className="h-4 w-4" />

            Ready to Start?

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl md:text-6xl font-black text-white leading-tight">

            Start Your Learning
            <span className="block">
              Journey Today 🚀
            </span>

          </h2>

          {/* Description */}

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-indigo-100">

            Join thousands of students learning programming,
            web development, technology, and real-world skills
            from industry experts.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/courses"
              className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 shadow-xl transition hover:scale-105"
            >
              <BookOpen className="h-5 w-5" />

              Explore Courses

              <ArrowRight className="h-5 w-5" />

            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <PhoneCall className="h-5 w-5" />

              Contact Us

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default FeatureCTA;