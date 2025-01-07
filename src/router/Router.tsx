import { BrowserRouter, Route, Routes } from "react-router";
import { PageLogin } from "../pages";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin />} />
            </Routes>
        </BrowserRouter>
    )
}