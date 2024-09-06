import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader";
import VendorSidebar from "../../components/VendorSidebar";
import Breadcrumb from '../../components/ui/Breadcrumb';
import CreateBlogForm from "../../components/CreateBlogForm";
import ClientSidebar from "../../components/ClientSidebar";
import ClientCreateBlogForm from "../../components/ClientCreateBlogForm";

function ClientCreateBlogPage() {
    const breadcrumbItems = [
        { label: 'Dashboard', href: '/mywedding' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Create Blog' },
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Create Your Blog</h1>
                    </div>
                    <div className="pb-5">
                        {/* <CreateBlogForm /> */}
                        <ClientCreateBlogForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientCreateBlogPage