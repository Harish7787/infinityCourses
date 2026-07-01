// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "../Component/layouts/AdminLayout";
// import Dashboard from "../pages/admin/Dashboard";
// import Courses from "../pages/admin/Courses";
// import Users from "../pages/admin/Users";
// import Analytics from "../pages/admin/Analytics";
// import Payment from "../pages/admin/Payment";
// import Order from "../pages/admin/Order";
// import Settings from "../pages/admin/Settings";
// import AddCourse from "../Component/admin/AddCourse";
// import EditCourse from "../Component/admin/EditCourse";
// import RestoreCourses from "../Component/admin/RestoreCourses";
// import CourseDetails from "../Component/common/CourseDetails";
// import  Home  from "../pages/User/Home";
// import Login  from "../Component/auth/LoginForm";
// import AdminProtectedRoute from "./AdminProtectedRoute";
// const AdminRoutes = () => {
//   return (
//     <AdminLayout>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Order />} />
//         <Route path="/analytics" element={<Analytics />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/add-course" element={<AddCourse />} />
//        <Route path="/course/:id" element={<CourseDetails />} />
//         <Route path="/edit-course/:id" element={<EditCourse />}  />
//         <Route path="/restore-courses" element={<RestoreCourses />} />
//       </Routes>
//     </AdminLayout>
//   );
// };

// export default AdminRoutes;

import { Routes, Route } from "react-router-dom";

import AdminLayout from "../Component/layouts/AdminLayout";
import AdminProtectedRoute from "./AdminProtectedRoute";

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
import AddUser from "../Component/admin/AddUser";
import EditUser from "../Component/admin/EditUser";
import RestoreUsers from "../Component/admin/RestoreUsers";
import ViewProfile from "../Component/common/ViewProfile";
import EditProfile from "../Component/common/EditProfile";
import NotFound from "../Component/common/NotFound";

const AdminRoutes = () => {
  return (
    <Routes>

      <Route element={<AdminProtectedRoute />}>

        <Route element={<AdminLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="courses" element={<Courses />} />
          <Route path="users" element={<Users />} />
          <Route path="payments" element={<Payment />} />
          <Route path="orders" element={<Order />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="edit-course/:id" element={<EditCourse />} />
          <Route path="restore-courses" element={<RestoreCourses />} />

          <Route path="add-user" element={<AddUser />}></Route>
          <Route path="edit-user/:id" element={<EditUser />}></Route>
          <Route path="restore-users" element={<RestoreUsers />} />
          <Route path="/profile" element={<ViewProfile />} />

          <Route path="/profile/edit" element={<EditProfile />} />
           <Route path="*" element={<NotFound />} />
        </Route>

      </Route>

    </Routes>
  );
};

export default AdminRoutes;