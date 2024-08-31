import React from 'react'
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AdminSidebar from '../../components/AdminSidebar.jsx';
import AdminHeader from '../../components/common/AdminHeader.jsx';
import SecondaryButton from '../../components/ui/SecondaryButton.jsx';
import ManageUserPopup from '../../components/ManageUserPopup.jsx';



function AdminManageUserPage() {

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/admindashboard' },
        { label: 'Manage User' },
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
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row gap-10 sm:gap-5 flex-wrap'>
                            <table className="w-full border-collapse  rounded-xl flex-wrap text-black ">
                                <thead>
                                    <tr className='text-black'>
                                        <th className="px-4 py-2 border-b">User ID</th>
                                        <th className="px-4 py-2 border-b">User name</th>
                                        <th className="px-4 py-2 border-b">User Type</th>
                                        <th className="px-4 py-2 border-b">Reg-Date</th>
                                        <th className="px-4 py-2 border-b">Location</th>
                                        <th className="px-4 py-2 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Replace this with dynamic rows from your data */}
                                    <tr className='text-center'>
                                        <td className="px-4 py-2 border-b ">1</td>
                                        <td className="px-4 py-2 border-b">Lakshani</td>
                                        <td className="px-4 py-2 border-b">Vendor</td>
                                        <td className="px-4 py-2 border-b">2024/11/14</td>
                                        <td className="px-4 py-2 border-b">Galle</td>
                                        <td className=" px-4 py-2 space-x-2 border-b">
                                        <SecondaryButton 
                                                link="./manageUserPopup" 
                                                text="View" 
                                            />
                                            <SecondaryButton 
                                                link="/deleteUser/1" 
                                                text="Delete" 
                                            />
                                            <button onClick={() => alert('View blog details')}>
                                                {/* <FaEye className="text-blue-500" /> */}
                                            </button>
                                            <button onClick={() => handleAccept(1)}>
                                                {/* <FaCheck className="text-green-500" /> */}
                                            </button>
                                            <button onClick={() => handleReject(1)}>
                                                {/* <FaTimes className="text-red-500" /> */}
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AdminManageUserPage