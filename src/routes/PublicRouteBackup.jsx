import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/PublicPage/LoginPageBackup.jsx";
import ClientRegisterPageBackup from "../pages/PublicPage/ClientRegisterPageBackup.jsx"
import VendorRegister01 from "../pages/PublicPage/VendorRegisterPage1.jsx";

import ClientAllVendors from "../pages/ClientVendorsPage/ClientAllVendors.jsx";
import AllHotelsPage from "../pages/ClientVendorsPage/AllHotelsPage.jsx";
import AllPhotographers from "../pages/ClientVendorsPage/AllPhotographers.jsx";
import AllFloralsPage from "../pages/ClientVendorsPage/AllFloralsPage.jsx";
import AllCakesPage from "../pages/ClientVendorsPage/AllCakesPage.jsx";
import AllCarsPage from "../pages/ClientVendorsPage/AllCarsPage.jsx";
import HotelVendorDetails from "../pages/ClientVendorsPage/HotelVendorDetails.jsx";
import FloralVendorDetails from "../pages/ClientVendorsPage/FloralVendorDetails.jsx";
import CakesVendorDetails from "../pages/ClientVendorsPage/CakesVendorDetails.jsx";
import CarsVendorDetails from "../pages/ClientVendorsPage/CarsVendorDetails.jsx";
import ClientChatPage from "../pages/ClientChatPage/ClientChatPage";
import ClientAllChats from "../pages/ClientChatPage/ClientAllChats";
import VendorProfilePage from "../pages/VendorViewPage/VendorProfilePage.jsx"
import VendorPackagesPage from "../pages/VendorPackagePage/VendorPackagesPage.jsx";
import CreatePackagePage from "../pages/VendorPackagePage/CreatePackagePage.jsx";
import UpdatePackagePage from "../pages/VendorPackagePage/UpdatePackagePage.jsx";
import ViewPackagePage from "../pages/VendorPackagePage/ViewPackagePage.jsx";
import VendorDashboardPage from "../pages/VendorViewPage/VendorDashboardPage.jsx";
import BudgetPage from "../pages/ClientBudgetPage/BudgetPage.jsx";
import PlanBudgetPage from "../pages/ClientBudgetPage/PlanBudgetPage.jsx";
import CreateBlogPage from "../pages/BlogPage/CreateBlogPage.jsx";
import UpdateBlogPage from "../pages/BlogPage/UpdateBlogPage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";

// import LandingPageBackup from "../pages/PublicPage/LandingPageBackup.jsx";

import ClientAllBookings from "../pages/ClientBookingPage/ClientAllBookings";
import ClientBookingDetailsPage from "../pages/ClientBookingPage/ClientBookingDetailsPage";
import ClientDashboardPage from "../pages/ClientViewPage/ClientDashboardPage.jsx";

import ViewBlogPage from "../pages/BlogPage/ViewBlogPage.jsx";
import ViewMyBlogPage from "../pages/BlogPage/ViewMyBlogPage.jsx";
import ViewSaloonPage from "../pages/ClientVendorsPage/ViewSaloonPage.jsx";
import ViewJewelleryPage from "../pages/ClientVendorsPage/ViewJewelleryPage.jsx";
import ViewDressingPage from "../pages/ClientVendorsPage/ViewDressingPage.jsx";
import CalenderPage from "../pages/ClientViewPage/CalenderPage.jsx";
import AdminDashboardPage from "../pages/AdminPage/AdminDashboardPage.jsx";
import AdminManageUsersPage from "../pages/AdminPage/AdminManageUsersPage.jsx";
import AdminBlogPage from "../pages/AdminPage/AdminBlogPage.jsx";
import AdminCreateBlogPage from "../pages/AdminPage/AdminCreateBlogPage.jsx";
import AllJewelleryPage from "../pages/ClientVendorsPage/AllJewelleryPage.jsx";
import AllSalonPage from "../pages/ClientVendorsPage/AllSalonPage.jsx";
import AllDressersPage from "../pages/ClientVendorsPage/AllDressersPage.jsx";
import NotificationPage from "../pages/ClientViewPage/NotificationPage.jsx";

import AdminBlogAcceptPage from "../pages/AdminPage/AdminBlogAcceptPage.jsx";


// import VendorRegister from "../pages/PublicPage/VendorRegister.jsx";


import VendorNotificationPage from "../pages/VendorViewPage/VendorNotificationPage.jsx";
import VendorAllChatsPage from "../pages/VendorViewPage/VendorAllChatsPage.jsx"
import VendorSchedulePage from "../pages/VendorViewPage/VendorSchedulePage.jsx"
import VendorChatPage from "../pages/VendorViewPage/VendorChatPage.jsx"
import VendorBlogPage from "../pages/VendorViewPage/VendorBlogPage.jsx"

import PlanBudgetPage2 from "../pages/ClientBudgetPage/PlanBudgetPage2.jsx";


import AdminDashboard from '../pages/AdminPage/AdminDashboardPage.jsx';
import AdminManageUser from '../pages/AdminPage/AdminManageUsersPage.jsx'
import AdminFeedbackPage from "../pages/AdminPage/AdminFeedbackPage.jsx";
import AdminTransactions from "../pages/AdminPage/AdminTransactions.jsx";
// import AdminBlogPage from '../pages/AdminPage/AdminBlogPage.jsx'



function PublicRoute() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<LandingPage />}></Route>*/}
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<ClientRegisterPageBackup />}></Route>
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

                    <Route path="/blogs" element={<BlogPage />}></Route>
                    <Route path="/vendorblog" element={<VendorBlogPage />}></Route>
                    {/* <Route path="/vendorcreateblog" element={<VendorCreateBlogPage />}></Route> */}



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
                    <Route path="/notification" element={<NotificationPage />}></Route>
                    <Route path="/admincreateblog" element={<AdminCreateBlogPage />}></Route>

                    <Route path="/vendorallchats" element={<VendorAllChatsPage />}></Route>
                    <Route path="/vendorchat" element={<VendorChatPage />}></Route>
                    <Route path="/vendorschedule" element={<VendorSchedulePage />}></Route>
                    <Route path="/vendornotification" element={<VendorNotificationPage />}></Route>

                    <Route path="/planbudget2" element={<PlanBudgetPage2 />}></Route>


                    <Route path="/admindashboard" element={<AdminDashboard />} />
                    <Route path="/adminmanageuser" element={<AdminManageUser />} />
                    <Route path="/acceptblogs" element={<AdminBlogAcceptPage />}/>
                    <Route path="/adminfeedback" element={<AdminFeedbackPage />} />
                    <Route path="/AdminTransactions" element={<AdminTransactions />} />
                    {/* <Route path="/adminblog" element={<AdminBlogPage />} /> */}

                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default PublicRoute;