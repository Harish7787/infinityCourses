// import React from "react";

// import {
//   Routes,
//   Route,
// } from "react-router-dom";





// const AdminRoutes = () => {

//   return (
//     <Routes>

//       <Route path="/" element={<Dashboard />} />

//       <Route path="/courses" element={<Courses />} />

//       <Route path="/users" element={<Users />} />

//       <Route path="/payments" element={<Payment />} />

//       <Route path="/orders" element={<Order />} />


//       <Route path="/analytics" element={<Analytics />} />
//       <Route path="/settings" element={<Settings />} />
//       <Route path="/add-course" element={<AddCourse />} />

//     </Routes>
//   );
// };

// export default AdminRoutes;

import { Routes, Route } from "react-router-dom";
import AdminLayout from "../Component/layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Courses from "../pages/admin/Courses";
import Users from "../pages/admin/Users";
import Analytics from "../pages/admin/Analytics";
import Payment from "../pages/admin/Payment";
import Order from "../pages/admin/Order";
import Settings from "../pages/admin/Settings";
import AddCourse from "../Component/admin/AddCourse";
import EditCourse from "../Component/admin/EditCourse";
import RestoreCourses from "../Component/admin/RestoreCourses";
import CourseDetails from "../Component/common/CourseDetails";


const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/users" element={<Users />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-course" element={<AddCourse />} />
       <Route path="/course/:id" element={<CourseDetails />} />
        <Route
          path="/edit-course/:id"
          element={<EditCourse />}
        />
        <Route
          path="/restore-courses"
          element={<RestoreCourses />}

        />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;