import React from 'react';
import VendorCategory from '../../components/VendorCategory';
import ClientSidebar from '../../components/ClientSidebar';
import RegisterHeader from '../../components/common/RegisterHeader';

const AllPhotographers = () => {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/allvendors' },
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

    const sortingButtons = [

        { iconPath: "M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z", title: "Location", items: locationOptions },
        { iconPath: "M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2", title: "Price", items: priceOptions },
        { iconPath: "M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z", title: "Rating", items: ratingOptions },

        // Add or remove sorting buttons as needed
    ];

    return (
        <><RegisterHeader />
            <ClientSidebar />
            <VendorCategory
                title="Photography"
                breadcrumbItems={breadcrumbItems}
                vendorData={photographyData}
                sortingButtons={sortingButtons}
            />
        </>
    );
};

export default AllPhotographers;
