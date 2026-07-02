import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  BookOpen,
  Users,
  ShieldCheck,
  Award,
  Laptop,
  PlayCircle,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-7 w-7" />,
    title: "Career Focused Learning",
    description:
      "Industry-ready courses designed to help you build practical skills and advance your career.",
  },
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: "Expert Mentors",
    description:
      "Learn directly from experienced professionals with real-world industry knowledge.",
  },
  {
    icon: <Laptop className="h-7 w-7" />,
    title: "Real Projects",
    description:
      "Build practical projects to strengthen your portfolio and gain hands-on experience.",
  },
  {
    icon: <Award className="h-7 w-7" />,
    title: "Certification",
    description:
      "Receive certificates after successfully completing your courses.",
  },
  {
    icon: <PlayCircle className="h-7 w-7" />,
    title: "HD Video Lessons",
    description:
      "Enjoy high-quality video lessons with lifetime access from any device.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Secure Platform",
    description:
      "Your learning progress and payments are protected with modern security.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Community Support",
    description:
      "Collaborate with students and get help from mentors anytime.",
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: "Learn Anywhere",
    description:
      "Access your courses anytime from desktop, tablet, or mobile devices.",
  },
];

const FeatureGrid = () => {
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
            Powerful Platform Features
          </h2>

          <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Everything you need to learn, practice, build projects,
            and grow your career in one platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (

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
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800 p-8"
            >

              {/* Icon */}
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white">

                {feature.icon}

              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold dark:text-white">

                {feature.title}

              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">

                {feature.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;