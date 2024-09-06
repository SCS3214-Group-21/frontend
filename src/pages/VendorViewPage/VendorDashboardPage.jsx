import React from "react";
import RegisterHeader from "../../components_depr/common/RegisterHeader.jsx";
import VendorSidebar from "../../components_depr/VendorSidebar.jsx";
import Breadcrumb from '../../components_depr/ui/Breadcrumb.jsx';
import VendorIncomeGraph from "../../components_depr/VendorIncomeGraph.jsx";

function VendorDashboardPage(){
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
                        <h1 className='text-custom-primary font-bold text-4xl'>Income</h1>
                    </div>
                    <div className="pb-5">
                        <VendorIncomeGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorDashboardPage;