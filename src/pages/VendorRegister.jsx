import React from "react";
import VendorRegister02 from "./VendorRegister02";
import VendorRegister03 from "./VendorRegister03";
import VendorRegister04 from "./VendorRegister04";
import VendorRegister05 from "./VendorRegister05";
import VendorRegister06 from "./VendorRegister06";
import RegistrationHeader from "../components/common/RegistrationHeader"

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