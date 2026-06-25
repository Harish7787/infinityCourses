import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {

    const payload = JSON.parse(
      atob(token.split(".")[1])
    );

    if (
      payload.role !== "ADMIN" &&
      payload.role !== "ROLE_ADMIN"
    ) {
      return <Navigate to="/" replace />;
    }

    return <Outlet />;

  } catch (error) {

    localStorage.removeItem("token");

    return <Navigate to="/login" replace />;
  }
};

export default AdminProtectedRoute;