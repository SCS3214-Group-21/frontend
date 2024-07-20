import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
// import LoginPage from "../pages/LoginPage";
import VendorRegister01 from "../pages/VendorRegister01";
import VendorRegister02 from "../pages/VendorRegister02";
import VendorRegister03 from "../pages/VendorRegister03";
import VendorRegister04 from "../pages/VendorRegister04";
import VendorRegister05 from "../pages/VendorRegister05";
import VendorRegister06 from "../pages/VendorRegister06";
import VendorProfilePage from "../pages/VendorProfilePage"
import VendorPackagesPage from "../pages/VendorPackagesPage";
import CreatePackagePage from "../pages/CreatePackagePage";

function PublicRoute(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/login" element={<LandingPage />}></Route>
                    <Route path="/vendorregister1" element={<VendorRegister01 />}></Route>
                    <Route path="/vendorregister2" element={<VendorRegister02 />}></Route>
                    <Route path="/vendorregister3" element={<VendorRegister03 />}></Route>
                    <Route path="/vendorregister4" element={<VendorRegister04 />}></Route>
                    <Route path="/vendorregister5" element={<VendorRegister05 />}></Route>
                    <Route path="/vendorregister6" element={<VendorRegister06 />}></Route>
                    <Route path="/vendorprofile" element={<VendorProfilePage />}></Route>
                    <Route path="/vendorpackages" element={<VendorPackagesPage />}></Route>
                    <Route path="createpackage" element={<CreatePackagePage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default PublicRoute;