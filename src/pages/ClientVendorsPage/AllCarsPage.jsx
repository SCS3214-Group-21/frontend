import React from 'react';
import VendorCategory from '../../components/VendorCategory';
const AllCarsPage = () => {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Cars' },
    ];

    const carsData = [
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Elegance Rentals",
            name: "Elegance Rentals",
            description: "Elegance Rentals offers top-notch service with a fleet of luxurious cars, ensuring a grand entrance on your special day.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Royal Rides",
            name: "Royal Rides",
            description: "Royal Rides provides exceptional service with classic and vintage cars, perfect for a timeless wedding experience.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Luxury Wheels",
            name: "Luxury Wheels",
            description: "Luxury Wheels ensures a premium experience with their elegant and modern cars, adding a touch of sophistication to your wedding.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Charming Chauffeurs",
            name: "Charming Chauffeurs",
            description: "Charming Chauffeurs offers professional service with well-maintained cars and experienced drivers for a smooth and stylish ride.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Grand Arrival",
            name: "Grand Arrival",
            description: "Grand Arrival provides excellent service with a selection of high-end cars, ensuring you arrive at your wedding in grand style.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Elite Carriages",
            name: "Elite Carriages",
            description: "Elite Carriages offers first-class service with a variety of luxury cars, making your wedding day transportation elegant and stress-free.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Premier Wheels",
            name: "Premier Wheels",
            description: "Premier Wheels provides reliable service with a fleet of modern cars, ensuring timely and comfortable transportation on your big day.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Majestic Motors",
            name: "Majestic Motors",
            description: "Majestic Motors offers top-tier service with luxurious vehicles and courteous drivers, making your wedding ride truly majestic.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Classic Cruisers",
            name: "Classic Cruisers",
            description: "Classic Cruisers provides wonderful service with beautifully restored vintage cars, perfect for a nostalgic wedding theme.",
            starCount: 3
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Star Car Rentals",
            name: "Star Car Rentals",
            description: "Star Car Rentals offers impeccable service with a range of luxury cars, ensuring a star-studded arrival at your wedding venue.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Regal Rides",
            name: "Regal Rides",
            description: "Regal Rides provides royal treatment with their premium car selection and exceptional customer service, making your day unforgettable.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Dream Drive",
            name: "Dream Drive",
            description: "Dream Drive offers outstanding service with a collection of luxury and exotic cars, turning your wedding transport into a dream come true.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Glamour Cars",
            name: "Glamour Cars",
            description: "Glamour Cars provides top-quality service with stylish and glamorous cars, ensuring you make a dazzling entrance on your special day.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Perfect Rides",
            name: "Perfect Rides",
            description: "Perfect Rides offers excellent service with a range of beautiful cars, making your wedding transportation perfect in every way.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/cars.png",
            alt: "Prestige Cars",
            name: "Prestige Cars",
            description: "Prestige Cars provides outstanding service with their high-end vehicles, adding an air of prestige to your wedding day.",
            starCount: 5
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
            title="Wedding Cars"
            breadcrumbItems={breadcrumbItems}
            vendorData={carsData}
            locationOptions={locationOptions}
            priceOptions={priceOptions}
            ratingOptions={ratingOptions}
        />
    );
};

export default AllCarsPage;
