import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
    Clock3,
    BookOpen,
    User,
    ArrowLeft,
    ShoppingCart,
} from "lucide-react";
import BookNow from "../payment/BookNow ";
import Navbar from "./header";
import Footer from "./footer";


const CourseDetails = () => {
    const { id } = useParams();
    const [showBooking, setShowBooking] = useState(false);
    const navigate = useNavigate();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourse();
    }, []);

    const fetchCourse = async () => {
        try {
            console.log("ID =", id);

            const res = await axios.get(
                `http://localhost:2334/api/courses/${id}`
            );
            console.log(res.data);

            setCourse(res.data.data);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleBookNow = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }

  setShowBooking(true);
};

if (loading) {
  return (
    
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent"></div>
    </div>
  );
}

    if (!course) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                Course not found
            </div>
        );
    }

return (
  <div className="min-h-screen bg-slate-50">

    {/* Hero Section */}
    <div className="relative h-[300px] md:h-[450px]">

      <img
        src={course.image}
        alt={course.title}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/1200x600";
        }}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-8">

        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-white hover:text-indigo-300 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex flex-wrap gap-2 mb-4">

          <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-sm">
            {course.category}
          </span>

          <span className="px-3 py-1 rounded-full bg-green-600 text-white text-sm">
            {course.level}
          </span>

        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white">
          {course.title}
        </h1>

      </div>
    </div>

    {/* Content */}
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left */}
        <div className="lg:col-span-2">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-4">
              About This Course
            </h2>

            <p className="text-slate-600 leading-8">
              {course.description ||
                "Master the concepts from beginner to advanced level with practical examples and real-world projects."}
            </p>

          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-5 mt-8">

            <div className="bg-white rounded-2xl shadow-md p-6">

              <Clock3
                size={24}
                className="text-indigo-600 mb-3"
              />

              <p className="text-slate-500 text-sm">
                Duration
              </p>

              <h3 className="font-bold text-xl">
                {course.duration} Hours
              </h3>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">

              <User
                size={24}
                className="text-green-600 mb-3"
              />

              <p className="text-slate-500 text-sm">
                Instructor
              </p>

              <h3 className="font-bold text-xl">
                {course.instructor}
              </h3>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">

              <BookOpen
                size={24}
                className="text-purple-600 mb-3"
              />

              <p className="text-slate-500 text-sm">
                Level
              </p>

              <h3 className="font-bold text-xl">
                {course.level}
              </h3>

            </div>

          </div>

        </div>

        {/* Right */}
        <div>

          <div className="sticky top-24 bg-white rounded-3xl shadow-xl p-8">

            <p className="text-slate-500">
              Course Price
            </p>

            <h2 className="text-5xl font-bold text-indigo-600 mt-2">
              ₹{course.price}
            </h2>

            <div className="border-t my-6" />

            <ul className="space-y-4 text-slate-600">

              <li>✓ Full Lifetime Access</li>

              <li>✓ Mobile & Desktop Access</li>

              <li>✓ Certificate Included</li>

              <li>✓ Project Based Learning</li>

            </ul>

            <button
              onClick={handleBookNow}
              className="
                mt-8
                w-full
                flex
                items-center
                justify-center
                gap-3
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                hover:from-indigo-700
                hover:to-purple-700
                text-white
                py-4
                rounded-2xl
                font-semibold
                shadow-lg
                transition-all
              "
            >
              <ShoppingCart size={20} />
              Book Now
            </button>

          </div>

        </div>

      </div>

    </div>

    {/* Mobile Sticky Button */}
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t p-4 lg:hidden">

      <button
        onClick={handleBookNow}
        className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          text-white
          py-4
          rounded-2xl
          font-semibold
        "
      >
        <ShoppingCart size={20} />
        Book Now • ₹{course.price}
      </button>

    </div>

    {showBooking && (
      <BookNow
        course={course}
        onClose={() => setShowBooking(false)}
      />
    )}
<Footer/>
  </div>
);
};

export default CourseDetails;