import React from "react";
import LandingHeader from "../../components/common/LandingHeader.jsx";
import RegisterProgress from "../../components/ui/RegisterProgress.jsx";
import VendorType from "../../components/ui/VendorType.jsx";
import SecondaryButton from "../../components/ui/SecondaryButton.jsx";

function VendorRegister02() {
  return (
    <div>
      {/* <LandingHeader /> */}
      <div
        className="bg-[#FFF8F5] min-h-screen w-full bg-no-repeat bg-cover flex-row justify-center items-center relative pb-5"
        style={{ backgroundImage: "url('./src/assets/images/Images/007.png')" }}
      >
        <h1 className="text-black font-sans font-normal text-3xl sm:text-4xl text-center pt-10">
          What type of Vendor are you?
        </h1>
        <div className="flex flex-row flex-wrap rounded-xl gap-10 items-center justify-center w-full pt-10 px-10 sm:px-20 bg-opacity-50">
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
          <VendorType 
            name={"Photography"}
            img={"./src/assets/images/Images/01.png"}
          />
        </div>
        <h1 className="text-black font-normal text-sm sm:text-md  pt-10 text-center">
          Not Listed here..?{" "}
          <span className="text-custom-secondary">Contact us</span> for more
          info
        </h1>
        <div className="flex flex-row justify-end pt-5 pr-10 sm:pr-20">
            {/* <SecondaryButton 
                link={'/vendorregister3'}
                text={"Next >>"}
            /> */}
        </div>  
        <div className="flex flex-col rounded-xl gap-3 items-center justify-center w-full pt-5 px-10 sm:px-20 text-center text-black">
          <RegisterProgress precentage={20} />
        </div>      
      </div>
    </div>
  );
}

export default VendorRegister02;
