import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    value: "150+",
    title: "Premium Courses",
    description:
      "Carefully designed courses covering programming, design, and modern technologies.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: "10K+",
    title: "Happy Students",
    description:
      "Thousands of students trust our platform to build their professional careers.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "98%",
    title: "Success Rate",
    description:
      "Students successfully complete their courses and improve their technical skills.",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    value: "500+",
    title: "Certificates Issued",
    description:
      "Professional certificates awarded after successful course completion.",
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black dark:text-white">
            Our Achievements
          </h2>

          <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Trusted by thousands of learners to build successful careers.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-gradient-to-br from-white to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-xl p-8 text-center"
            >

              {/* Icon */}

              <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white">

                {item.icon}

              </div>

              {/* Number */}

              <h3 className="mt-6 text-5xl font-black bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">

                {item.value}

              </h3>

              {/* Title */}

              <h4 className="mt-3 text-xl font-bold dark:text-white">

                {item.title}

              </h4>

              {/* Description */}

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default StatsSection;