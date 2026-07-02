import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  UserCheck,
  FolderKanban,
  Infinity,
  Headphones,
  Smartphone,
} from "lucide-react";

const reasons = [
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Industry-Oriented Curriculum",
    description:
      "Our courses are designed according to the latest industry standards so you learn skills that companies actually need.",
  },
  {
    icon: <FolderKanban className="h-8 w-8" />,
    title: "Project-Based Learning",
    description:
      "Build practical projects throughout your learning journey and create a portfolio that showcases your abilities.",
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: "Expert Mentors",
    description:
      "Learn from experienced professionals who guide you with real-world knowledge and best practices.",
  },
  {
    icon: <Infinity className="h-8 w-8" />,
    title: "Lifetime Access",
    description:
      "Enroll once and revisit your course materials anytime to refresh your knowledge whenever you need.",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Dedicated Support",
    description:
      "Our support team is available to help you whenever you face issues during your learning journey.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Learn Anywhere",
    description:
      "Access your courses from desktop, tablet, or mobile devices, making learning flexible and convenient.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-5 py-2 text-indigo-600 dark:text-indigo-300 text-sm font-semibold">
            Why Choose Infinity Courses?
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black dark:text-white">
            Everything You Need To
            <span className="block bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
              Become Job Ready
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-8">
            We combine expert guidance, practical projects, modern
            technology, and flexible learning to help you build
            confidence and achieve your career goals.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {reasons.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl p-8"
            >

              {/* Icon */}

              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold dark:text-white">

                {item.title}

              </h3>

              {/* Description */}

              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;