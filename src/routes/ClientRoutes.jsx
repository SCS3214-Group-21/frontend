import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

// import ClientViewPage
import CalenderPage from '../pages/ClientViewPage/CalenderPage.jsx'
import ClientAllVendors from '../pages/ClientVendorsPage/ClientAllVendors.jsx'
import ClientDashboardPage from '../pages/ClientViewPage/ClientDashboardPage.jsx'
import NotificationPage from '../pages/ClientViewPage/NotificationPage.jsx'

// import BlogPage
import BlogPage from '../pages/BlogPage/BlogPage.jsx'
import ViewBlogPage from '../pages/BlogPage/ViewBlogPage.jsx'

// import ClientBookingPages
import ClientAllBookings from '../pages/ClientBookingPage/ClientAllBookings.jsx'
import ClientBookingDetailsPage from '../pages/ClientBookingPage/ClientBookingDetailsPage.jsx'

// import ClientBudgetPages
import BudgetPage from '../pages/ClientBudgetPage/BudgetPage.jsx'
import PlanBudgetPage from '../pages/ClientBudgetPage/PlanBudgetPage.jsx'
import PlanBudgetPage2 from '../pages/ClientBudgetPage/PlanBudgetPage2.jsx'

// import ClientChatPages
import ClientAllChats from '../pages/ClientChatPage/ClientAllChats.jsx'
import ClientChatPage from '../pages/ClientChatPage/ClientChatPage.jsx'

// import ClientVendorsAllPage
import AllCakesPage from '../pages/ClientVendorsPage/AllCakesPage.jsx'
import AllCarsPage from '../pages/ClientVendorsPage/AllCarsPage.jsx'
import AllDressersPage from '../pages/ClientVendorsPage/AllDressersPage.jsx'
import AllFloralsPage from '../pages/ClientVendorsPage/AllFloralsPage.jsx'
import AllHotelsPage from '../pages/ClientVendorsPage/AllHotelsPage.jsx'
import AllJewelleryPage from '../pages/ClientVendorsPage/AllJewelleryPage.jsx'
import AllPhotographers from '../pages/ClientVendorsPage/AllPhotographers.jsx'
import AllSalonPage from '../pages/ClientVendorsPage/AllSalonPage.jsx'

// import ClientVendorsDetailsPage
import CakesVendorDetails from '../pages/ClientVendorsPage/CakesVendorDetails.jsx'
import CarsVendorDetails from '../pages/ClientVendorsPage/CarsVendorDetails.jsx'
import FloralVendorDetails from '../pages/ClientVendorsPage/FloralVendorDetails.jsx'
import HotelVendorDetails from '../pages/ClientVendorsPage/HotelVendorDetails.jsx'
import ViewDressingPage from '../pages/ClientVendorsPage/ViewDressingPage.jsx'
import ViewJewelleryPage from '../pages/ClientVendorsPage/ViewJewelleryPage.jsx'
import ViewPackagePage from '../pages/VendorPackagePage/ViewPackagePage.jsx'
import ViewSaloonPage from '../pages/ClientVendorsPage/ViewSaloonPage.jsx'

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
                path="/mywedding"
                element={currentUser && currentUser.roles.includes('client') ? <ClientDashboardPage /> : <Navigate to="/login" />}
            />


            {/* vendors */}
            <Route
                path="/vendors"
                element={currentUser && currentUser.roles.includes('client') ? <ClientAllVendors /> : <Navigate to="/login" />}
            />

            <Route
                path="/vendors/hotels"
                element={currentUser && currentUser.roles.includes('client') ? <AllHotelsPage /> : <Navigate to="/login" />}
            />

            <Route
                path="vendors/hoteldetails"
                element={currentUser && currentUser.roles.includes('client') ? <HotelVendorDetails /> : <Navigate to="/login" />}
            />

            {/* <Route
                path="/allcakes"
                element={currentUser && currentUser.roles.includes('client') ? <AllCakesPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/allcars"
                element={currentUser && currentUser.roles.includes('client') ? <AllCarsPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/alldressers"
                element={currentUser && currentUser.roles.includes('client') ? <AllDressersPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/allflorals"
                element={currentUser && currentUser.roles.includes('client') ? <AllFloralsPage /> : <Navigate to="/login" />}
            />

            <Route
                path="/alljewellery"
                element={currentUser && currentUser.roles.includes('client') ? <AllJewelleryPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/allphotographers"
                element={currentUser && currentUser.roles.includes('client') ? <AllPhotographers /> : <Navigate to="/login" />}
            />
            <Route
                path="/allsalons"
                element={currentUser && currentUser.roles.includes('client') ? <AllSalonPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/cakesdetails"
                element={currentUser && currentUser.roles.includes('client') ? <CakesVendorDetails /> : <Navigate to="/login" />}
            />
            <Route
                path="/carsdetails"
                element={currentUser && currentUser.roles.includes('client') ? <CarsVendorDetails /> : <Navigate to="/login" />}
            />
            <Route
                path="/floraldetails"
                element={currentUser && currentUser.roles.includes('client') ? <FloralVendorDetails /> : <Navigate to="/login" />}
            />

            <Route
                path="/viewdressing"
                element={currentUser && currentUser.roles.includes('client') ? <ViewDressingPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/viewjewellery"
                element={currentUser && currentUser.roles.includes('client') ? <ViewJewelleryPage /> : <Navigate to="/login" />}
            />

            <Route
                path="/viewsaloons"
                element={currentUser && currentUser.roles.includes('client') ? <ViewSaloonPage /> : <Navigate to="/login" />}
            /> */}

            {/* budget */}

            <Route
                path="/budget"
                element={currentUser && currentUser.roles.includes('client') ? <BudgetPage /> : <Navigate to="/login" />}
            />

            <Route
                path="/planbudget"
                element={currentUser && currentUser.roles.includes('client') ? <PlanBudgetPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/viewbudget"
                element={currentUser && currentUser.roles.includes('client') ? <PlanBudgetPage2 /> : <Navigate to="/login" />}
            />

            {/* notifications */}

            <Route
                path="/notification"
                element={currentUser && currentUser.roles.includes('client') ? <NotificationPage /> : <Navigate to="/login" />}
            />

            {/* chat */}

            <Route
                path="/messages"
                element={currentUser && currentUser.roles.includes('client') ? <ClientAllChats /> : <Navigate to="/login" />}
            />
            <Route
                path="/messages/chat"
                element={currentUser && currentUser.roles.includes('client') ? <ClientChatPage /> : <Navigate to="/login" />}
            />

            {/* calender */}

            <Route
                path="/calendar"
                element={currentUser && currentUser.roles.includes('client') ? <CalenderPage /> : <Navigate to="/login" />}
            />

            {/* bookings */}

            <Route
                path="/bookings"
                element={currentUser && currentUser.roles.includes('client') ? <ClientAllBookings /> : <Navigate to="/login" />}
            />
            <Route
                path="bookings/bookingdetails"
                element={currentUser && currentUser.roles.includes('client') ? <ClientBookingDetailsPage /> : <Navigate to="/login" />}
            />

            {/* blogs */}

            <Route
                path="/blogs"
                element={currentUser && currentUser.roles.includes('client') ? <BlogPage /> : <Navigate to="/login" />}
            />

            <Route
                path="/blogs/viewblog"
                element={currentUser && currentUser.roles.includes('client') ? <ViewBlogPage /> : <Navigate to="/login" />}
            />

        </Routes>
    )
}

export default ClientRoutes