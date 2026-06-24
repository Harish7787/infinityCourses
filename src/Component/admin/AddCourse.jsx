// import React, { useState } from "react";
// import axios from "axios";

// const AddCourse = () => {

//   const [course, setCourse] = useState({
//     title: "",
//     description: "",
//     category: "",
//     instructor: "",
//     price: "",
//     image: "",
//   });

//   const handleChange = (e) => {

//     setCourse({
//       ...course,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       const token = localStorage.getItem("token");

//       await axios.post(
//         "http://localhost:8080/api/courses/create",
//         course,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Course Added Successfully");

//       setCourse({
//         title: "",
//         description: "",
//         category: "",
//         instructor: "",
//         price: "",
//         image: "",
//       });

//     } catch (error) {

//       console.log(error);

//       alert("Failed to add course");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">

//       <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">

//         <h1 className="text-3xl font-bold mb-8">
//           Add New Course
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5"
//         >

//           <input
//             type="text"
//             name="title"
//             placeholder="Course Title"
//             value={course.title}
//             onChange={handleChange}
//             className="w-full border rounded-xl p-3"
//             required
//           />

//           <textarea
//             name="description"
//             placeholder="Course Description"
//             value={course.description}
//             onChange={handleChange}
//             className="w-full border rounded-xl p-3"
//             rows="4"
//             required
//           />

//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={course.category}
//             onChange={handleChange}
//             className="w-full border rounded-xl p-3"
//             required
//           />

//           <input
//             type="text"
//             name="instructor"
//             placeholder="Instructor Name"
//             value={course.instructor}
//             onChange={handleChange}
//             className="w-full border rounded-xl p-3"
//             required
//           />

//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={course.price}
//             onChange={handleChange}
//             className="w-full border rounded-xl p-3"
//             required
//           />

//           <input
//             type="text"
//             name="image"
//             placeholder="Image URL"
//             value={course.image}
//             onChange={handleChange}
//             className="w-full border rounded-xl p-3"
//           />

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold"
//           >
//             Create Course
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCourse;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  User,
  IndianRupee,
  Clock,
  Image,
  Layers,
} from "lucide-react";



const AddCourse = () => {

  const [course, setCourse] = useState({
    title: "",
    description: "",
    category: "",
    instructor: "",
    price: "",
    duration: "",
    level: "",
    image: "",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(
      "http://localhost:2334/api/courses",
      course,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  navigation.navigate('/courses')
    toast.success(response.data.message);

  } catch (error) {

  const data = error.response?.data;

  console.log(data);

  if (data?.errors) {

    Object.values(data.errors).forEach((msg) => {
      toast.error(msg);
    });

  } else {

    toast.error(
      data?.message ||
      error.message ||
      "Something went wrong"
    );
  }
}
};
const navigate = useNavigate();

  return (
    
    
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] p-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        {/* <div className="mb-8">

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Create New Course
          </h1>

          <p className="text-slate-500 mt-2">
            Add and publish new courses for students.
          </p>

        </div> */}

        <div className="flex items-center justify-between mb-6">
  <div>
    <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
      Create New Course
    </h1>
    <p className="text-slate-500 mt-2">
      Add and publish new courses for students.
    </p>
  </div>

  <button
    onClick={() => navigate(-1)}
    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
  >
    <ArrowLeft size={18} />
    Go Back
  </button>
</div>

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-3 gap-6"
        >

          {/* Left Side */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">

            <h2 className="font-semibold text-xl mb-6">
              Course Information
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 font-medium">
                  Course Title
                </label>

                <div className="relative">

                  <BookOpen
                    size={18}
                    className="absolute left-4 top-4 text-slate-400"
                  />

                  <input
                    type="text"
                    name="title"
                    value={course.title}
                    onChange={handleChange}
                    placeholder="React JS Masterclass"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent"
                  />

                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Description
                </label>

                <textarea
                  rows="6"
                  name="description"
                  value={course.description}
                  onChange={handleChange}
                  placeholder="Enter detailed course description..."
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 font-medium">
                    Category
                  </label>

                  <select
                    name="category"
                    value={course.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 bg-transparent"
                  >
                    <option value="">Select Category</option>
                    <option>Web Development</option>
                    <option>UI/UX</option>
                    <option>Java</option>
                    <option>Spring Boot</option>
                    <option>React</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Level
                  </label>

                  <select
                    name="level"
                    value={course.level}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 bg-transparent"
                  >
                    <option value="">Select Level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>

              </div>

              <div className="grid md:grid-cols-3 gap-5">

                <div>
                  <label className="block mb-2 font-medium">
                    Instructor
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="text"
                      name="instructor"
                      value={course.instructor}
                      onChange={handleChange}
                      className="w-full pl-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Price
                  </label>

                  <div className="relative">
                    <IndianRupee
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="number"
                      name="price"
                      value={course.price}
                      onChange={handleChange}
                      className="w-full pl-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">
                    Duration
                  </label>

                  <div className="relative">
                    <Clock
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="text"
                      name="duration"
                      value={course.duration}
                      onChange={handleChange}
                      placeholder="10 Hours"
                      className="w-full pl-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">

            <h2 className="font-semibold text-xl mb-6">
              Thumbnail
            </h2>

            <input
              type="text"
              name="image"
              value={course.image}
              onChange={handleChange}
              placeholder="Paste Image URL"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3"
            />

            <div className="mt-6 border-2 border-dashed rounded-2xl p-4 min-h-[250px] flex items-center justify-center">

              {course.image ? (
                <img
                  src={course.image}
                  alt="preview"
                  className="rounded-xl object-cover w-full h-60"
                />
              ) : (
                <div className="text-center text-slate-400">

                  <Image size={40} className="mx-auto mb-3" />

                  <p>No Thumbnail Preview</p>

                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full mt-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all"
            >
              Publish Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;