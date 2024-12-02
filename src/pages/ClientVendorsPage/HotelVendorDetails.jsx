import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/client/ClientSidebar';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ClientVendorDetails from '../../components/client/ClientVendorDetails';
import { fetchVendorDetailsById } from '../../services/packageService';

function HotelVendorDetails() {
    const { id } = useParams(); // Get vendor ID from URL
    const [vendorDetails, setVendorDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const breadcrumbItems = [
        { label: 'My Wedding', href: '../../mywedding' },
        { label: 'Vendors', href: '../../vendors' },
        { label: 'Hotels', href: '../hotels' },
        { label: vendorDetails?.Vendor.business_name || 'Loading...' },
    ];

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const details = await fetchVendorDetailsById(id);
                setVendorDetails(details);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (isLoading) {
        return <p>Loading vendor details...</p>;
    }

    if (!vendorDetails) {
        return <p>Vendor details not found.</p>;
    }

    const packages = vendorDetails.Packages.map((pkg) => ({
        img: `http://localhost:5000/uploads/${pkg.img}`,
        alt: pkg.name,
        name: pkg.name,
        price: `${pkg.amount} LKR`,
        description: pkg.description,
        items: pkg.items, // This should be displayed as needed
        id: pkg.package_id,
    }));

    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="mt-4 ml-4 mr-4">
                        <ClientVendorDetails
                            MainImgPath={`http://localhost:5000/uploads/vendor/pic/${vendorDetails.Vendor.pic}`}
                            Name={vendorDetails.Vendor.business_name}
                            Type={vendorDetails.role}
                            StarCount="4"
                            LocationCity={vendorDetails.Vendor.city}
                            Email={vendorDetails.email}
                            ServiceDescription={vendorDetails.Vendor.description}
                            packages={packages}
                            images={JSON.parse(vendorDetails.Vendor.images)} // Parse images if stored as JSON
                            vendorId ={vendorDetails.id}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelVendorDetails;

