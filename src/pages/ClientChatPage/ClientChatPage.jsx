import React from 'react';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/ClientSidebar';
import Breadcrumb from '../../components/ui/Breadcrumb';

function ClientChatPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Messages', href: '/allchats' },
        { label: 'Vendor 1 Chat' },
    ];

    return (
        <div className="bg-[#FFF8F5] min-h-screen flex flex-col">
            <RegisterHeader />
            <div className="flex flex-1">
                <ClientSidebar />
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col mt-4 ml-4 md:ml-24 lg:ml-80">
                        <div className="flex items-center">
                            <h1 className="text-3xl font-bold text-[#A57E17]">Chat</h1>
                            <div className="flex-row ml-6 lg:ml-20">
                                <Breadcrumb items={breadcrumbItems} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 p-4 mt-10 mr-8 bg-white border-b-4 border-[#FFDBC8] rounded-lg shadow-md relative overflow-hidden ml-4 md:ml-24 lg:ml-80 mb-6">
                        <div className="flex-1 space-y-4 overflow-y-auto">
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Avatar"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble text-black bg-[#FFDBC8]">
                                    It was said that you would destroy the Sith, not join them.
                                    <div>
                                        <time className="text-xs opacity-50">12:43</time>
                                    </div>
                                </div>
                            </div>
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Avatar"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble text-black bg-[#FFDBC8]">
                                    It was you who would bring balance to the Force
                                    <div>
                                        <time className="text-xs opacity-50">12:43</time>
                                    </div>
                                </div>
                            </div>
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Avatar"
                                            src="../../src/assets/images/Images/Profile.png"
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble text-black bg-[#F0DFD7]">
                                    Not leave it in Darkness
                                    <div>
                                        <time className="text-xs opacity-50">12:43</time>
                                    </div>
                                </div>
                            </div>
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Avatar"
                                            src="../../src/assets/images/Images/Profile.png"
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble text-black bg-[#F0DFD7]">
                                    Not leave it in Darkness
                                    <div>
                                        <time className="text-xs opacity-50">12:43</time>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="flex items-center p-4 space-x-4 bg-white border border-[#FFDBC8] rounded-lg shadow-md absolute bottom-0 left-0 right-0">
                            <button onClick={"/"}>
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F0DFD7]">
                                    <svg
                                        className="w-6 h-6 text-gray-800"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </div>
                            </button>
                            <input
                                type="text"
                                placeholder="Reply..."
                                className="flex-1 px-4 py-2 text-black border border-[#FFDBC8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A57E17] bg-[#F0DFD7] placeholder:text-gray-400"
                            />
                            <button>
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F0DFD7]">
                                    <svg
                                        className="w-6 h-6 text-gray-800"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12l7-7 7 7M12 5v14"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientChatPage;
