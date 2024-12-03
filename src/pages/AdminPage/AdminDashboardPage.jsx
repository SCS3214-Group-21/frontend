import React, { useState, useEffect } from "react";
import AdminHeader from "../../components/common/AdminHeader.jsx";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import AdminGraph1 from "../../components/admin/AdminGraph1.jsx";
import AdminGraph2 from "../../components/admin/AdminGraph2.jsx";
import { getAdminDashboard, generateReport } from "../../services/admindashboardServices.js"; // Adjust the import path to your actual file

function AdminDashboardPage() {
    const [dashboardStats, setDashboardStats] = useState({
        totalUsers: 0,
        totalIncome: 0,
        totalPackages: 0,
        totalBlogs: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleGenerateReport = async () => {
        try {
            await generateReport();
            alert('Report downloaded successfully!');
        } catch (error) {
            alert('Failed to generate report. Please try again.');
        }
    };

    useEffect(() => {
        const fetchDashboardStats = async () => {
            try {
                const data = await getAdminDashboard();
                setDashboardStats({
                    totalUsers: data?.data.totalUsers || 0,
                    totalIncome: data?.data.totalIncome || 0, // Update if you include income in your API
                    totalPackages: data?.data.totalPackages || 0,
                    totalBlogs: data?.data.totalBlogs || 0,
                });
                setLoading(false);
            } catch (err) {
                console.error(err.message);
                setError("Failed to load dashboard data");
                setLoading(false);
            }
        };

        fetchDashboardStats();
    }, []);

    if (loading) {
        return (
            <div>
                <AdminHeader />
                <div className="flex items-center justify-center h-screen">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <AdminHeader />
                <div className="flex items-center justify-center h-screen">
                    <p className="text-red-500">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <AdminHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <AdminSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <h1 className="text-4xl font-bold text-custom-primary">Dashboard</h1>
                    </div>

                    <div className="flex flex-wrap justify-between gap-5 pb-5">
                        <div className="flex flex-col items-center flex-1 p-5 bg-white rounded-lg shadow-lg">
                            <h2 className="text-5xl font-bold text-custom-secondary">
                                {dashboardStats.totalUsers}
                            </h2>
                            <p className="mt-2 text-lg text-gray-700">Total Users</p>
                        </div>
                        <div className="flex flex-col items-center flex-1 p-5 bg-white rounded-lg shadow-lg">
                            <h2 className="text-5xl font-bold text-custom-secondary">
                                {dashboardStats.totalIncome.toLocaleString()} LKR
                            </h2>
                            <p className="mt-2 text-lg text-gray-700">Total Income (LKR)</p>
                        </div>
                        <div className="flex flex-col items-center flex-1 p-5 bg-white rounded-lg shadow-lg">
                            <h2 className="text-5xl font-bold text-custom-secondary">
                                {dashboardStats.totalPackages}
                            </h2>
                            <p className="mt-2 text-lg text-gray-700">Total Packages</p>
                        </div>
                        <div className="flex flex-col items-center flex-1 p-5 bg-white rounded-lg shadow-lg">
                            <h2 className="text-5xl font-bold text-custom-secondary">
                                {dashboardStats.totalBlogs}
                            </h2>
                            <p className="mt-2 text-lg text-gray-700">Total Blogs</p>
                        </div>
                    </div>

                    <div className="pb-5">
                        <AdminGraph1 />
                    </div>
                    <div className="pb-5">
                        <AdminGraph2 />
                    </div>
                    <div className="pb-5 flex flex-row w-full items-center justify-end">
                        <button
                            className="bg-custom-primary rounded-full py-2 px-4 text-white border-none cursor-pointer"
                            onClick={handleGenerateReport}
                        >
                            Download Admin Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboardPage;
