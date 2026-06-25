// import React from "react";

// import { courses } from "../../data/dummyData";

// const CoursesTable = () => {

//   return (
//     <div className="mt-10 rounded-3xl border border-white/10 bg-white/70 dark:bg-zinc-900/70 p-6 shadow-xl backdrop-blur-xl">

//       <div className="flex items-center justify-between">

//         <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
//           Courses Management
//         </h2>

//         <button className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white">
//           Add Course
//         </button>

//       </div>

//       <div className="mt-6 overflow-x-auto">

//         <table className="w-full">

//           <thead>
//             <tr className="border-b border-zinc-200 dark:border-zinc-700">

//               <th className="py-4 text-left text-sm text-zinc-500">
//                 Course
//               </th>

//               <th className="py-4 text-left text-sm text-zinc-500">
//                 Category
//               </th>

//               <th className="py-4 text-left text-sm text-zinc-500">
//                 Price
//               </th>

//               <th className="py-4 text-left text-sm text-zinc-500">
//                 Students
//               </th>

//               <th className="py-4 text-left text-sm text-zinc-500">
//                 Actions
//               </th>

//             </tr>
//           </thead>

//           <tbody>

//             {courses.map((course) => (
//               <tr
//                 key={course.id}
//                 className="border-b border-zinc-100 dark:border-zinc-800"
//               >

//                 <td className="py-4 text-zinc-900 dark:text-white">
//                   {course.title}
//                 </td>

//                 <td className="py-4 text-zinc-600 dark:text-zinc-300">
//                   {course.category}
//                 </td>

//                 <td className="py-4 text-indigo-600 dark:text-indigo-400 font-semibold">
//                   {course.price}
//                 </td>

//                 <td className="py-4 text-zinc-600 dark:text-zinc-300">
//                   {course.students}
//                 </td>

//                 <td className="py-4 flex gap-3">

//                   <button className="rounded-xl bg-indigo-500 px-4 py-2 text-sm text-white">
//                     Edit
//                   </button>

//                   <button className="rounded-xl bg-red-500 px-4 py-2 text-sm text-white">
//                     Delete
//                   </button>

//                 </td>

//               </tr>
//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// };

// export default CoursesTable;

import { Card } from '../ui/Card';
import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { useEffect } from "react";
import axios from "axios";

import {
  Plus,
  Search,
  Filter,
  Edit3,
  Trash2,
  RotateCcw
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Courses = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const filteredCourses = courses.filter(course =>
    (course.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:2334/api/courses"

      );

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
      <div className="p-10 text-center">
        Loading Courses...
      </div>
    );
  }

  //   const deleteCourse = async (id) => {

  //   if (!window.confirm("Delete this course?")) {
  //     return;
  //   }

  //   try {

  //     await axios.delete(
  //       `http://localhost:2334/api/courses/${id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`
  //         }
  //       }
  //     );

  //     toast.success("Course Deleted");

  //     setCourses(prev =>
  //       prev.filter(course => course.id !== id)
  //     );

  //   } catch (error) {

  //     toast.error(
  //       error.response?.data?.message || "Delete Failed"
  //     );
  //   }
  // };

  const deleteCourse = async (id) => {

    if (!window.confirm("Delete this course?")) {
      return;
    }

    try {

      await axios.delete(
        `http://localhost:2334/api/courses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Course Deleted");

      fetchCourses();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Delete Failed"
      );
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

      fetchCourses();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Restore Failed"
      );
    }
  };
  return (
    <div className="space-y-8">
      {/* Actions Header */}
      {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Courses Catalog</h1>
          <p className="text-sm text-slate-400 mt-1">Manage and update properties of public curricula.</p>
        </div>
        <button
          onClick={() => navigate("/admin/add-course")}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl shadow-lg"
        >
          <Plus size={16} />
          Add New Course
        </button>
      </div> */}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Courses Catalog
          </h1>

          <p className="text-sm text-slate-400 mt-1">
            Manage, update and restore course records.
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => navigate("/admin/restore-courses")}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2.5 rounded-xl shadow-lg"
          >
            <RotateCcw size={16} />
            Restore Courses
          </button>

          <button
            onClick={() => navigate("/admin/add-course")}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl shadow-lg"
          >
            <Plus size={16} />
            Add Course
          </button>

        </div>

      </div>

      {/* Control Panel Filter Belt */}
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-[#111827] p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search across title, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        <button className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-sm transition-all w-full sm:w-auto justify-center">
          <Filter size={16} /> Advanced Filters
        </button>
      </div>  

      {/* Data Presentation Node */}
      <Card className="overflow-hidden">
        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center text-slate-400">No content resources matched your criteria.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 text-slate-400 font-semibold text-xs uppercase border-b border-slate-200 dark:border-slate-800">
                  <th className="py-3.5 px-6">Course Detail</th>
                  <th className="py-3.5 px-6">Instructor</th>
                  <th className="py-3.5 px-6">Category</th>
                  <th className="py-3.5 px-6">Metrics</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-slate-50/40 dark:hover:bg-slate-900/20 transition-colors">
                    <td className="py-4 px-6 flex items-center gap-4 font-medium max-w-sm">
                      <img src={course.image} alt="" className="w-14 h-9 rounded-lg object-cover shadow-sm flex-shrink-0" />
                      <span className="truncate">{course.title}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-500 dark:text-slate-400">{course.instructor}</td>
                    <td className="py-4 px-6"><Badge variant="default">{course.category}</Badge></td>
                    <td className="py-4 px-6 font-medium">
                      ₹ {course.price}
                    </td>
                    <td className="py-4 px-6">
                      <Badge
                        variant={
                          course.deleted
                            ? "danger"
                            : course.active
                              ? "success"
                              : "warning"
                        }
                      >
                        {course.deleted
                          ? "Deleted"
                          : course.active
                            ? "Active"
                            : "Inactive"}
                      </Badge>

                    </td>
                    {/*
                    <td className="py-4 px-6 text-right space-x-1.5">
                      <button
                        onClick={() => navigate(`/admin/edit-course/${course.id}`)}
                        className="p-2 text-slate-400 hover:text-indigo-500"
                      >
                        <Edit3 size={15} />
                      </button>
                      <button
                        onClick={() => deleteCourse(course.id)}
                        className="p-2 text-slate-400 hover:text-red-500"
                      >
                        <Trash2 size={15} />
                      </button>
                    </td> */}
                    <td className="py-4 px-6 text-right">

                      <div className="flex justify-end gap-2">

                        {course.deleted ? (

                          <button
                            onClick={() => restoreCourse(course.id)}
                            className="p-2 rounded-lg text-green-500 hover:bg-green-50"
                            title="Restore Course"
                          >
                            <RotateCcw size={16} />
                          </button>

                        ) : (

                          <>
                            <button
                              onClick={() =>
                                navigate(`/admin/edit-course/${course.id}`)
                              }
                              className="p-2 rounded-lg text-indigo-500 hover:bg-indigo-50"
                              title="Edit Course"
                            >
                              <Edit3 size={16} />
                            </button>

                            <button
                              onClick={() => deleteCourse(course.id)}
                              className="p-2 rounded-lg text-red-500 hover:bg-red-50"
                              title="Delete Course"
                            >
                              <Trash2 size={16} />
                            </button>
                          </>

                        )}

                      </div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Courses;