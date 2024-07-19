import React from 'react';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/ClientSidebar';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ClientVendorDetails from '../../components/ClientVendorDetails';

function HotelVendorDetails() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Hotels' },
    ];

    return (
        <>
            <RegisterHeader />
            <div className="flex flex-col md:flex-row">
                <ClientSidebar />
                <div className="flex-1 bg-[#FFF8F5] min-h-screen">
                    <div className="mt-4 ml-4 md:ml-24 lg:ml-80">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="mt-4 ml-4 mr-4 md:ml-20 md:mr-20 lg:ml-80 lg:mr-80 ">
                        <ClientVendorDetails />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelVendorDetails;
