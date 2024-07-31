import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ClientRegisterPage from "../pages/ClientRegisterPage"
import VendorRegister01 from "../pages/VendorRegister01";
import VendorRegister02 from "../pages/VendorRegister02";
import VendorRegister03 from "../pages/VendorRegister03";
import VendorRegister04 from "../pages/VendorRegister04";
import VendorRegister05 from "../pages/VendorRegister05";
import VendorRegister06 from "../pages/VendorRegister06";
import ClientAllVendors from "../pages/ClientVendorsPage/ClientAllVendors";
import AllHotelsPage from "../pages/ClientVendorsPage/AllHotelsPage";
import AllPhotographers from "../pages/ClientVendorsPage/AllPhotographers";
import AllFloralsPage from "../pages/ClientVendorsPage/AllFloralsPage";
import AllCakesPage from "../pages/ClientVendorsPage/AllCakesPage";
import AllCarsPage from "../pages/ClientVendorsPage/AllCarsPage";
import HotelVendorDetails from "../pages/ClientVendorsDetailsPage/HotelVendorDetails";
import FloralVendorDetails from "../pages/ClientVendorsDetailsPage/FloralVendorDetails";
import CakesVendorDetails from "../pages/ClientVendorsDetailsPage/CakesVendorDetails";
import CarsVendorDetails from "../pages/ClientVendorsDetailsPage/CarsVendorDetails";
import ClientChatPage from "../pages/ClientChatPage/ClientChatPage";
import ClientAllChats from "../pages/ClientChatPage/ClientAllChats";
import VendorProfilePage from "../pages/VendorProfilePage"
import VendorPackagesPage from "../pages/VendorPackagesPage";
import CreatePackagePage from "../pages/CreatePackagePage";
import UpdatePackagePage from "../pages/UpdatePackagePage";
import ViewPackagePage from "../pages/ViewPackagePage";
import VendorDashboardPage from "../pages/VendorDashboardPage";
import BudgetPage from "../pages/BudgetPage";
import PlanBudgetPage from "../pages/PlanBudgetPage";
import CreateBlogPage from "../pages/CreateBlogPage";
import UpdateBlogPage from "../pages/UpdateBlogPage";
import BlogPage from "../pages/BlogsPage";

import LandingPageBackup from "../pages/LandingPageBackup.jsx";

import ClientAllBookings from "../pages/ClientBookingPage/ClientAllBookings";
import ClientBookingDetailsPage from "../pages/ClientBookingPage/ClientBookingDetailsPage";
import ClientDashboardPage from "../pages/ClientDashboardPage";

import ViewBlogPage from "../pages/ViewBlogPage";
import ViewMyBlogPage from "../pages/ViewMyBlogPage";
import ViewSaloonPage from "../pages/ViewSaloonPage";
import ViewJewelleryPage from "../pages/ViewJewelleryPage";
import ViewDressingPage from "../pages/ViewDressingPage";
import CalenderPage from "../pages/CalenderPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminManageUsersPage from "../pages/AdminManageUsersPage";
import AdminBlogPage from "../pages/AdminBlogPage";
import AdminCreateBlogPage from "../pages/AdminCreateBlogPage";
import AllJewelleryPage from "../pages/ClientVendorsPage/AllJewelleryPage";
import AllSalonPage from "../pages/ClientVendorsPage/AllSalonPage";
import AllDressersPage from "../pages/ClientVendorsPage/AllDressersPage";
import NotificationPage from "../pages/NotificationPage";


function PublicRoute() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<LandingPage />}></Route>*/}
                    <Route path="/" element={<LandingPageBackup />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<ClientRegisterPage />}></Route>
                    <Route path="/vendorregister1" element={<VendorRegister01 />}></Route>
                    <Route path="/vendorregister2" element={<VendorRegister02 />}></Route>
                    <Route path="/vendorregister3" element={<VendorRegister03 />}></Route>
                    <Route path="/vendorregister4" element={<VendorRegister04 />}></Route>
                    <Route path="/vendorregister5" element={<VendorRegister05 />}></Route>
                    <Route path="/vendorregister6" element={<VendorRegister06 />}></Route>
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


                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default PublicRoute;