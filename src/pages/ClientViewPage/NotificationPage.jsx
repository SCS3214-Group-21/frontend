import React from 'react'
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import ClientSidebar from '../../components/client/ClientSidebar.jsx';
import RegisterHeader from '../../components/common/RegisterHeader.jsx';


function NotificationPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Budget' },
    ];

    const notifications = [
        { title: 'Booking Accepted', content: 'You have received a new booking accept for a wedding on August 15th.', time: '2:45 PM', read: false },
        { title: 'New Blog Posted', content: 'A client has posted a review on your services.', time: '11:00 AM', read: true },
        { title: 'Payment Due', content: 'Your payment for the last booking is still pending.', time: '9:30 AM', read: false },
        // { title: 'Profile Update Required', content: 'Please update your profile information to ensure accuracy.', time: 'Yesterday', read: true },
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
                                    <div key={index} className={`p-4 border-l-4 ${notification.read ? 'border-custom-secondary' : 'border-custom-primary'} bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300`}>
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

export default NotificationPage

