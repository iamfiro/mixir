import { BrowserRouter, Route, Routes } from "react-router";
import { PageLogin } from "../pages/login/Login";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin />} />
            </Routes>
        </BrowserRouter>
    )
}