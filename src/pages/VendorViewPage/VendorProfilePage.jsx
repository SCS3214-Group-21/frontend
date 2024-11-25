import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from "../../components/vendor/VendorSidebar.jsx";
import BusinesSDetailsForm from "../../components/vendor/BusinessDetailsForm.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';

function VendorProfilePage() {
    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendor/dashboard' },
        { label: 'Profile' },
    ];

    // Assuming the vendor's ID is stored in localStorage or comes from elsewhere
    const vendorId = localStorage.getItem("vendor_id");  // or wherever you store it

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Edit Profile</h1>
                    </div>
                    <div className="pb-5">
                        <BusinesSDetailsForm vendorId={vendorId} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorProfilePage;
