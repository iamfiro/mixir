import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRoute from "./PrivateRouter";

const PageLogin = lazy(() => import('../pages/login/Login'))
const PageRedirectLogin = lazy(() => import('../pages/login/RedirectLogin'))

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin />} />
                <Route path="/auth/callback/google" element={<PageRedirectLogin />} />
                <Route element={<PrivateRoute />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}