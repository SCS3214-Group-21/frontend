
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getToken, getUserRole } from '../utils/auth';

// import ClientViewPage
import CalenderPage from '../pages/ClientViewPage/CalenderPage.jsx';
import ClientAllVendors from '../pages/ClientVendorsPage/ClientAllVendors.jsx';
import ClientDashboardPage from '../pages/ClientViewPage/ClientDashboardPage.jsx';
import NotificationPage from '../pages/ClientViewPage/NotificationPage.jsx';

// import BlogPage
import BlogPage from '../pages/BlogPage/BlogPage.jsx';
import ViewBlogPage from '../pages/BlogPage/ViewBlogPage.jsx';

// import ClientBookingPages
import ClientAllBookings from '../pages/ClientBookingPage/ClientAllBookings.jsx';
import ClientBookingDetailsPage from '../pages/ClientBookingPage/ClientBookingDetailsPage.jsx';

// import ClientBudgetPages
import BudgetPage from '../pages/ClientBudgetPage/BudgetPage.jsx';
import PlanBudgetPage from '../pages/ClientBudgetPage/PlanBudgetPage.jsx';
import PlanBudgetPage2 from '../pages/ClientBudgetPage/PlanBudgetPage2.jsx';

// import ClientChatPages
import ChatPage from '../pages/ClientChatPage/ChatPage.jsx';

// import ClientVendorsAllPage
import AllCakesPage from '../pages/ClientVendorsPage/AllCakesPage.jsx';
import AllCarsPage from '../pages/ClientVendorsPage/AllCarsPage.jsx';
import AllDressersPage from '../pages/ClientVendorsPage/AllDressersPage.jsx';
import AllFloralsPage from '../pages/ClientVendorsPage/AllFloralsPage.jsx';
import AllHotelsPage from '../pages/ClientVendorsPage/AllHotelsPage.jsx';
import AllJewelleryPage from '../pages/ClientVendorsPage/AllJewelleryPage.jsx';
import AllPhotographers from '../pages/ClientVendorsPage/AllPhotographers.jsx';
import AllSalonPage from '../pages/ClientVendorsPage/AllSalonPage.jsx';

// import ClientVendorsDetailsPage
import CakesVendorDetails from '../pages/ClientVendorsPage/CakesVendorDetails.jsx';
import CarsVendorDetails from '../pages/ClientVendorsPage/CarsVendorDetails.jsx';
import FloralVendorDetails from '../pages/ClientVendorsPage/FloralVendorDetails.jsx';
import HotelVendorDetails from '../pages/ClientVendorsPage/HotelVendorDetails.jsx';
import ViewDressingPage from '../pages/ClientVendorsPage/ViewDressingPage.jsx';
import ViewJewelleryPage from '../pages/ClientVendorsPage/ViewJewelleryPage.jsx';
import ViewPackagePage from '../pages/VendorPackagePage/ViewPackagePage.jsx';
import ViewSaloonPage from '../pages/ClientVendorsPage/ViewSaloonPage.jsx';

// import Logout Component
import Logout from '../components/Logout.jsx';
import NotFoundPage from '../pages/errors/NotFoundPage.jsx';

const ClientRoutes = () => {
  const token = getToken(); // Get the token from storage
  const userRole = getUserRole(); // Get the user role from storage

  // Check if the user is authenticated and has the 'client' role
  const isAuthenticatedClient = token && userRole === 'client';

  return (
    <Routes>
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/mywedding"
        element={isAuthenticatedClient ? <ClientDashboardPage /> : <Navigate to="/login" />}
      />

      {/* Vendors */}
      <Route
        path="/vendors"
        element={isAuthenticatedClient ? <ClientAllVendors /> : <Navigate to="/login" />}
      />
      <Route
        path="/vendors/hotels"
        element={isAuthenticatedClient ? <AllHotelsPage /> : <Navigate to="/login" />}
      />
      <Route
        path="vendors/hoteldetails/:id"
        element={isAuthenticatedClient ? <HotelVendorDetails /> : <Navigate to="/login" />}
      />

      {/* Budget */}
      <Route
        path="/budget"
        element={isAuthenticatedClient ? <BudgetPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/planbudget"
        element={isAuthenticatedClient ? <PlanBudgetPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/viewbudget/:id"
        element={isAuthenticatedClient ? <PlanBudgetPage2 /> : <Navigate to="/login" />}
      />

      {/* Notifications */}
      <Route
        path="/notification"
        element={isAuthenticatedClient ? <NotificationPage /> : <Navigate to="/login" />}
      />

      {/* Chat */}
      
      <Route
        path="/messages"
        element={isAuthenticatedClient ? <ChatPage /> : <Navigate to="/login" />}
      />
      

      {/* Calendar */}
      <Route
        path="/calendar"
        element={isAuthenticatedClient ? <CalenderPage /> : <Navigate to="/login" />}
      />

      {/* Bookings */}
      <Route
        path="/bookings"
        element={isAuthenticatedClient ? <ClientAllBookings /> : <Navigate to="/login" />}
      />
      <Route
        path="bookings/bookingdetails"
        element={isAuthenticatedClient ? <ClientBookingDetailsPage /> : <Navigate to="/login" />}
      />

      {/* Blogs */}
      <Route
        path="/blogs"
        element={isAuthenticatedClient ? <BlogPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/blogs/viewblog/:id"
        element={isAuthenticatedClient ? <ViewBlogPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/*"
        element={isAuthenticatedClient ? <NotFoundPage text="Back to Dashboard" link="/client/mywedding" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default ClientRoutes;












