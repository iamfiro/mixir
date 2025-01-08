import { Navigate, Outlet } from "react-router";
import checkAuthenticate from "../utils/api/checkAuthenticate";

const PrivateRoute = () => {
    const isAuthenticated = checkAuthenticate();

    if (!isAuthenticated) {
        alert('로그인 후 이용이 가능합니다')
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;