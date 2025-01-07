import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRoute from "./PrivateRouter";

const PageLogin = lazy(() => import('../pages/login/Login'))

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin />} />
                <Route element={<PrivateRoute />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}