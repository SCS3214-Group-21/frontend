import React from "react";
import LandingHeader from "../../components/common/LandingHeader.jsx";
import RegisterProgress from "../../components/ui/RegisterProgress.jsx";
import SecondaryButton from "../../components/ui/SecondaryButton.jsx";
import PersonalDetailsForm from "../../components/vendor/PersonalDetailsForm.jsx";
import TermsConditions from "../../components/vendor/TermsConditions.jsx";

function VendorRegister03() {
  return (
    <div>
      {/* <LandingHeader /> */}
      <div
        className="bg-[#FFF8F5] min-h-screen w-full bg-no-repeat bg-cover flex-row justify-center items-center relative pb-5"
        style={{ backgroundImage: "url('./src/assets/images/Images/007.png')" }}
      >
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col items-center w-full py-10 md:w-1/2">
            <PersonalDetailsForm />
          </div>
          <div className="flex flex-col items-center w-full py-10 md:w-1/2">
            <TermsConditions />
          </div>
        </div>
        <div className="flex flex-row justify-end pt-5 pr-10 sm:pr-20">
          {/* <SecondaryButton 
                link={'/vendorregister4'}
                text={"Next >>"}
            /> */}
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 px-10 pt-5 text-center text-black rounded-xl sm:px-20">
          <RegisterProgress precentage={40} />
        </div>
      </div>
    </div>
  );
}

export default VendorRegister03;
