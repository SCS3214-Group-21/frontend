import React from "react";
import LandingHeader from "../components/common/LandingHeader";
import RegisterProgress from "../components/ui/RegisterProgress";
import SecondaryButton from "../components/ui/SecondaryButton";
import CustomPinkButton from "../components/ui/CustomPinkButton";

function VendorRegister06() {
  return (
    <div>
  <LandingHeader />
  <div
    className="bg-[#FFF8F5] h-[44rem] w-full bg-no-repeat bg-cover flex-row justify-center items-center relative pb-5"
    style={{ backgroundImage: "url('./src/assets/images/Images/007.png')" }}
  >
    <div className="h-[36rem] flex justify-center flex-col text-center px-5">
      <h1 className="text-[#8C4A60] font-sans font-normal text-4xl sm:text-6xl pb-10">
      Congratulations! <br/>
        <span className="text-xl sm:text-2xl">Your account has been created successfully</span>
      </h1>
      <div className="flex flex-row justify-center pt-5 px-5">
        <CustomPinkButton 
          link={'/'}
          text={"View Profile"} 
        />
      </div>
    </div>
    <div className="flex flex-col rounded-xl gap-3 items-center justify-center w-full pt-5 px-10 sm:px-20 text-center text-black">
      <RegisterProgress precentage={100} />
    </div>
  </div>
</div>

  );
}

export default VendorRegister06;
