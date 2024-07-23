import React from 'react';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/ClientSidebar';
import Chatbox from '../../components/common/Chatbox';

function ClientAllChats() {
    return (
        <>
            <div className="bg-[#FFF8F5] min-h-screen flex flex-col">
                <RegisterHeader />
                <div className="flex flex-1">
                    <ClientSidebar />
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-col mt-4 ml-4 md:ml-24 lg:ml-80">
                            <div className="flex items-center">
                                <h1 className="text-3xl font-bold text-[#A57E17]">Chat</h1>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 p-4 mt-10 mr-10 lg:mr-20 bg-white border-b-4 border-[#FFDBC8] rounded-lg shadow-md relative overflow-hidden ml-8 md:ml-24 lg:ml-80 mb-6 space-y-4">
                            <Chatbox Name="Vendor1" Status="Sent" Message="This is suit to my wedding" Time="12:34" Path="/chat2" />
                            <Chatbox Name="Vendor2" Status="Delivered" Message="Okay thank you!" Time="10:20" Path="/chat2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientAllChats;
