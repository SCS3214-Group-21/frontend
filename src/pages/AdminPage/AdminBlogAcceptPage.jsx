import React from 'react'
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AdminSidebar from '../../components/AdminSidebar.jsx';
import AdminHeader from '../../components/common/AdminHeader.jsx';

function AdminBlogAcceptPage() {

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/admindashboard' },
        { label: 'Blogs', href: '/adminblogs' },
        { label: 'Accept Blogs' },
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
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border">Blog ID</th>
                                        <th className="px-4 py-2 border">Blog Title</th>
                                        <th className="px-4 py-2 border">Description</th>
                                        <th className="px-4 py-2 border">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Replace this with dynamic rows from your data */}
                                    <tr>
                                        <td className="px-4 py-2 border">1</td>
                                        <td className="px-4 py-2 border">Sample Blog Title</td>
                                        <td className="px-4 py-2 border ">This is a sample description of the blog.</td>
                                        <td className="flex px-4 py-2 space-x-2 border">
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

export default AdminBlogAcceptPage
