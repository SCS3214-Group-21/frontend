import React from "react";
import RegisterHeader from "../components/common/RegisterHeader";
import ClientSidebar from "../components/ClientSidebar";
import Breadcrumb from '../components/ui/Breadcrumb';
import CreateBlogForm from "../components/CreateBlogForm";

function CreateBlogPage(){
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Hotels' },
    ];
    return(
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
                        <h1 className='text-custom-primary font-bold text-4xl'>Create Your Blog</h1>
                    </div>
                    <div className="pb-5">
                        <CreateBlogForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlogPage