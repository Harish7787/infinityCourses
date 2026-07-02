import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Award,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    number: "01",
    title: "Choose Your Course",
    description:
      "Browse our collection of programming, web development, design, and technology courses that match your career goals.",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    number: "02",
    title: "Learn & Build Projects",
    description:
      "Watch HD video lessons, complete quizzes, and build real-world projects to strengthen your practical skills.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    number: "03",
    title: "Earn Certificate",
    description:
      "Successfully complete the course and receive a professional certificate to showcase your achievements.",
  },
];

const LearningProcess = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black dark:text-white">
            Your Learning Journey
          </h2>

          <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Start learning in just three simple steps and achieve your career goals.
          </p>
        </motion.div>

        {/* Steps */}

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="relative rounded-3xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800 p-8 text-center"
            >

              {/* Step Number */}

              <span className="absolute top-5 right-5 text-5xl font-black text-indigo-100 dark:text-zinc-800">
                {step.number}
              </span>

              {/* Icon */}

              <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white">

                {step.icon}

              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold dark:text-white">
                {step.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>

              {/* Arrow */}

              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 text-indigo-500">
                  <ArrowDown className="rotate-[-90deg] h-8 w-8" />
                </div>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default LearningProcess;