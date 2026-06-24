import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  User,
  IndianRupee,
  Clock,
  Image,
} from "lucide-react";

const EditCourse = () => {

  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:2334/api/courses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCourse(res.data.data);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to load course"
      );
    }
  };

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:2334/api/courses/${id}`,
        course,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Course Updated Successfully");

      navigate("/admin/courses");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Update Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] p-6">

      <div className="max-w-6xl mx-auto">

        {/* <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Edit Course
          </h1>

          <p className="text-slate-500 mt-2">
            Update course information.
          </p>
        </div> */}

        <div className="flex items-center justify-between mb-6">
  <div>
    <h1 className="text-3xl font-bold">
      Edit Course
    </h1>
    <p className="text-slate-500">
      Update course details and information.
    </p>
  </div>

  <button
    onClick={() => navigate(-1)}
    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-4 py-2 rounded-xl"
  >
    <ArrowLeft size={18} />
    Back
  </button>
</div>

        <form
          onSubmit={handleUpdate}
          className="grid lg:grid-cols-3 gap-6"
        >

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
                    className="w-full pl-12 py-3 rounded-xl border"
                  />
                </div>
              </div>

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
                    className="w-full pl-12 py-3 rounded-xl border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">

             <div>
  <label className="block mb-2 font-medium">
    Category
  </label>

  <select
    name="category"
    value={course.category || ""}
    onChange={handleChange}
    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 bg-transparent"
  >
    <option value="">Select Category</option>
    <option value="Web Development">Web Development</option>
    <option value="UI/UX">UI/UX</option>
    <option value="Java">Java</option>
    <option value="Spring Boot">Spring Boot</option>
    <option value="React">React</option>
  </select>
</div>

               <div>
  <label className="block mb-2 font-medium">
    Level
  </label>

  <select
    name="level"
    value={course.level || ""}
    onChange={handleChange}
    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 bg-transparent"
  >
    <option value="">Select Level</option>
    <option value="Beginner">Beginner</option>
    <option value="Intermediate">Intermediate</option>
    <option value="Advanced">Advanced</option>
  </select>
</div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

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
                      className="w-full pl-12 py-3 rounded-xl border"
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
                      className="w-full pl-12 py-3 rounded-xl border"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">

            <h2 className="font-semibold text-xl mb-6">
              Thumbnail
            </h2>

            <input
              type="text"
              name="image"
              value={course.image}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
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
              className="w-full mt-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
            >
              Update Course
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditCourse;