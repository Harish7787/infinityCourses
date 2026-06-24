// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { RotateCcw } from "lucide-react";
// import { toast } from "react-toastify";

// const RestoreCourses = () => {

//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDeletedCourses();
//   }, []);

//   const fetchDeletedCourses = async () => {

//     try {

//       const res = await axios.get(
//         "http://localhost:2334/api/courses/deleted",
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       setCourses(res.data.data);

//     } catch (error) {

//       toast.error(
//         error.response?.data?.message ||
//         "Failed to fetch deleted courses"
//       );

//     } finally {

//       setLoading(false);
//     }
//   };

//   const restoreCourse = async (id) => {

//     try {

//       await axios.put(
//         `http://localhost:2334/api/courses/restore/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       toast.success("Course Restored Successfully");

//       fetchDeletedCourses();

//     } catch (error) {

//       toast.error(
//         error.response?.data?.message ||
//         "Restore Failed"
//       );
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-10">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6 mt-10">

//       <div>
//         <h1 className="text-3xl font-bold">
//           Deleted Courses
//         </h1>

//         <p className="text-slate-500">
//           Restore previously deleted courses.
//         </p>
//       </div>

//       <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg overflow-hidden">

//         <table className="w-full">

//           <thead className="bg-slate-50 dark:bg-slate-800">

//             <tr>

//               <th className="text-left px-6 py-4">
//                 Course
//               </th>

//               <th className="text-left px-6 py-4">
//                 Category
//               </th>

//               <th className="text-left px-6 py-4">
//                 Instructor
//               </th>

//               <th className="text-left px-6 py-4">
//                 Price
//               </th>

//               <th className="text-right px-6 py-4">
//                 Action
//               </th>

//             </tr>

//           </thead>

//           <tbody>

//             {courses.length === 0 ? (

//               <tr>

//                 <td
//                   colSpan="5"
//                   className="text-center py-10 text-slate-500"
//                 >
//                   No Deleted Courses Found
//                 </td>

//               </tr>

//             ) : (

//               courses.map((course) => (

//                 <tr
//                   key={course.id}
//                   className="border-t"
//                 >

//                   <td className="px-6 py-4 flex items-center gap-4">

//                     <img
//                       src={course.image}
//                       alt=""
//                       className="w-14 h-10 rounded-lg object-cover"
//                     />

//                     <span>{course.title}</span>

//                   </td>

//                   <td className="px-6 py-4">
//                     {course.category}
//                   </td>

//                   <td className="px-6 py-4">
//                     {course.instructor}
//                   </td>

//                   <td className="px-6 py-4">
//                     ₹{course.price}
//                   </td>

//                   <td className="px-6 py-4 text-right">

//                     <button
//                       onClick={() =>
//                         restoreCourse(course.id)
//                       }
//                       className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl"
//                     >
//                       <RotateCcw size={16} />
//                       Restore
//                     </button>

//                   </td>

//                 </tr>
//               ))
//             )}

//           </tbody>

//         </table>

//       </div>
//     </div>
//   );
// };

// export default RestoreCourses;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  RotateCcw,
  Search,
  Trash2,
  RefreshCw,
} from "lucide-react";
import { toast } from "react-toastify";

const RestoreCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDeletedCourses();
  }, []);

  useEffect(() => {

    const filtered = courses.filter((course) =>
      course.title
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredCourses(filtered);

  }, [search, courses]);

  const fetchDeletedCourses = async () => {

    try {

      const res = await axios.get(
        "http://localhost:2334/api/courses/deleted",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setCourses(res.data.data || []);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to fetch deleted courses"
      );

    } finally {

      setLoading(false);
    }
  };

  const restoreCourse = async (id) => {

    try {

      await axios.put(
        `http://localhost:2334/api/courses/${id}/restore`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Course Restored Successfully");

      setCourses((prev) =>
        prev.filter((course) => course.id !== id)
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Restore Failed"
      );
    }
  };

  if (loading) {

    return (
      <div className="flex justify-center items-center h-[400px]">
        <RefreshCw className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Left Side */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 px-4 py-2 rounded-xl mb-9"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h1 className="text-3xl font-bold">
            Restore Courses
          </h1>

          <p className="text-slate-500 mt-1">
            Manage and restore deleted courses.
          </p>
        </div>

        {/* Right Side Stats Card */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl px-5 py-3 min-w-[180px]">
          <p className="text-sm text-slate-500">
            Deleted Courses
          </p>

          <h3 className="text-2xl font-bold text-red-600">
            {courses.length}
          </h3>
        </div>



      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search deleted courses..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent outline-none"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">

        {filteredCourses.length === 0 ? (

          <div className="py-16 text-center">

            <Trash2
              size={60}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 text-lg font-semibold">
              No Deleted Courses Found
            </h3>

            <p className="text-slate-500 mt-1">
              All courses are active.
            </p>

          </div>

        ) : (

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">

              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr className="text-slate-700 dark:text-slate-300">
                  <th className="px-4 py-4 text-left">Course</th>
                  <th className="px-4 py-4 text-left">Category</th>
                  <th className="px-4 py-4 text-left">Instructor</th>
                  <th className="px-4 py-4 text-left">Duration</th>
                  <th className="px-4 py-4 text-left">Price</th>
                  <th className="px-4 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr
                    key={course.id}
                    className="border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all"
                  >
                    {/* Course */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3 min-w-[250px]">

                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-16 h-12 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                          onError={(e) =>
                          (e.target.src =
                            "https://via.placeholder.com/150")
                          }
                        />

                        <div className="min-w-0">
                          <h4 className="font-semibold text-slate-800 dark:text-white truncate">
                            {course.title}
                          </h4>

                          <p className="text-xs text-slate-500">
                            Course ID #{course.id}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium">
                        {course.category}
                      </span>
                    </td>

                    {/* Instructor */}
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {course.instructor}
                    </td>

                    {/* Duration */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="font-medium">
                        {course.duration} hrs
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="font-bold text-green-600 text-base">
                        ₹{course.price}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-4 py-4 text-right">
                      <button
                        onClick={() => restoreCourse(course.id)}
                        className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-green-600
            hover:bg-green-500
            px-4
            py-2
            text-sm
            font-medium
            text-white
            shadow-md
            transition-all
          "
                      >
                        <RotateCcw size={16} />
                        Restore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
};

export default RestoreCourses;