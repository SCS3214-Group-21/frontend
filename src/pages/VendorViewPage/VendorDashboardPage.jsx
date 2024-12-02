import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from "../../components/vendor/VendorSidebar.jsx";
import VendorIncomeGraph from "../../components/vendor/VendorIncomeGraph.jsx";
import api from "../../api.jsx";

function VendorDashboardPage() {
    const [dashboardData, setDashboardData] = useState({
        blogsCount: 0,
        packagesCount: 0,
        popularPackages: [],
        popularBlogs: [],
    });

    const [loading, setLoadingReport] = useState(true);
    // const [error, setError] = useState(null);

    // Fetch data when the component mounts
    useEffect(() => {
        // Assuming you have a function to get the auth token (if required)
        const fetchDashboardData = async () => {
            try {
                // Make an API call to fetch dashboard data
                const response = await api.get("/vendor-dashboard/get", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,  // Add the token if necessary
                    },
                });

                // Set the state with the fetched data
                setDashboardData(response.data);
            } catch (error) {
                console.error("Error fetching vendor dashboard data:", error);
            }
        };

        fetchDashboardData();
    }, []);

    const handleGenerateReport = async () => {
        setLoadingReport(true);
        try {
            const response = await api.get("/vendor-dashboard/generate-report", {
                responseType: 'blob',  // Important for downloading files
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                withCredentials: true,  // Ensure credentials (cookies, etc.) are sent
            });
    
            // Create a link to download the report
            // window.location.href = response.data.filePath;
            // Handle the report download (assuming response is a PDF or similar)
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'VendorDashboardReport.pdf');  // Adjust file name if necessary
            document.body.appendChild(link);
            link.click();
            link.remove();  // Clean up the link element
        } catch (error) {
            console.error("Error generating report:", error);
        } finally {
            setLoadingReport(false);
        }
    };
    

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <h1 className="text-4xl font-bold text-custom-primary">Income</h1>
                    </div>
                    <div className="pb-5">
                        <VendorIncomeGraph />
                    </div>

                    <div className="pb-5 w-full flex flex-row items-center justify-center gap-2">
                        <div className="w-1/3 bg-white rounded-lg flex flex-col gap-2 justify-center items-center h-32 shadow-lg px-2 hover:bg-custom-primary hover:bg-opacity-50">
                            <h1 className="text-black text-xl text-center">Total Number of Blogs</h1>
                            <h1 className="text-black text-3xl font-bold text-center">{dashboardData.blogs}</h1>
                        </div>
                        <div className="w-1/3 bg-white rounded-lg flex flex-col gap-2 justify-center items-center h-32 shadow-lg px-2 hover:bg-custom-primary hover:bg-opacity-50">
                            <h1 className="text-black text-xl text-center">Total Number of Packages</h1>
                            <h1 className="text-black text-3xl font-bold text-center">{dashboardData.packages}</h1>
                        </div>
                        <div className="w-1/3 bg-white rounded-lg flex flex-col gap-2 justify-center items-center h-32 shadow-lg px-2 hover:bg-custom-primary hover:bg-opacity-50">
                            <h1 className="text-black text-xl text-center">Total Number of Success Bookings</h1>
                            <h1 className="text-black text-3xl font-bold text-center">{dashboardData.booking}</h1>
                        </div>
                    </div>

                    <div className="pb-5 flex flex-row gap-2 w-full items-center justify-center">
                        <div className="flex flex-col gap-2 w-1/2 bg-white rounded-lg p-2">
                            <h1 className="text-center text-black text-xl mb-2">Most Popular Blogs</h1>
                            {dashboardData.popularBlogs.map((blog, index) => (
                                <h1
                                    key={blog.blog_id}
                                    className={`bg-${index === 0 ? "custom-primary" : "custom-gray"} rounded-full p-2 text-black font-${index === 0 ? "semibold" : "medium"}`}
                                >
                                    {blog.title}
                                </h1>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 w-1/2 bg-white rounded-lg p-2">
                            <h1 className="text-center text-black text-xl mb-2">Most Popular Packages</h1>
                            {dashboardData.popularPackages.map((pkg) => (
                                <h1
                                    key={pkg.packageId}
                                    className={`bg-${pkg.bookingCount === Math.max(...dashboardData.popularPackages.map(p => p.bookingCount)) ? "custom-primary" : "custom-gray"} rounded-full p-2 text-black font-medium`}
                                >
                                    {pkg.packageName} - {pkg.bookingCount} bookings
                                </h1>
                            ))}
                        </div>
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

export default VendorDashboardPage;
