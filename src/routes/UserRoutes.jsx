import React from "react";
import { Routes, Route } from "react-router-dom";


import CourseDetails from "../Component/common/CourseDetails";
import Course from "../pages/User/Course";
import About from "../pages/User/About";
import Latest from "../pages/User/Latest";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Home from "../pages/User/Home";
import Contact from "../pages/User/Contact";
import NotFound from "../Component/common/NotFound";
import Features from "../pages/common/Features";
import InfoPage from "../pages/common/InfoPage";
import UserProfile from "../Component/common/UserProfile";
import EditUserProfile from "../Component/common/EditUserProfile";

const UserRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/about" element={<About />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Course Details */}
      <Route
        path="/course/:id"
        element={<CourseDetails />}
      />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/profile/edit" element={<EditUserProfile />} />
      <Route path="/features" element={<Features />} />
      <Route path="/info/:page" element={<InfoPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoutes;