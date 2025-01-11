import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import PrivateRoute from './PrivateRouter'

const PageLogin = lazy(() => import('../pages/login/Login'))
const PageRedirectLogin = lazy(() => import('../pages/login/RedirectLogin'))
const OnboardSchool = lazy(() => import('../pages/OnboardSchool/OnboardSchool'))
const PageHome = lazy(() => import('../pages/home/Home'))

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<PageLogin />} />
                <Route
                    path="/auth/callback/google"
                    element={<PageRedirectLogin />}
                />
                <Route path="/onboard/school" element={<OnboardSchool />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<PageHome />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
