import React from 'react';
import VendorCategory from '../../components/VendorCategory';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/ClientSidebar';
import Breadcrumb from '../../components/ui/Breadcrumb';
import VendorCategoryFloral from '../../components/VendorCategoryFloral';
const AllDressersPage = () => {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Vendors', href: '/allvendors' },
        { label: 'Dressing' },
    ];

    const dresserData = [
        {
            href: "/viewdressing",
            img: "../src/assets/Images/Images/dressing1.jpg",
            alt: "Nilanthi Bridal Designs",
            name: "Nilanthi Bridal Designs",
            description: "Nilanthi Bridal Designs provides bespoke tailoring and elegant dress designs, ensuring a perfect fit for any occasion.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/Images/Images/dressing7.jpg",
            alt: "Elegance Dress Studio",
            name: "Elegance Dress Studio",
            description: "Elegance Dress Studio offers custom-made dresses with a focus on timeless style and high-quality fabrics.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/Images/Images/dressing3.jpg",
            alt: "Classic Tailors",
            name: "Classic Tailors",
            description: "Classic Tailors specializes in traditional and contemporary dress designs, providing professional tailoring services.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/Images/Images/dressing4.jpg",
            alt: "Glamour Dress Makers",
            name: "Glamour Dress Makers",
            description: "Glamour Dress Makers offers stunning dress designs and tailoring services for weddings, parties, and formal events.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/Images/Images/dressing8.jpg",
            alt: "Sophisticated Styles",
            name: "Sophisticated Styles",
            description: "Sophisticated Styles provides a wide range of dress options, from classic to modern, tailored to your personal taste.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/Images/Images/dressing6.jpg",
            alt: "Chic Couture",
            name: "Chic Couture",
            description: "Chic Couture is known for its innovative dress designs and exceptional craftsmanship, perfect for any special occasion.",
            starCount: 4
        }
    ];




    const locationOptions = [
        { label: 'Colombo', type: 'location', value: 'location1' },
        { label: 'Kandy', type: 'location', value: 'location2' },
        { label: 'Galle', type: 'location', value: 'location2' },
        { label: 'Matara', type: 'location', value: 'location2' },
        { label: 'Kaluthara', type: 'location', value: 'location2' },
        { label: 'Gampaha', type: 'location', value: 'location2' },
        { label: 'Jaffna', type: 'location', value: 'location2' },
        { label: 'Trinco', type: 'location', value: 'location2' },
        { label: 'Hambantota', type: 'location', value: 'location2' },
    ];

    const priceOptions = [
        { label: 'Low to High', type: 'price', value: 'lowToHigh' },
        { label: 'High to Low', type: 'price', value: 'highToLow' },
        // Add more price options
    ];

    const ratingOptions = [
        { label: '1 Star', type: 'rating', value: 1 },
        { label: '2 Stars', type: 'rating', value: 2 },
        { label: '3 Stars', type: 'rating', value: 3 },
        { label: '4 Stars', type: 'rating', value: 4 },
        { label: '5 Stars', type: 'rating', value: 5 },
        // Add more rating options
    ];

    // const typeOptions = [
    //     { label: 'Necklase', type: 'type', value: 1 },
    //     { label: 'Earings', type: 'type', value: 2 },
    //     { label: 'Ring', type: 'type', value: 3 },
    //     { label: 'Bracelate', type: 'type', value: 4 },

    //     // Add more rating options
    // ];

    const sortingButtons = [
        // { iconPath: "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z", title: "Type", items: typeOptions },
        { iconPath: "M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z", title: "Location", items: locationOptions },
        { iconPath: "M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2", title: "Price", items: priceOptions },
        { iconPath: "M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z", title: "Rating", items: ratingOptions },

        // Add or remove sorting buttons as needed
    ];

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
                    <VendorCategoryFloral
                        title="Dressing"

                        vendorData={dresserData}
                        sortingButtons={sortingButtons}
                    />
                </div>
            </div>
        </>
    );
};

export default AllDressersPage;
