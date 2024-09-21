import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import UpdateBlogForm from "../../components/blog/UpdateBlogForm.jsx";
import VendorSidebar from "../../components/vendor/VendorSidebar.jsx";

function UpdateBlogPage() {
    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendor/dashboard' },
        { label: 'Blogs', href: '/vendor/blog' },
        { label: 'Update Blog' },
    ];
    return (
        <div>
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Edit Your Blog</h1>
                    </div>
                    <div className="pb-5">
                        <UpdateBlogForm />
                        {/* <ClientUpdateBlogForm /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateBlogPage