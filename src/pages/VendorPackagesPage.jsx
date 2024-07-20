import React from "react";
import RegisterHeader from "../components/common/RegisterHeader";
import VendorSidebar from "../components/VendorSidebar";
import Breadcrumb from '../components/ui/Breadcrumb';
import AddCard from '../components/common/AddCard';
import PackageCard from '../components/common/PackageCard';

function VendorPackagesPage(){
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
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-custom-primary font-bold text-4xl'>Packages</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
                            <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
                                <AddCard 
                                    text={"Create Package"}
                                    link={"/createpackage"}
                                />
                            </div>
                            <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
                                <PackageCard 
                                    img={"../src/assets/images/Images/00.png"}
                                    text={"Package 01"}
                                    button={"See more"}
                                />
                            </div>
                            <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
                                <PackageCard 
                                    img={"../src/assets/images/Images/00.png"}
                                    text={"Package 01"}
                                    button={"See more"}
                                />
                            </div>
                            <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
                                <PackageCard 
                                    img={"../src/assets/images/Images/00.png"}
                                    text={"Package 01"}
                                    button={"See more"}
                                />
                            </div>
                            <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
                                <PackageCard 
                                    img={"../src/assets/images/Images/00.png"}
                                    text={"Package 01"}
                                    button={"See more"}
                                />
                            </div>
                            <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
                                <PackageCard 
                                    img={"../src/assets/images/Images/00.png"}
                                    text={"Package 01"}
                                    button={"See more"}
                                />
                            </div>
                            <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
                                <PackageCard 
                                    img={"../src/assets/images/Images/00.png"}
                                    text={"Package 01"}
                                    button={"See more"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorPackagesPage