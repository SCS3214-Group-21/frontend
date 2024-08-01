import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

// import BlogPage
import BlogPage from '../pages/BlogPage/BlogPage.jsx'
import CreateBlogPage from '../pages/BlogPage/CreateBlogPage.jsx'
import UpdateBlogPage from '../pages/BlogPage/UpdateBlogPage.jsx'
import ViewBlogPage from '../pages/BlogPage/ViewBlogPage.jsx'
import ViewMyBlogPage from '../pages/BlogPage/ViewMyBlogPage.jsx'

// import ClientBookingPages
import ClientAllBookings from '../pages/ClientBookingPage/ClientAllBookings.jsx'
import ClientBookingDetailsPage from '../pages/ClientBookingPage/ClientBookingDetailsPage.jsx'

// import ClientBudgetPages
import PlanBudgetPage from '../pages/ClientBudgetPage/PlanBudgetPage.jsx'

// import ClientChatPages
import ClientAllChats from '../pages/ClientChatPage/ClientAllChats.jsx'
import ClientChatPage from '../pages/ClientChatPage/ClientChatPage.jsx'

// import ClientVendorsAllPage
import AllCakesPage from '../pages/ClientVendorsAllPage/AllCakesPage.jsx'
import AllCarsPage from '../pages/ClientVendorsAllPage/AllCarsPage.jsx'
import AllDressersPage from '../pages/ClientVendorsAllPage/AllDressersPage.jsx'
import AllFloralsPage from '../pages/ClientVendorsAllPage/AllFloralsPage.jsx'
import AllHotelsPage from '../pages/ClientVendorsAllPage/AllHotelsPage.jsx'
import AllJewelleryPage from '../pages/ClientVendorsAllPage/AllJewelleryPage.jsx'
import AllPhotographers from '../pages/ClientVendorsAllPage/AllPhotographers.jsx'
import AllSalonPage from '../pages/ClientVendorsAllPage/AllSalonPage.jsx'

// import ClientVendorsDetailsPage
import CakesVendorDetails from '../pages/ClientVendorsDetailsPage/CakesVendorDetails.jsx'
import CarsVendorDetails from '../pages/ClientVendorsDetailsPage/CarsVendorDetails.jsx'
import FloralVendorDetails from '../pages/ClientVendorsDetailsPage/FloralVendorDetails.jsx'
import HotelVendorDetails from '../pages/ClientVendorsDetailsPage/HotelVendorDetails.jsx'

// import ClientViewPage
import BudgetPage from '../pages/ClientViewPage/BudgetPage.jsx'
import CalenderPage from '../pages/ClientViewPage/CalenderPage.jsx'
import ClientAllVendors from '../pages/ClientViewPage/ClientAllVendors.jsx'
import ClientDashboardPage from '../pages/ClientViewPage/ClientDashboardPage.jsx'
import ClientVendorCategory from '../pages/ClientViewPage/ClientVendorCategory.jsx'
import NotificationPage from '../pages/ClientViewPage/NotificationPage.jsx'
import ViewDressingPage from '../pages/ClientViewPage/ViewDressingPage.jsx'
import ViewJewelleryPage from '../pages/ClientViewPage/ViewJewelleryPage.jsx'
import ViewPackagePage from '../pages/ClientViewPage/ViewPackagePage.jsx'
import ViewSaloonPage from '../pages/ClientViewPage/ViewSaloonPage.jsx'

// import Logout Component
import Logout from '../components/Logout.jsx'

const ClientRoutes = () => {
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
                path="/blog"
                element={currentUser && currentUser.roles.includes('client') ? <BlogPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/createblog"
                element={currentUser && currentUser.roles.includes('client') ? <CreateBlogPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="updateblog"
                element={currentUser && currentUser.roles.includes('client') ? <UpdateBlogPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/viewblog"
                element={currentUser && currentUser.roles.includes('client') ? <ViewBlogPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/viewmyblog"
                element={currentUser && currentUser.roles.includes('client') ? <ViewMyBlogPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/bookings"
                element={currentUser && currentUser.roles.includes('client') ? <ClientAllBookings /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/bookingdetails"
                element={currentUser && currentUser.roles.includes('client') ? <ClientBookingDetailsPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/planbudget"
                element={currentUser && currentUser.roles.includes('client') ? <PlanBudgetPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/allchats"
                element={currentUser && currentUser.roles.includes('client') ? <ClientAllChats /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/chat2"
                element={currentUser && currentUser.roles.includes('client') ? <ClientChatPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/allcakes"
                element={currentUser && currentUser.roles.includes('client') ? <AllCakesPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/allcars"
                element={currentUser && currentUser.roles.includes('client') ? <AllCarsPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/alldressers"
                element={currentUser && currentUser.roles.includes('client') ? <AllDressersPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/allflorals"
                element={currentUser && currentUser.roles.includes('client') ? <AllFloralsPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/allhotels"
                element={currentUser && currentUser.roles.includes('client') ? <AllHotelsPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/alljewellery"
                element={currentUser && currentUser.roles.includes('client') ? <AllJewelleryPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/allphotographers"
                element={currentUser && currentUser.roles.includes('client') ? <AllPhotographers /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/allsalons"
                element={currentUser && currentUser.roles.includes('client') ? <AllSalonPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/cakesdetails"
                element={currentUser && currentUser.roles.includes('client') ? <CakesVendorDetails /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/carsdetails"
                element={currentUser && currentUser.roles.includes('client') ? <CarsVendorDetails /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/floraldetails"
                element={currentUser && currentUser.roles.includes('client') ? <FloralVendorDetails /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/hoteldetails"
                element={currentUser && currentUser.roles.includes('client') ? <HotelVendorDetails /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/budget"
                element={currentUser && currentUser.roles.includes('client') ? <BudgetPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/calender"
                element={currentUser && currentUser.roles.includes('client') ? <CalenderPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/allvendors"
                element={currentUser && currentUser.roles.includes('client') ? <ClientAllVendors /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/mywedding"
                element={currentUser && currentUser.roles.includes('client') ? <ClientDashboardPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/category"
                element={currentUser && currentUser.roles.includes('client') ? <ClientVendorCategory /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/notification"
                element={currentUser && currentUser.roles.includes('client') ? <NotificationPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/viewdressing"
                element={currentUser && currentUser.roles.includes('client') ? <ViewDressingPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/viewjewellery"
                element={currentUser && currentUser.roles.includes('client') ? <ViewJewelleryPage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/viewpackage"
                element={currentUser && currentUser.roles.includes('client') ? <ViewPackagePage /> : <Navigate to="unauthorized" />}
            />
            <Route
                path="/viewsaloons"
                element={currentUser && currentUser.roles.includes('client') ? <ViewSaloonPage /> : <Navigate to="unauthorized" />}
            />
        </Routes>
    )
}

export default ClientRoutes