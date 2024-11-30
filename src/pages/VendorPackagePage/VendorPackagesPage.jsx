import React,{ useEffect, useState } from "react";
import { fetchMyPackages } from "../../services/packageService.js";
import api from "../../api.jsx";

import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from "../../components/vendor/VendorSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AddCard from '../../components/common/AddCard.jsx';
import PackageCard from '../../components/common/PackageCard.jsx';
import Pagination from '../../components/common/Pagination.jsx'

// const items = [
//     { img: 'src/assets/Images/Images/hotel.png', text: 'Package 11', link: '/vendor/packages/viewpackage', },
//     { img: 'src/assets/Images/Images/hotel6.jpeg', text: 'Package 02', link: '/vendor/packages/viewpackage', },
//     { img: 'src/assets/Images/Images/hotel7.jpeg', text: 'Package 03', link: '/vendor/packages/viewpackage', },
//     { img: 'src/assets/Images/Images/03.png', text: 'Package 04', link: '/vendor/packages/viewpackage', },
//     { img: 'src/assets/Images/Images/01.png', text: 'Package 05', link: '/vendor/packages/viewpackage', },
//     { img: 'src/assets/Images/Images/hotel6.jpeg', text: 'Package 06', link: '/vendor/packages/viewpackage', },
//     { img: 'src/assets/Images/Images/hotel7.jpeg', text: 'Package 07', link: '/vendor/packages/viewpackage', },
//     { img: 'src/assets/Images/Images/hotel8.jpeg', text: 'Package 08', link: '/vendor/packages/viewpackage', },
// ];

function VendorPackagesPage() {
    const [packages, setPackages] = useState([]);  // State to store packages
    const [loading, setLoading] = useState(true); // State to track loading
    const [error, setError] = useState(null); // State to track errors

    useEffect(() => {
        const fetchPackageData = async () => {
            try {
                const data = await fetchMyPackages();  // Call the service
                setPackages(data.packages || []);  // Use the correct key
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
    
        fetchPackageData();
    }, []);    
    const renderItems = (currentItems) => (
        // <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
            <div className="flex items-center justify-center p-2 bg-white h-60 w-52">
                <AddCard
                    text={"Create Package"}
                    link={"/vendor/packages/createpackage"}
                />
            </div>
            {currentItems.map((item, index) => (
                <div key={index} className="flex items-center justify-center p-2 bg-white h-60 w-52">
                    <PackageCard
                        img={item.img ? `${api.defaults.baseURL}/uploads/${item.img}` : 'src/assets/Images/Images/01.png'}
                        text={item.name}
                        button={"See more"}
                        link={`./viewpackage/${item.package_id}`}
                        showToggle2={false}
                        id={item.package_id}
                        initialIsEnabled={item.is_enable}
                    />
                </div>
            ))}
        </div>
        // </div>
    );

    if (loading) return <div>Loading...</div>;  // Display loading state
        if (error) return <div>Error: {error}</div>;  // Display error state

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendor/dashboard' },
        { label: 'Packages' }

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
                        <h1 className='text-4xl font-bold text-custom-primary'>Packages</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
                            <Pagination items={packages} itemsPerPage={5} renderItems={renderItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorPackagesPage