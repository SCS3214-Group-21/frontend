import React from "react";
import RegisterHeader from "../components/common/RegisterHeader";
import VendorSidebar from "../components/VendorSidebar";
import Breadcrumb from '../components/ui/Breadcrumb';
import UpdatePackageForm from '../components/UpdatePackageForm'

function UpdatePackagePage(){
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Hotels' },
    ];
    return(
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-2 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-custom-primary font-bold text-4xl'>Update Packages</h1>
                    </div>
                    <div className="pb-5">
                        <UpdatePackageForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePackagePage
