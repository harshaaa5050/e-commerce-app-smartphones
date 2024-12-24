import { Navigate, Outlet } from "react-router-dom";


const AdminProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("role");
  if (isAuthenticated !== "admin") alert("Please Login to continue");
  return isAuthenticated === "admin" ? <Outlet /> : <Navigate to="/login" />;
}


export default AdminProtectedRoutes
