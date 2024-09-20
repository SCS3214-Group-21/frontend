import React from 'react';
import RegisterHeader from '../../components/common/RegisterHeader';
import Breadcrumb from '../../components/ui/Breadcrumb';
import VendorSidebar from '../../components/vendor/VendorSidebar';

function VendorChatPage() {
    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendor/dashboard' },
        { label: 'Messages', href: '/vendor/messages' },
        { label: 'Client 1 Chat' },
    ];

    return (
        <>

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
                        <h1 className='text-4xl font-bold text-custom-primary'>Chat</h1>
                    </div>
                    <div className="flex flex-col flex-1 p-4 mt-10 mr-8 bg-white border-b-4 border-[#FFDBC8] rounded-lg shadow-md relative overflow-hidden  mb-6">
                        <div className="flex-1 space-y-4 overflow-y-auto">
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Avatar"
                                            src="../../src/assets/Images/Images/Profile.png"
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble text-black bg-[#FFDBC8]">
                                    We will provide you a adittional setup with this.
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
                                            src="../../src/assets/Images/Images/Profile.png"
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble text-black bg-[#FFDBC8]">
                                    You can take this for your event.
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
                                            src="../../src/assets/images/Images/avatar.png"
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble text-black bg-[#F0DFD7]">
                                    Okay thank you.
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

        </>
    );
}

export default VendorChatPage;
