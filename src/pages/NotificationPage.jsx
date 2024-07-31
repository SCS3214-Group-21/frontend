import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import ClientSidebar from '../components/ClientSidebar';
import RegisterHeader from '../components/common/RegisterHeader';

function NotificationPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Notifications' },
    ];
    const notifications = [
        { title: 'New Message from Vendor', content: 'You have a new message from the vendor regarding your wedding cake.', time: '12:34 PM', read: false },
        { title: 'Appointment Confirmed', content: 'Your appointment with the florist has been confirmed for tomorrow.', time: '10:20 AM', read: true },
        { title: 'Payment Received', content: 'Your payment for the wedding venue has been successfully processed.', time: '8:15 AM', read: false },
    ];

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Notifications</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8'>
                            <div className="space-y-4">
                                {notifications.map((notification, index) => (
                                    <div key={index} className={`p-2 border-l-4 ${notification.read ? 'border-custom-secondary' : 'border-custom-primary'} bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300`}>
                                        <h2 className="text-lg font-semibold text-black">{notification.title}</h2>
                                        <p className="text-gray-700">{notification.content}</p>
                                        <div className="mt-2 text-sm text-gray-500">{notification.time}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationPage;
