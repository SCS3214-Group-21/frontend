import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

// import BlogPage
import BlogPage from '../pages/BlogPage/BlogPage.jsx'
import CreateBlogPage from '../pages/BlogPage/CreateBlogPage.jsx'
import UpdateBlogPage from '../pages/BlogPage/UpdateBlogPage.jsx'
import ViewBlogPage from '../pages/BlogPage/ViewBlogPage.jsx'
import ViewMyBlogPage from '../pages/BlogPage/ViewMyBlogPage.jsx'

// import VendorPackagePage
import VendorPackagesPage from '../pages/VendorPackagePage/VendorPackagesPage.jsx'
import UpdatePackagePage from '../pages/VendorPackagePage/UpdatePackagePage.jsx'
import CreatePackagePage from '../pages/VendorPackagePage/CreatePackagePage.jsx'

// import VendorViewPage
import VendorDashboardPage from '../pages/VendorViewPage/VendorDashboardPage.jsx'
import VendorProfilePage from '../pages/VendorViewPage/VendorProfilePage.jsx'

// import logout
import Logout from '../components/Logout.jsx'

const VendorRoutes = () => {

    return (
        <Route>
            <Route
                path="/logout"
                element={<Logout />}
            />
            <Route
                path="/blog"
                element={<BlogPage />}
            />
            <Route
                path="/createblog"
                element={<CreateBlogPage />}
            />
            <Route
                path="/updateblog"
                element={<UpdateBlogPage />}
            />
            <Route
                path="/viewblog"
                element={<ViewBlogPage />}
            />
            <Route
                path="/viewmyblog"
                element={<ViewMyBlogPage />}
            />
            <Route
                path="/createpackage"
                element={<CreatePackagePage />}
            />
            <Route
                path="/updatepackage"
                element={<UpdatePackagePage />}
            />
            <Route
                path="/vendorpackages"
                element={<VendorPackagesPage />}
            />
            <Route
                path="/vendordashboard"
                element={<VendorDashboardPage />}
            />
            <Route
                path="/vendorprofile"
                element={<VendorProfilePage />}
            />
        </Route>
    )
}

export default VendorRoutes