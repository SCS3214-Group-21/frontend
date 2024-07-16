import React from 'react';
import VendorCategory from '../../components/VendorCategory';
const AllHotelsPage = () => {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Hotels' },
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

    return (
        <VendorCategory
            title="Hotels"
            breadcrumbItems={breadcrumbItems}
            vendorData={hotelData}
            locationOptions={locationOptions}
            priceOptions={priceOptions}
            ratingOptions={ratingOptions}
        />
    );
};

export default AllHotelsPage;
