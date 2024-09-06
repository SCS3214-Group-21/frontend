import React from "react";
import VendorRegister02 from "./VendorRegister02.jsx";
import VendorRegister03 from "./VendorRegister03.jsx";
import VendorRegister04 from "./VendorRegister04.jsx";
import VendorRegister05 from "./VendorRegister05.jsx";
import VendorRegister06 from "./VendorRegister06.jsx";
import RegistrationHeader from "../../components_depr/common/RegistrationHeader.jsx"

function VendorRegister() {
    return(
        <form>
            <RegistrationHeader />
            <div className="bg-black min-h-screen w-full pt-14">
                <VendorRegister02 />
            </div>
            <div className="bg-black min-h-screen w-full">
                <VendorRegister03 />
            </div>
            <div className="bg-black min-h-screen w-full">
                <VendorRegister04 />
            </div>
            <div className="bg-black min-h-screen w-full">
                <VendorRegister05 />
            </div>
            <div className="bg-black min-h-screen w-full">
                <VendorRegister06 />
            </div>
        </form>
    )
}

export default VendorRegister;