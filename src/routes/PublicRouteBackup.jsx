import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/PublicPage/LandingPage.jsx";
import LoginPage from "../pages/PublicPage/LoginPage.jsx";
import ClientRegisterPage from "../pages/PublicPage/ClientRegisterPage.jsx"
import VendorRegister01 from "../pages/PublicPage/VendorRegister01.jsx";
import VendorRegister02 from "../pages/PublicPage/VendorRegister02.jsx";
import VendorRegister03 from "../pages/PublicPage/VendorRegister03.jsx";
import VendorRegister04 from "../pages/PublicPage/VendorRegister04.jsx";
import VendorRegister05 from "../pages/PublicPage/VendorRegister05.jsx";
import VendorRegister06 from "../pages/PublicPage/VendorRegister06.jsx";
import ClientAllVendors from "../pages/ClientViewPage/ClientAllVendors.jsx";
import AllHotelsPage from "../pages/ClientVendorsAllPage/AllHotelsPage";
import AllPhotographers from "../pages/ClientVendorsAllPage/AllPhotographers";
import AllFloralsPage from "../pages/ClientVendorsAllPage/AllFloralsPage";
import AllCakesPage from "../pages/ClientVendorsAllPage/AllCakesPage";
import AllCarsPage from "../pages/ClientVendorsAllPage/AllCarsPage";
import HotelVendorDetails from "../pages/ClientVendorsDetailsPage/HotelVendorDetails";
import FloralVendorDetails from "../pages/ClientVendorsDetailsPage/FloralVendorDetails";
import CakesVendorDetails from "../pages/ClientVendorsDetailsPage/CakesVendorDetails";
import CarsVendorDetails from "../pages/ClientVendorsDetailsPage/CarsVendorDetails";
import ClientChatPage from "../pages/ClientChatPage/ClientChatPage";
import ClientAllChats from "../pages/ClientChatPage/ClientAllChats";
import VendorProfilePage from "../pages/VendorViewPage/VendorProfilePage.jsx"
import VendorPackagesPage from "../pages/VendorViewPage/VendorPackagesPage.jsx";
import CreatePackagePage from "../pages/VendorPackagePage/CreatePackagePage.jsx";
import UpdatePackagePage from "../pages/VendorPackagePage/UpdatePackagePage.jsx";
import ViewPackagePage from "../pages/ClientViewPage/ViewPackagePage.jsx";
import VendorDashboardPage from "../pages/VendorViewPage/VendorDashboardPage.jsx";
import BudgetPage from "../pages/ClientViewPage/BudgetPage.jsx";
import PlanBudgetPage from "../pages/ClientBudgetPage/PlanBudgetPage.jsx";
import CreateBlogPage from "../pages/BlogPage/CreateBlogPage.jsx";
import UpdateBlogPage from "../pages/BlogPage/UpdateBlogPage.jsx";
import BlogPage from "../pages/BlogPage/BlogsPage.jsx";

import LandingPageBackup from "../pages/PublicPage/LandingPageBackup.jsx";

import ClientAllBookings from "../pages/ClientBookingPage/ClientAllBookings";
import ClientBookingDetailsPage from "../pages/ClientBookingPage/ClientBookingDetailsPage";
import ClientDashboardPage from "../pages/ClientViewPage/ClientDashboardPage.jsx";

import ViewBlogPage from "../pages/BlogPage/ViewBlogPage.jsx";
import ViewMyBlogPage from "../pages/BlogPage/ViewMyBlogPage.jsx";
import ViewSaloonPage from "../pages/ClientViewPage/ViewSaloonPage.jsx";
import ViewJewelleryPage from "../pages/ClientViewPage/ViewJewelleryPage.jsx";
import ViewDressingPage from "../pages/ClientViewPage/ViewDressingPage.jsx";
import CalenderPage from "../pages/ClientViewPage/CalenderPage.jsx";
import AdminDashboardPage from "../pages/AdminPage/AdminDashboardPage.jsx";
import AdminManageUsersPage from "../pages/AdminPage/AdminManageUsersPage.jsx";
import AdminBlogPage from "../pages/AdminPage/AdminBlogPage.jsx";
import AdminCreateBlogPage from "../pages/AdminPage/AdminCreateBlogPage.jsx";
import AllJewelleryPage from "../pages/ClientVendorsAllPage/AllJewelleryPage";
import AllSalonPage from "../pages/ClientVendorsAllPage/AllSalonPage";
import AllDressersPage from "../pages/ClientVendorsAllPage/AllDressersPage";
import NotificationPage from "../pages/ClientViewPage/NotificationPage.jsx";

import AdminBlogAcceptPage from "../pages/AdminPage/AdminBlogAcceptPage.jsx";


import VendorRegister from "../pages/PublicPage/VendorRegister.jsx";



function PublicRoute() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<LandingPage />}></Route>*/}
                    <Route path="/" element={<LandingPageBackup />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<ClientRegisterPage />}></Route>
                    <Route path="/vendorregister" element={<VendorRegister />}></Route>
                    <Route path="/vendorregister1" element={<VendorRegister01 />}></Route>
                    {/* <Route path="/vendorregister2" element={<VendorRegister02 />}></Route>
                    <Route path="/vendorregister3" element={<VendorRegister03 />}></Route>
                    <Route path="/vendorregister4" element={<VendorRegister04 />}></Route>
                    <Route path="/vendorregister5" element={<VendorRegister05 />}></Route>
                    <Route path="/vendorregister6" element={<VendorRegister06 />}></Route> */}
                    <Route path="/allvendors" element={<ClientAllVendors />}></Route>
                    <Route path="/allhotels" element={<AllHotelsPage />}></Route>
                    <Route path="/allphotographers" element={<AllPhotographers />}></Route>
                    <Route path="/allflorals" element={<AllFloralsPage />}></Route>
                    <Route path="/allcakes" element={<AllCakesPage />}></Route>
                    <Route path="/allcars" element={<AllCarsPage />}></Route>
                    <Route path="/alljewellery" element={<AllJewelleryPage />}></Route>
                    <Route path="/allsalons" element={<AllSalonPage />}></Route>
                    <Route path="/alldressers" element={<AllDressersPage />}></Route>
                    <Route path="/hoteldetails" element={<HotelVendorDetails />}></Route>
                    <Route path="/floraldetails" element={<FloralVendorDetails />}></Route>
                    <Route path="/cakesdetails" element={<CakesVendorDetails />}></Route>
                    <Route path="/carsdetails" element={<CarsVendorDetails />}></Route>
                    <Route path="/allchats" element={<ClientAllChats />}></Route>
                    <Route path="/chat2" element={<ClientChatPage />}></Route>
                    <Route path="/vendorprofile" element={<VendorProfilePage />}></Route>
                    <Route path="/vendorpackages" element={<VendorPackagesPage />}></Route>
                    <Route path="/createpackage" element={<CreatePackagePage />}></Route>
                    <Route path="/updatepackage" element={<UpdatePackagePage />}></Route>
                    <Route path="/viewpackage" element={<ViewPackagePage />}></Route>
                    <Route path="/vendordashboard" element={<VendorDashboardPage />}></Route>
                    <Route path="/budget" element={<BudgetPage />}></Route>
                    <Route path="/planbudget" element={<PlanBudgetPage />}></Route>
                    <Route path="/createblog" element={<CreateBlogPage />}></Route>
                    <Route path="/updateblog" element={<UpdateBlogPage />}></Route>
                    <Route path="/blog" element={<BlogPage />}></Route>



                    <Route path="/bookings" element={<ClientAllBookings />}></Route>
                    <Route path="/bookingdetails" element={<ClientBookingDetailsPage />}></Route>
                    <Route path="/mywedding" element={<ClientDashboardPage />}></Route>
                    <Route path="viewblog" element={<ViewBlogPage />}></Route>
                    <Route path="viewmyblog" element={<ViewMyBlogPage />}></Route>
                    <Route path="viewsaloons" element={<ViewSaloonPage />}></Route>
                    <Route path="viewjewellery" element={<ViewJewelleryPage />}></Route>
                    <Route path="viewdressing" element={<ViewDressingPage />}></Route>
                    <Route path="calender" element={<CalenderPage />}></Route>
                    <Route path="/admindashboard" element={<AdminDashboardPage />}></Route>
                    <Route path="/manageusers" element={<AdminManageUsersPage />}></Route>
                    <Route path="/adminblogs" element={<AdminBlogPage />}></Route>
                    <Route path="/admincreateblog" element={<AdminCreateBlogPage />}></Route>
                    <Route path="/notification" element={<NotificationPage />}></Route>
                    <Route path="/acceptblogs" element={<AdminBlogAcceptPage />}></Route>


                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default PublicRoute;