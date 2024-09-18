import React from "react";
import VenderRegisterCarousel from "../../components/vendor/VenderRegisterCarousel.jsx";
import LandingHeader from '../../components/common/LandingHeader.jsx';
import CustomButton from '../../components/ui/CustomPinkButton.jsx';
import RegistrationHeader from "../../components/common/RegistrationHeader.jsx"

function VendorRegister01() {
    return (
        <div>
            <RegistrationHeader />
            <div className="relative">
                <VenderRegisterCarousel />
                <div className="relative z-10 flex items-center justify-center min-h-screen">
                    <div className="flex flex-col items-center justify-center gap-3 p-4 text-center text-black bg-white bg-opacity-50 rounded-xl w-fit">
                        <p>Register now and showcase your talents to thousands of couples.</p>
                        <p>No fees until your first booking..!</p>
                        <CustomButton
                            link={'/vendorregister'}
                            bgColor={"bg-black"}
                            text={"Get Started"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorRegister01;
