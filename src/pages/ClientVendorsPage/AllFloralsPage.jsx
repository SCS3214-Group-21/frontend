import React from 'react';
import VendorCategory from '../../components/VendorCategory';
const AllHotelsPage = () => {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Floral' },
    ];

    const floralData = [
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Rose Garden",
            name: "Rose Garden",
            description: "Rose Garden offers exceptional service with their exquisite rose arrangements, creating a romantic atmosphere for weddings.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Lily Paradise",
            name: "Lily Paradise",
            description: "Lily Paradise provides outstanding service, with beautiful lily decorations that bring a touch of elegance to any wedding.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Orchid Haven",
            name: "Orchid Haven",
            description: "Orchid Haven is known for their excellent service and stunning orchid displays, perfect for a tropical wedding theme.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Jasmine Grove",
            name: "Jasmine Grove",
            description: "Jasmine Grove offers great service with fragrant jasmine flowers that add a delightful scent to the wedding ambiance.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Daisy Fields",
            name: "Daisy Fields",
            description: "Daisy Fields provides charming service, with endless fields of daisies creating a whimsical and joyful wedding setting.",
            starCount: 3
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Tulip Terrace",
            name: "Tulip Terrace",
            description: "Tulip Terrace offers top-notch service with a terrace overlooking a valley of tulips, making it a picturesque wedding venue.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Lavender Lawn",
            name: "Lavender Lawn",
            description: "Lavender Lawn provides soothing service, with lavender flowers covering the venue for a calming and serene wedding backdrop.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Sunflower Spot",
            name: "Sunflower Spot",
            description: "Sunflower Spot is known for their friendly service and vibrant sunflower arrangements, adding a bright and cheerful touch to weddings.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Peony Place",
            name: "Peony Place",
            description: "Peony Place offers excellent service with lush peony decorations, creating a luxurious and elegant wedding atmosphere.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Marigold Meadow",
            name: "Marigold Meadow",
            description: "Marigold Meadow provides wonderful service, with bright marigold flowers that bring a festive and vibrant feel to weddings.",
            starCount: 3
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Cherry Blossom Corner",
            name: "Cherry Blossom Corner",
            description: "Cherry Blossom Corner offers exceptional service with delicate cherry blossom arrangements, perfect for a spring wedding theme.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Gardenia Grove",
            name: "Gardenia Grove",
            description: "Gardenia Grove provides great service, with fragrant gardenia flowers adding a touch of elegance to the wedding decor.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Hydrangea Haven",
            name: "Hydrangea Haven",
            description: "Hydrangea Haven offers top-quality service with beautiful hydrangea arrangements, creating a stunning visual impact for weddings.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Violet Valley",
            name: "Violet Valley",
            description: "Violet Valley is known for their excellent service and lovely violet flower decorations, perfect for a charming wedding setting.",
            starCount: 3
        },
        {
            href: "#",
            img: "../src/assets/images/Images/floral.png",
            alt: "Camellia Court",
            name: "Camellia Court",
            description: "Camellia Court provides exceptional service with elegant camellia flower arrangements, adding a touch of sophistication to weddings.",
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
            title="Florals"
            breadcrumbItems={breadcrumbItems}
            vendorData={floralData}
            locationOptions={locationOptions}
            priceOptions={priceOptions}
            ratingOptions={ratingOptions}
        />
    );
};

export default AllHotelsPage;
