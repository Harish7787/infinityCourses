// import React from "react";
// import { useState } from "react";
// import BookNow from "../payment/BookNow ";
// import axios from "axios";
// import { useEffect } from "react";


// const fetchCourses = async () => {
//   try {

//     const res = await axios.get(
//       "http://localhost:2334/api/courses"
//     );

//     const activeCourses = res.data.data.filter(
//       (course) => course.active === true
//     );

//     setCourses(activeCourses);

//   } catch (error) {

//     console.log(error);

//   } finally {

//     setLoading(false);

//   }
// };
// useEffect(() => {
//   fetchCourses();
// }, []);

// const CourseSection = () => {
// const [courses, setCourses] = useState([]);
// const [loading, setLoading] = useState(true);
// const [selectedCourse, setSelectedCourse] = useState(null);
//   // const [selectedCourse, setSelectedCourse] = useState(null);
// if (loading) {
//   return (
//     <div className="py-20 text-center">
//       Loading Courses...
//     </div>
//   );
// }
//   return (
//     <section className="py-28 px-6 bg-white dark:bg-zinc-950 mt-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
//             Explore Our Top Courses
//           </h2>
//           <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
//             Learn from industry experts with interactive lessons.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               style={{ transition: "transform 0.3s ease" }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
//               className="overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-xl"
//             >
//               <div className="relative h-56 overflow-hidden">
//                 <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
//                 <div className="absolute top-4 left-4 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
//                   {course.category}
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-semibold text-yellow-500">⭐ {course.rating}</span>
//                   <span className="text-sm text-zinc-500">👥 {course.students} Students</span>
//                 </div>
//                 <h3 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">{course.title}</h3>
//                 <p className="mt-4 text-sm text-zinc-500">🕐 {course.duration}</p>
//                 <p className="mt-4 text-sm text-zinc-500">${course.price}</p>
//                 {/* <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white">
//                   Book Now →
//                 </button> */}

//                 <button
//                   onClick={() => setSelectedCourse(course)}
//                   className="mt-6 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white"
//                 >
//                   Book Now →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {selectedCourse && (
//         <BookNow
//           course={selectedCourse}
//           onClose={() => setSelectedCourse(null)}
//         />
//       )}
//     </section>
//   );
// };

// export default CourseSection;

import React, { useState, useEffect } from "react";
import BookNow from "../payment/BookNow ";
import axios from "axios";
import api from "../../api/axios";
import { motion } from "framer-motion";


const CourseSection = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);


  //  const fetchCourses = async () => {
  //   try {

  //     const token = localStorage.getItem("token");

  //     const response = await axios.get(
  //       "http://localhost:2334/api/courses",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     console.log("COURSES =", response.data);

  //     setCourses(response.data.data);

  //   } catch (error) {

  //     console.log(error);

  //   } finally {

  //     setLoading(false);
  //   }
  // };

const fetchCourses = async () => {
  try {

    const response = await api.get("/api/courses");

    console.log("COURSES =", response.data);

    setCourses(response.data.data);

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);
  }
};

  if (loading) {
    return (
      <div className="py-90 flex flex-col items-center">

        <div className="animate-spin rounded-full h-14 w-14 border-4 border-indigo-600 border-t-transparent"></div>

        <p className="mt-4 text-slate-500">
          Loading course...
        </p>

      </div>
    );
  }

  // return (
  //   <section className="py-28 px-6 bg-white dark:bg-zinc-950 mt-20">

  //     <div className="max-w-7xl mx-auto">

  //       <div className="text-center mb-16">
  //         <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
  //           Explore Our Top Courses
  //         </h2>

  //         <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
  //           Learn from industry experts with interactive lessons.
  //         </p>
  //       </div>

  //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  //         {courses.map((course) => (

  //           <div
  //             key={course.id}
  //             className="overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-xl hover:-translate-y-2 transition-all duration-300"
  //           >

  //             <div className="relative h-56 overflow-hidden">

  //               <img
  //                 src={course.image}
  //                 alt={course.title}
  //                 className="h-full w-full object-cover"
  //               />

  //               <div className="absolute top-4 left-4 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
  //                 {course.category}
  //               </div>

  //             </div>

  //             <div className="p-6">

  //               <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
  //                 {course.title}
  //               </h3>

  //               <p className="mt-3 text-sm text-zinc-500">
  //                 🕐 {course.duration} Hours
  //               </p>

  //               <p className="mt-3 text-lg font-semibold text-indigo-600">
  //                 ₹ {course.price}
  //               </p>

  //               <button
  //                 onClick={() => setSelectedCourse(course)}
  //                 className="mt-6 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white"
  //               >
  //                 Book Now →
  //               </button>

  //             </div>

  //           </div>

  //         ))}

  //       </div>

  //     </div>

  //     {selectedCourse && (
  //       <BookNow
  //         course={selectedCourse}
  //         onClose={() => setSelectedCourse(null)}
  //       />
  //     )}

  //   </section>
  // );
return (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="py-28 px-6 bg-white dark:bg-zinc-950 mt-20"
  >
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
          Explore Our Top Courses
        </h2>

        <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Learn from industry experts with interactive lessons.
        </p>
      </motion.div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-xl"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <motion.img
                src={course.image}
                alt={course.title}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover"
              />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-4 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white"
              >
                {course.category}
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-zinc-900 dark:text-white"
              >
                {course.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-sm text-zinc-500"
              >
                🕐 {course.duration} Hours
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-lg font-semibold text-indigo-600"
              >
                ₹ {course.price}
              </motion.p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(99,102,241,0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCourse(course)}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Book Now →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {selectedCourse && (
      <BookNow
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    )}
  </motion.section>
);
};

export default CourseSection;