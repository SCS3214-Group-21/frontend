import React from 'react';
import RegisterHeader from '../../components_depr/common/RegisterHeader';
import ClientSidebar from '../../components_depr/ClientSidebar';
import Chatbox from '../../components_depr/common/Chatbox';
import Breadcrumb from '../../components_depr/ui/Breadcrumb';

function ClientAllChats() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Messages' },
    ];

    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Messages</h1>
                    </div>
                    <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5 sm:p-10'>
                        <div className="space-y-4">
                            <Chatbox
                                Name="Vendor1"
                                Status="Sent"
                                Message="This is suit to my wedding"
                                Time="12:34"
                                Path="/chat2"
                            />
                            <Chatbox
                                Name="Vendor2"
                                Status="Delivered"
                                Message="Okay thank you!"
                                Time="10:20"
                                Path="/chat2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientAllChats;
