// src/pages/AdminManageUsersPage.js
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/common/AdminHeader';
import Breadcrumb from '../components/ui/Breadcrumb';
import SortingButton from '../components/ui/SortingButton';
import UserTypeBox from '../components/UserTypeBox';

function AdminManageUsersPage() {
    const breadcrumbItems = [
        { label: 'Dashboard', href: '/admindashboard' },
        { label: 'Manage Users' },
    ];

    const users = [
        { label: 'All', type: 'type', value: 1 },
        { label: 'Client', type: 'type', value: 2 },
        { label: 'Hotels', type: 'type', value: 3 },
        { label: 'Floral', type: 'type', value: 4 },
    ];

    const userData = [

        { name: 'Amanda Silva', type: 'Hotel', avatarSrc: 'src/assets/images/Images/avatar2.png' },
        { name: 'John Doe', type: 'Photographer', avatarSrc: 'src/assets/images/Images/avatar2.png' },
        { name: 'Kamal Jayaweera', type: 'Client', avatarSrc: 'src/assets/images/Images/Profile.png' },
        { name: 'Lily White', type: 'Floral', avatarSrc: 'src/assets/images/Images/avatar2.png' },
    ];

    return (
        <>
            <AdminHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <AdminSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Users</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl p-6 flex flex-row items-center justify-between'>
                            <div className='text-lg text-black'>
                                Select User Type
                            </div>
                            <SortingButton iconPath="m19 9-7 7-7-7" title="Type" items={users} />
                        </div>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row gap-10 sm:gap-5 flex-wrap'>
                            {userData.map((user, index) => (
                                <UserTypeBox key={index} {...user} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminManageUsersPage;
