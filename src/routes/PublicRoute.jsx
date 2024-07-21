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
import AllCarsPage from "../pages/ClientVendorsPage/AllCarsPage";
import HotelVendorDetails from "../pages/ClientVendorsDetailsPage/HotelVendorDetails";
import FloralVendorDetails from "../pages/ClientVendorsDetailsPage/FloralVendorDetails";
import ClientChatPage from "../pages/ClientChatPage/ClientChatPage";
import ClientAllChats from "../pages/ClientChatPage/ClientAllChats";

function PublicRoute() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
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
                    <Route path="/allcars" element={<AllCarsPage />}></Route>
                    <Route path="/hoteldetails" element={<HotelVendorDetails />}></Route>
                    <Route path="/floraldetails" element={<FloralVendorDetails />}></Route>
                    <Route path="/allchats" element={<ClientAllChats />}></Route>
                    <Route path="/chat2" element={<ClientChatPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default PublicRoute;