import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from "../../components/VendorSidebar.jsx";
import BusinesSDetailsForm from "../../components/BusinessDetailsForm.jsx";
import SocialMediaForm from "../../components/SocialMediaForm.jsx";
import PrimaryButton from "../../components/ui/PrimaryButton.jsx";
import PrimaryNoneFillButton from "../../components/ui/PrimaryNoneFillButton.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';

function VendorProfilePage(){
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Hotels' },
    ];
    return(
        <div>
            <RegisterHeader />
            {/* <ClientSidebar /> */}
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-custom-primary font-bold text-4xl'>Edit Profile</h1>
                    </div>
                    <div className="pb-5">
                        <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col sm:flex-row items-center sm:justify-start gap-10 sm:gap-5'>
                            <div className="relative">
                                <img src="../src/assets/images/Images/profile.png" alt="profile" className="w-32 h-32" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-black absolute left-12 top-28 bg-white rounded-lg cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center sm:items-start justify-center">                          
                                <h1 className='text-black text-3xl text-center'>Thilina Kaluthotage</h1>
                                <h3 className='text-black text-xl text-center'>Photographer</h3>
                            </div>
                        </form>
                    </div>
                    <div className="pb-5">
                        <BusinesSDetailsForm />
                    </div>
                    <div className="pb-5">
                        <SocialMediaForm />
                    </div>
                    <div className="pb-5 flex flex-row gap-5 justify-end flex-wrap">
                        <PrimaryNoneFillButton 
                            link={'/'}
                            text={"Reset"} 
                        />
                        <PrimaryButton
                            link={'/'}
                            text={"Save Changes"} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorProfilePage;