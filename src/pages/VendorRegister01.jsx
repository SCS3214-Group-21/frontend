import React from "react";
import VenderRegisterCarousel from "../components/VenderRegisterCarousel";
import LandingHeader from '../components/common/LandingHeader';
import CustomButton from '../components/ui/CustomPinkButton';
import RegistrationHeader from "../components/common/RegistrationHeader"

function VendorRegister01() {
    return(
        <div>
            <RegistrationHeader />
            <div className="relative">
                <VenderRegisterCarousel />
                <div className="flex justify-center items-center min-h-screen relative z-10">
                    <div className="bg-white flex flex-col rounded-xl gap-3 items-center justify-center w-fit p-4 bg-opacity-50 text-center text-black">
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
