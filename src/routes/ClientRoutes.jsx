import React from 'react'
import { Route, Routes } from 'react-router-dom'

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

    return (
        <Routes>
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
                path="updateblog"
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
                path="/bookings"
                element={<ClientAllBookings />}
            />
            <Route
                path="/bookingdetails"
                element={<ClientBookingDetailsPage />}
            />
            <Route
                path="/planbudget"
                element={<PlanBudgetPage />}
            />
            <Route
                path="/allchats"
                element={<ClientAllChats />}
            />
            <Route
                path="/chat2"
                element={<ClientChatPage />}
            />
            <Route
                path="/allcakes"
                element={<AllCakesPage />}
            />
            <Route
                path="/allcars"
                element={<AllCarsPage />}
            />
            <Route
                path="/alldressers"
                element={<AllDressersPage />}
            />
            <Route
                path="/allflorals"
                element={<AllFloralsPage />}
            />
            <Route
                path="/allhotels"
                element={<AllHotelsPage />}
            />
            <Route
                path="/alljewellery"
                element={<AllJewelleryPage />}
            />
            <Route
                path="/allphotographers"
                element={<AllPhotographers />}
            />
            <Route
                path="/allsalons"
                element={<AllSalonPage />}
            />
            <Route
                path="/cakesdetails"
                element={<CakesVendorDetails />}
            />
            <Route
                path="/carsdetails"
                element={<CarsVendorDetails />}
            />
            <Route
                path="/floraldetails"
                element={<FloralVendorDetails />}
            />
            <Route
                path="/hoteldetails"
                element={<HotelVendorDetails />}
            />
            <Route
                path="/budget"
                element={<BudgetPage />}
            />
            <Route
                path="/calender"
                element={<CalenderPage />}
            />
            <Route
                path="/allvendors"
                element={<ClientAllVendors />}
            />
            <Route
                path="mywedding"
                element={<ClientDashboardPage />}
            />
            <Route
                path="/category"
                element={<ClientVendorCategory />}
            />
            <Route
                path="/notification"
                element={<NotificationPage />}
            />
            <Route
                path="/viewdressing"
                element={<ViewDressingPage />}
            />
            <Route
                path="/viewjewellery"
                element={<ViewJewelleryPage />}
            />
            <Route
                path="/viewpackage"
                element={<ViewPackagePage />}
            />
            <Route
                path="/viewsaloons"
                element={<ViewSaloonPage />}
            />
        </Routes>
    )
}

export default ClientRoutes