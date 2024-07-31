import React from "react";
import AdminHeader from "../components/common/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import AdminGraph1 from "../components/AdminGraph1";
import AdminGraph2 from "../components/AdminGraph2";

function AdminDashboardPage() {
    return (
        <div>
            <AdminHeader />

            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <AdminSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Dashboard</h1>
                    </div>

                    <div className="flex flex-wrap justify-between gap-5 pb-5">
                        <div className="flex flex-col items-center flex-1 p-5 bg-white rounded-lg shadow-lg">
                            <h2 className="text-5xl font-bold text-custom-secondary">150</h2>
                            <p className="mt-2 text-lg text-gray-700">Total Listings</p>
                        </div>
                        <div className="flex flex-col items-center flex-1 p-5 bg-white rounded-lg shadow-lg">
                            <h2 className="text-5xl font-bold text-custom-secondary">240,000</h2>
                            <p className="mt-2 text-lg text-gray-700">Total Income(LKR)</p>
                        </div>
                        <div className="flex flex-col items-center flex-1 p-5 bg-white rounded-lg shadow-lg">
                            <h2 className="text-5xl font-bold text-custom-secondary">250</h2>
                            <p className="mt-2 text-lg text-gray-700">Reviews</p>
                        </div>
                        <div className="flex flex-col items-center flex-1 p-5 bg-white rounded-lg shadow-lg">
                            <h2 className="text-5xl font-bold text-custom-secondary">1200</h2>
                            <p className="mt-2 text-lg text-gray-700">Our Happy Clients</p>
                        </div>

                    </div>

                    <div className="pb-5">
                        <AdminGraph1 />
                    </div>
                    <div className="pb-5">
                        <AdminGraph2 />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboardPage;
