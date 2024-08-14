import React, { useState } from 'react';
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/ClientSidebar.jsx";
import LandingFooter from "../../components/common/LandingFooter.jsx";
import ServiceDescriptionCard from "../../components/common/ServiceDescriptionCard.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import SortingButton from '../../components/ui/SortingButton.jsx';
import Pagination from '../../components/common/Pagination.jsx';

function ClientVendorCategory() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '#' },
        { label: 'Vendors', href: '/documents' },
        { label: 'Hotels' }, // No href for the current page
    ];

    const hotelData = [
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Shangrila",
            name: "Shangrila",
            price: "50,000 LKR",
            description: "Well known hotel located in Colombo with highly recommended facilities.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Cinnamon Grand",
            name: "Cinnamon Grand",
            price: "45,000 LKR",
            description: "Luxurious hotel in Colombo with world-class amenities.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "The Kingsbury",
            name: "The Kingsbury",
            price: "40,000 LKR",
            description: "Elegant hotel offering stunning ocean views.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Galle Face Hotel",
            name: "Galle Face Hotel",
            price: "35,000 LKR",
            description: "Historic hotel with a blend of modern luxury.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Taj Samudra",
            name: "Taj Samudra",
            price: "38,000 LKR",
            description: "Elegant hotel with magnificent views of the Indian Ocean.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Hilton Colombo",
            name: "Hilton Colombo",
            price: "42,000 LKR",
            description: "A prominent hotel offering luxury accommodation in Colombo.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Cinnamon Lakeside",
            name: "Cinnamon Lakeside",
            price: "40,000 LKR",
            description: "Stylish hotel with serene lake views and modern facilities.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Jetwing Colombo Seven",
            name: "Jetwing Colombo Seven",
            price: "37,000 LKR",
            description: "Contemporary hotel located in the heart of Colombo.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Marino Beach",
            name: "Marino Beach",
            price: "32,000 LKR",
            description: "Beachfront hotel offering comfort and luxury.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Movenpick Hotel Colombo",
            name: "Movenpick Hotel Colombo",
            price: "41,000 LKR",
            description: "Sophisticated hotel with panoramic city views.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "OZO Colombo",
            name: "OZO Colombo",
            price: "30,000 LKR",
            description: "Chic hotel known for its rooftop pool and ocean views.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Mandarina Colombo",
            name: "Mandarina Colombo",
            price: "29,000 LKR",
            description: "Modern hotel offering a blend of comfort and luxury.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Marino Beach Hotel",
            name: "Marino Beach Hotel",
            price: "35,000 LKR",
            description: "Stylish beachfront hotel with top-notch amenities.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Galadari Hotel",
            name: "Galadari Hotel",
            price: "28,000 LKR",
            description: "Renowned hotel in Colombo known for its luxurious rooms.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Renuka City Hotel",
            name: "Renuka City Hotel",
            price: "25,000 LKR",
            description: "Comfortable hotel in the city with excellent service.",
            starCount: 3
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Hotel Janaki",
            name: "Hotel Janaki",
            price: "20,000 LKR",
            description: "Affordable hotel with convenient city access.",
            starCount: 3
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Pegasus Reef Hotel",
            name: "Pegasus Reef Hotel",
            price: "22,000 LKR",
            description: "Charming hotel offering beach access and modern facilities.",
            starCount: 3
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "The Steuart by Citrus",
            name: "The Steuart by Citrus",
            price: "27,000 LKR",
            description: "Elegant hotel with a colonial touch in Colombo.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Fairway Colombo",
            name: "Fairway Colombo",
            price: "26,000 LKR",
            description: "Modern hotel known for its vibrant and stylish decor.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Earl's Regent Hotel",
            name: "Earl's Regent Hotel",
            price: "23,000 LKR",
            description: "Beautiful hotel located in Kandy offering scenic views.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "Grand Navro Hotel",
            name: "Grand Navro Hotel",
            price: "21,000 LKR",
            description: "Beautiful hotel located in Matara offering scenic views.",
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

    const renderHotelCards = (hotels) => {
        return (
            <div className='grid grid-cols-1 gap-6 p-2 ml-16 md:grid-cols-2 lg:grid-cols-4 md:p-8 md:ml-20 lg:ml-72'>
                {hotels.map((hotel, index) => (
                    <ServiceDescriptionCard
                        key={index}
                        href={hotel.href}
                        img={hotel.img}
                        alt={hotel.alt}
                        name={hotel.name}
                        price={hotel.price}
                        description={hotel.description}
                        starCount={hotel.starCount}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <RegisterHeader />
            <ClientSidebar />
            <div className="flex flex-col bg-[#FFF8F5]">
                <div className="flex flex-col mt-4 ml-4 md:flex-row md:items-center md:ml-20 lg:ml-80">
                    <h1 className='text-3xl font-bold text-[#A57E17]'>Hotels</h1>
                    <div className='mt-1 ml-4 md:mt-0 md:ml-14'>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className='flex mt-2 ml-4 md:mt-0 md:ml-20 lg:ml-60'>
                        <SortingButton iconPath="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" title="Location" items={locationOptions} /*onSort={sortData}*/ />
                        <SortingButton iconPath="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" title="Price" items={priceOptions} /*onSort={sortData} */ />
                        <SortingButton iconPath="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" title="Rating" items={ratingOptions} /*onSort={sortData}*/ />
                    </div>
                </div>

                <Pagination
                    items={hotelData}
                    itemsPerPage={12}
                    renderItems={renderHotelCards}
                />

            </div>
            {/* <LandingFooter />*/}
        </>
    );
}

export default ClientVendorCategory;
