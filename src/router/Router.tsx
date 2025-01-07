import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const PageLogin = lazy(() => import('../pages/login/Login'))

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin />} />
            </Routes>
        </BrowserRouter>
    )
}