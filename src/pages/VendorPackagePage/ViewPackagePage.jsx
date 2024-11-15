import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchPackageById, deletePackage } from "../../services/packageService.js";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from "../../components/vendor/VendorSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import Swal from 'sweetalert2';
import api from "../../api";

function ViewPackagePage() {
    const { id } = useParams();
    const [packages, setPackages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const packageData = await fetchPackageById(id); // Adjusted for API response
                setPackages(packageData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPackage();
    }, [id]);

    const breadcrumbItems = packages
        ? [
            { label: 'Dashboard', href: '/vendor/dashboard' },
            { label: 'Packages', href: '/vendor/packages' },
            { label: packages.packageItem.name },
        ]
        : [];

    if (loading) return <div>Loading...</div>; // Display loading state
    if (error) return <div>Error: {error}</div>; // Display error state

    if (!packages) return <div>No packages found</div>; // Display if no packages found

    console.log(packages)

    const handleDeleteClick = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });
    
        if (result.isConfirmed) {
            try {
                await deletePackage(id); // Call deletePackage API
                Swal.fire('Deleted!', 'Your package has been deleted.', 'success');
                navigate('/vendor/packages'); // Redirect to package list
            } catch (error) {
                Swal.fire('Error!', error.message, 'error'); // Show error message
            }
        } else {
            Swal.fire('Cancelled', 'Your package is safe.', 'info'); // Cancel feedback
        }
    };

    const handleUpdate = () => {
        navigate(`/vendor/packages/updatepackages/${id}`);
    };

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-2 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>
                            {packages.packageItem.name || "Unnamed Package"}
                        </h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5 flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start gap-2 lg:gap-5'>
                            <h1 className='text-2xl text-black'>
                                {packages.packageItem.name || "Unnamed Package"}
                            </h1>
                            <div className="flex flex-col">
                                <h1 className="text-sm text-black">
                                    {/* <span className="italic">Category</span>: {packages.category || "Unknown"} &emsp;|&emsp; */}
                                    <span className="italic">Amount</span>: {packages.packageItem.amount ? `Rs. ${packages.packageItem.amount.toLocaleString()}` : "N/A"} &emsp;|&emsp;
                                    {/* <span className="italic">Date</span>: {packages.date ? new Date(packages.date).toLocaleDateString() : "N/A"} */}
                                </h1>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Link to={`/vendor/packages/updatepackage/${id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black size-6">
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                    </svg>
                                </Link>
                                <button onClick={handleDeleteClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-red-700 size-6">
                                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col items-start gap-5'>
                            {/* <h1 className="text-xl text-black">Category: <span className="text-sm italic">{packages.category || "N/A"}</span></h1> */}
                            <h1 className="text-xl text-black">Price: <span className="text-sm italic">{packages.packageItem.amount ? `Rs. ${packages.packageItem.amount.toLocaleString()}` : "N/A"}</span></h1>
                            <h1 className="text-xl text-black">Description: <br /><span className="text-sm italic block text-justify">{packages.packageItem.description || "N/A"}</span></h1>
                            <h1 className="text-xl text-black">Items: <br /><span className="text-sm italic">{packages.packageItem.items || "N/A"}</span></h1>
                            <div className='p-1'>
                                <a href={`${api.defaults.baseURL}/uploads/${packages.packageItem.img}`} target="_blank" rel="noopener noreferrer">
                                    <img src={`${api.defaults.baseURL}/uploads/${packages.packageItem.img}`} className='rounded-lg'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewPackagePage;
