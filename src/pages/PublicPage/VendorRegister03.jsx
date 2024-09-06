import React from "react";
import LandingHeader from "../../components_depr/common/LandingHeader.jsx";
import RegisterProgress from "../../components_depr/ui/RegisterProgress.jsx";
import SecondaryButton from "../../components_depr/ui/SecondaryButton.jsx";
import PersonalDetailsForm from "../../components_depr/PersonalDetailsForm.jsx";
import TermsConditions from "../../components_depr/TermsConditions.jsx";

function VendorRegister03() {
  return (
    <div>
      {/* <LandingHeader /> */}
      <div
        className="bg-[#FFF8F5] min-h-screen w-full bg-no-repeat bg-cover flex-row justify-center items-center relative pb-5"
        style={{ backgroundImage: "url('./src/assets/images/Images/007.png')" }}
      >
        <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col items-center py-10">
            <PersonalDetailsForm />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center py-10">
            <TermsConditions />
            </div>
        </div>
        <div className="flex flex-row justify-end pt-5 pr-10 sm:pr-20">
            {/* <SecondaryButton 
                link={'/vendorregister4'}
                text={"Next >>"}
            /> */}
        </div>  
        <div className="flex flex-col rounded-xl gap-3 items-center justify-center w-full pt-5 px-10 sm:px-20 text-center text-black">
          <RegisterProgress precentage={40} />
        </div> 
      </div>
    </div>
  );
}

export default VendorRegister03;
