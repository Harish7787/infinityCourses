// "use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  "Expert Instructors",
  "Live Interactive Classes",
  "Industry Recognized Certificates",
  "AI Powered Learning",
  "Flexible Learning Schedule",
  "24/7 Student Support",
];

const stats = [
  {
    icon: <Users className="h-7 w-7" />,
    value: "15K+",
    label: "Students",
  },
  {
    icon: <BookOpen className="h-7 w-7" />,
    value: "250+",
    label: "Courses",
  },
  {
    icon: <Award className="h-7 w-7" />,
    value: "98%",
    label: "Success Rate",
  },
  {
    icon: <Globe className="h-7 w-7" />,
    value: "40+",
    label: "Countries",
  },
];

const CourseAbout = () => {
  return (
    <section
      className="
        min-h-screen
        bg-gradient-to-br
        from-indigo-50
        via-white
        to-violet-100
        dark:from-zinc-950
        dark:via-zinc-900
        dark:to-indigo-950
        pt-36
        pb-24
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-indigo-100
              dark:bg-indigo-900/30
              px-4
              py-2
              text-sm
              font-medium
              text-indigo-600
              dark:text-indigo-300
            "
          >
            About Our Platform
          </div>

          <h1
            className="
              mt-6
              text-5xl
              md:text-6xl
              font-black
              tracking-tight
              text-zinc-900
              dark:text-white
            "
          >
            Empowering the
            <span
              className="
                block
                mt-2
                bg-gradient-to-r
                from-indigo-500
                to-violet-600
                bg-clip-text
                text-transparent
              "
            >
              Future of Learning
            </span>
          </h1>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-600
              dark:text-zinc-300
            "
          >
            Our course management platform helps students, teachers,
            and organizations create a modern digital learning experience
            with smart tools, live classes, and interactive learning systems.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                rounded-3xl
                border
                border-white/20
                dark:border-white/10
                bg-white/70
                dark:bg-zinc-900/70
                backdrop-blur-xl
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.12)]
              "
            >
              <h2 className="text-3xl font-black text-zinc-900 dark:text-white">
                Why Choose Us?
              </h2>

              <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-7">
                We provide high-quality online education with
                modern technologies and interactive learning methods
                designed for the next generation of students.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-indigo-100
                        dark:bg-indigo-900/30
                        text-indigo-600
                      "
                    >
                      <CheckCircle className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <button
                className="
                  mt-10
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-600
                  px-6
                  py-3
                  text-white
                  font-semibold
                  shadow-lg
                "
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-3xl
                  border
                  border-white/20
                  dark:border-white/10
                  bg-white/70
                  dark:bg-zinc-900/70
                  backdrop-blur-xl
                  p-8
                  shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-500
                    to-violet-600
                    text-white
                  "
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-4xl font-black text-zinc-900 dark:text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseAbout;