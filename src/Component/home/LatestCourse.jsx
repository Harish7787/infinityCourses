// "use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
  User,
  Newspaper,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LatestCourse = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestCourses();
  }, []);

  const fetchLatestCourses = async () => {
    try {

      const token = localStorage.getItem("token");

      console.log("TOKEN =", token);

      const res = await axios.get(
        "http://localhost:2334/api/courses/latest",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCourses(res.data.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center">

        <div className="animate-spin rounded-full h-14 w-14 border-4 border-indigo-600 border-t-transparent"></div>

        <p className="mt-4 text-slate-500">
          Loading course...
        </p>

      </div>
    );
  }

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
            <Newspaper className="h-4 w-4" />
            Latest Articles & News
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
            Latest
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
              Updates & Articles
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
            Stay updated with the latest trends in online learning,
            technology, programming, and digital education.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                dark:border-white/10
                bg-white/70
                dark:bg-zinc-900/70
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(0,0,0,0.12)]
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-60 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Meta */}
                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
                    {course.category}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    {course.level}
                  </span>

                </div>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-zinc-900 dark:text-white">
                  {course.title}
                </h2>

                <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-7 line-clamp-3">
                  {course.description}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Clock3 className="h-4 w-4" />
                    {course.duration} Hours
                  </div>

                  <div className="text-lg font-bold text-indigo-600">
                    ₹{course.price}
                  </div>

                  <button
                    onClick={() => navigate(`/course/${course.id}`)}
                    className="
    flex items-center gap-2
    rounded-xl
    bg-gradient-to-r
    from-indigo-500
    to-violet-600
    px-4 py-2
    text-sm font-semibold
    text-white shadow-lg
  "
                  >
                    View Course
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default LatestCourse;