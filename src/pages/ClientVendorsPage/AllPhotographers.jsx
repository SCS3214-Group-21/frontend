import React from 'react';
import VendorCategory from '../../components/VendorCategory';

const AllPhotographers = () => {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Photographers' },
    ];

    const photographyData = [
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "DarkRoom",
            name: "Dark Room",
            price: "27,000 LKR",
            description: "Best quality photos and videography for your big day.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/03.png",
            alt: "MRC",
            name: "MRC photos",
            price: "27,000 LKR",
            description: "Best quality photos and videography for your big day.",
            starCount: 4
        },


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
            title="Photography"
            breadcrumbItems={breadcrumbItems}
            vendorData={photographyData}
            locationOptions={locationOptions}
            priceOptions={priceOptions}
            ratingOptions={ratingOptions}
        />
    );
};

export default AllPhotographers;
