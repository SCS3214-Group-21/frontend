import React from "react";
import LandingHeader from "../components/common/LandingHeader";
import RegisterProgress from "../components/ui/RegisterProgress";
import SecondaryButton from "../components/ui/SecondaryButton";

function VendorRegister05() {
  return (
    <div>
  {/* <LandingHeader /> */}
  <div
    className="bg-[#FFF8F5] min-h-screen w-full bg-no-repeat bg-cover flex-row justify-center items-center relative pb-5"
    style={{ backgroundImage: "url('./src/assets/images/Images/007.png')" }}
  >
    <div className="h-[36rem] flex justify-center flex-col text-left pl-10">
      <h1 className="text-black font-sans font-normal text-3xl sm:text-4xl pb-10">
        Almost done..! <br/><br/>
        <span className="text-xl sm:text-2xl">One Last thing</span><br/>
        <span className="text-lg sm:text-xl">How did you hear about us?</span>
      </h1>
      <select
        className="select select-bordered border border-black w-3/4 md:w-1/4 bg-transparent text-black"
        defaultValue=""
      >
        <option value="" disabled>-- Select one --</option>
        <option value="social_media">Social Media</option>
        <option value="friends_family">Friends/Family</option>
        <option value="advertisement">Advertisement</option>
        <option value="online_search">Online Search</option>
        <option value="other">Other</option>
      </select>
      <div className="flex flex-row justify-start pt-5 pr-10 sm:pr-20">
        {/* <SecondaryButton 
          link={'/vendorregister6'}
          text={"Finish"} 
        /> */}
      </div>
    </div>
    <div className="flex flex-col rounded-xl gap-3 items-center justify-center w-full pt-5 px-10 sm:px-20 text-center text-black">
      <RegisterProgress precentage={80} />
    </div>
  </div>
</div>

  );
}

export default VendorRegister05;
