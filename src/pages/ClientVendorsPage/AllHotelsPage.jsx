import React, { useEffect, useState } from 'react';
import VendorCategory from '../../components/client/VendorCategory';
import ClientSidebar from '../../components/client/ClientSidebar';
import RegisterHeader from '../../components/common/RegisterHeader';
import Breadcrumb from '../../components/ui/Breadcrumb';
import { fetchHotelVendors } from '../../services/vendorprofileServices';

const AllHotelsPage = () => {
    const [hotelData, setHotelData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // To handle loading state

    const breadcrumbItems = [
        { label: 'My Wedding', href: '../mywedding' },
        { label: 'Vendors', href: '../vendors' },
        { label: 'Hotels' },
    ];

    const sortingButtons = [
        {
            iconPath: "M11.906 1.994a8.002...",
            title: "Location",
            items: [
                { label: 'Colombo', type: 'location', value: 'location1' },
                // Add more location options
            ],
        },
        {
            iconPath: "M8 17.345a4.76...",
            title: "Price",
            items: [
                { label: 'Low to High', type: 'price', value: 'lowToHigh' },
                { label: 'High to Low', type: 'price', value: 'highToLow' },
            ],
        },
        {
            iconPath: "M11.083 5.104c...",
            title: "Rating",
            items: [
                { label: '1 Star', type: 'rating', value: 1 },
                { label: '2 Stars', type: 'rating', value: 2 },
                // Add more rating options
            ],
        },
    ];

    // Fetch hotel data on component load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const vendors = await fetchHotelVendors();
                //console.log("This is vendor" ,vendors);
                const transformedData = vendors.map((vendor) => ({
                    href: `/client/vendors/hoteldetails/${vendor.id}`, 
                    img: `http://localhost:5000/uploads/vendor/pic/${vendor.Vendor.pic}`, 
                    alt: vendor.Vendor.business_name,
                    name: vendor.Vendor.business_name,
                    price: vendor.Vendor.contact_number, // Replace with price if available
                    description: vendor.Vendor.description,
                    starCount: 4, 
                }));
                setHotelData(transformedData);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false); // Stop loading once data is fetched
            }
        };

        fetchData();
    }, []);

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
                    {isLoading ? (
                        <p>Loading hotels...</p>
                    ) : (
                        <VendorCategory
                            title="Hotels"
                            vendorData={hotelData}
                            sortingButtons={sortingButtons}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllHotelsPage;
