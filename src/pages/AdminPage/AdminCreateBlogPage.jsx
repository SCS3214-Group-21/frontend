import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/ClientSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import CreateBlogForm from "../../components/CreateBlogForm.jsx";
import AdminHeader from "../../components/common/AdminHeader.jsx";
import AdminSidebar from "../../components/AdminSidebar.jsx";

function AdminCreateBlogPage() {
    const breadcrumbItems = [
        { label: 'Dashboard', href: '/admindashboard' },
        { label: 'Blogs', href: '/adminblogs' },
        { label: 'Create Blog' },
    ];
    return (
        <div>
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Create Your Blog</h1>
                    </div>
                    <div className="pb-5">
                        <CreateBlogForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateBlogPage