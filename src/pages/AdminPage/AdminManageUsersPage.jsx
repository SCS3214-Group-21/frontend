import React, { useState } from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import AdminHeader from '../../components/common/AdminHeader.jsx';
import SecondaryButton from '../../components/ui/SecondaryButton.jsx';
import ManageUserPopup from '../../components/ManageUserPopup.jsx';
import DeleteButton from '../../components/ui/DeleteButton.jsx';

function AdminManageUserPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Control popup visibility
    const [selectedUser, setSelectedUser] = useState(null); // Hold user data

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/admindashboard' },
        { label: 'Manage User' },
    ];

    const users = [
        { id: 1, name: 'Lakshani', type: 'Vendor', regDate: '2024/11/14', location: 'Galle' },
        { id: 2, name: 'John Doe', type: 'Admin', regDate: '2024/10/01', location: 'Colombo' },
    ];

    const handleViewUser = (user) => {
        console.log('User data:', user); // Debugging log
        setSelectedUser(user);
        setIsPopupOpen(true); // Trigger popup display
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false); // Close the popup
        setSelectedUser(null); // Clear selected user
    };

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
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row gap-10 sm:gap-5 flex-wrap'>
                            <table className="w-full border-collapse rounded-xl flex-wrap text-black">
                                <thead>
                                    <tr className='text-black'>
                                        <th className="px-4 py-2 border-b">User ID</th>
                                        <th className="px-4 py-2 border-b">User Name</th>
                                        <th className="px-4 py-2 border-b">User Type</th>
                                        <th className="px-4 py-2 border-b">Reg-Date</th>
                                        <th className="px-4 py-2 border-b">Location</th>
                                        <th className="px-4 py-2 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id} className='text-center'>
                                            <td className="px-4 py-2 border-b">{user.id}</td>
                                            <td className="px-4 py-2 border-b">{user.name}</td>
                                            <td className="px-4 py-2 border-b">{user.type}</td>
                                            <td className="px-4 py-2 border-b">{user.regDate}</td>
                                            <td className="px-4 py-2 border-b">{user.location}</td>
                                            <td className="px-4 py-2 space-x-2 border-b">
                                                <SecondaryButton
                                                    onClick={() => handleViewUser(user)} // Call the function with user data
                                                    text="View"
                                                />
                                                <DeleteButton link="/deleteUser/1" text="Remove" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup */}
            {isPopupOpen && selectedUser && (
                <ManageUserPopup user={selectedUser} onClose={handleClosePopup} />
            )}
        </>
    );
}

export default AdminManageUserPage;
