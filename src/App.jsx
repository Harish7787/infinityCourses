// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Course from "./pages/Course";
// import About from "./pages/About";
// import LatestCourse from "./Component/LatestCourse";
// import Latest from "./pages/Latest";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//       <Routes>
//          <Route path="/courses" element={<Course />} />
//       </Routes>
//        <Routes>
//          <Route path="/about" element={<About />} />
//       </Routes>
//         <Routes>
//          <Route path="/latest" element={<Latest />} />
//       </Routes>
//         <Routes>
//          <Route path="/contact" element={<Course />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// export default App

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/User/Home";
import Course from "./pages/User/Course";
import About from "./pages/User/About";
import Latest from "./pages/User/Latest";
import Contact from "./pages/User/Contact";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Dashboard from "./pages/admin/Dashboard";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import ScrollToTop from "./Component/common/ScrollToTop";
import NotFound from "./Component/common/NotFound";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/courses" element={<Course />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/latest" element={<Latest />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/admin/*" element={<AdminRoutes />} />
    //      <Route path="/*" element={<UserRoutes />} />
    //   </Routes>
    // </BrowserRouter>

     <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* User Routes */}
        <Route path="/*" element={<UserRoutes />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

       <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;