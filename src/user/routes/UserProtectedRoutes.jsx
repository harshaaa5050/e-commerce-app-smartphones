import { Navigate, Outlet } from "react-router-dom";

const UserProtectedRoutes = () => {
    const isAuthenticated = localStorage.getItem("user");
    if(!isAuthenticated) alert("Please Login to continue");
    return isAuthenticated ? <Outlet/> : <Navigate to = "/login"/>;
}

export default UserProtectedRoutes
