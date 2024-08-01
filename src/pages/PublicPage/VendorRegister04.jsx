import React from "react";
import LandingHeader from "../../components/common/LandingHeader.jsx";
import RegisterProgress from "../../components/ui/RegisterProgress.jsx";
import SecondaryButton from "../../components/ui/SecondaryButton.jsx";

function VendorRegister04() {
  return (
    <div>
      {/* <LandingHeader /> */}
      <div
        className="bg-[#FFF8F5] min-h-screen w-full bg-no-repeat bg-cover flex-row justify-center items-center relative pb-5"
        style={{ backgroundImage: "url('./src/assets/images/Images/007.png')" }}
      >
        <div className="h-[36rem] flex justify-center flex-col text-left pl-10">
          <h1 className="text-black font-sans font-normal text-3xl sm:text-4xl pb-10">
            Hi, Stark<br/>What is your Business name..?
          </h1>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered border border-black w-3/4 md:w-1/4 bg-transparent text-black"
          />
          <div className="flex flex-row justify-start pt-5 pr-10 sm:pr-20">
          {/* <SecondaryButton 
            link={'/min-h-screen'}
            text={"Next >>"} 
          /> */}
            </div>
        </div>
        <div className="flex flex-col rounded-xl gap-3 items-center justify-center w-full pt-5 px-10 sm:px-20 text-center text-black">
          <RegisterProgress precentage={60} />
        </div>
      </div>
    </div>
  );
}

export default VendorRegister04;
