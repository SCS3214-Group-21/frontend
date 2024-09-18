import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

// import BlogPage
import BlogPage from '../pages/BlogPage/BlogPage.jsx'
import CreateBlogPage from '../pages/BlogPage/CreateBlogPage.jsx'
import UpdateBlogPage from '../pages/BlogPage/UpdateBlogPage.jsx'
import ViewMyBlogPage from '../pages/BlogPage/ViewMyBlogPage.jsx'

// import VendorPackagePage
import VendorPackagesPage from '../pages/VendorPackagePage/VendorPackagesPage.jsx'
import UpdatePackagePage from '../pages/VendorPackagePage/UpdatePackagePage.jsx'
import CreatePackagePage from '../pages/VendorPackagePage/CreatePackagePage.jsx'
import ViewPackagePage from '../pages/VendorPackagePage/ViewPackagePage.jsx'

// import VendorViewPage
import VendorDashboardPage from '../pages/VendorViewPage/VendorDashboardPage.jsx'
import VendorProfilePage from '../pages/VendorViewPage/VendorProfilePage.jsx'

// import logout
import Logout from '../components/Logout.jsx'


import VendorNotificationPage from "../pages/VendorViewPage/VendorNotificationPage.jsx";
import VendorAllChatsPage from "../pages/VendorViewPage/VendorAllChatsPage.jsx"
import VendorSchedulePage from "../pages/VendorViewPage/VendorSchedulePage.jsx"
import VendorChatPage from "../pages/VendorViewPage/VendorChatPage.jsx"
import VendorBlogPage from "../pages/VendorViewPage/VendorBlogPage.jsx"

const VendorRoutes = () => {
    const { currentUser } = useAuth()
    console.error('currentUser in ClientRoutes:', currentUser)

    // set spinner to user loading
    if (!currentUser) {
        return <div>Loading...</div>
    }

    return (
        <Routes>
            <Route
                path="/logout"
                element={<Logout />}
            />

            <Route
                path="/dashboard"
                element={<VendorDashboardPage />}
            />

            <Route
                path="/profile"
                element={<VendorProfilePage />}
            />

            {/* packages */}

            <Route
                path="/packages"
                element={<VendorPackagesPage />}
            />

            <Route
                path="/packages/createpackage"
                element={<CreatePackagePage />}
            />

            <Route
                path="/packages/viewpackage"
                element={<ViewPackagePage />}
            />

            <Route
                path="/packages/updatepackage"
                element={<UpdatePackagePage />}
            />

            <Route
                path="/notification"
                element={<VendorNotificationPage />}
            />

            <Route
                path="/messages"
                element={<VendorAllChatsPage />}
            />
            <Route
                path="/messages/chat"
                element={<VendorChatPage />}
            />

            <Route
                path="/schedule"
                element={<VendorSchedulePage />}
            />

            <Route
                path="/blog"
                element={<VendorBlogPage />}
            />
            <Route
                path="/blog/createblog"
                element={<CreateBlogPage />}
            />
            <Route
                path="/blog/updateblog"
                element={<UpdateBlogPage />}
            />

            <Route
                path="/blog/viewmyblog"
                element={<ViewMyBlogPage />}
            />

        </Routes>
    )
}

export default VendorRoutes