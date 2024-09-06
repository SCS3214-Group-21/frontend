import React from 'react';
import VendorCategory from '../../components_depr/VendorCategory';
import RegisterHeader from '../../components_depr/common/RegisterHeader';
import ClientSidebar from '../../components_depr/ClientSidebar';
import Breadcrumb from '../../components_depr/ui/Breadcrumb';
import VendorCategoryFloral from '../../components_depr/VendorCategoryFloral';
const AllJewelleryPage = () => {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Vendors', href: '/allvendors' },
        { label: 'Jewellery' },
    ];

    const jewelleryData = [
        {
            href: "/viewjewellery",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Vogue Jewellers",
            name: "Vogue Jewellers",
            description: "Vogue Jewellers offers exquisite gold jewelry with intricate designs, perfect for weddings and special occasions.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Diamond Delight",
            name: "Diamond Delight",
            description: "Diamond Delight is known for their exceptional service and stunning diamond jewelry, creating a sparkling addition to any outfit.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Silver Shine",
            name: "Silver Shine",
            description: "Silver Shine offers beautiful silver jewelry, perfect for those looking for elegant and timeless pieces.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Pearl Paradise",
            name: "Pearl Paradise",
            description: "Pearl Paradise provides exquisite pearl jewelry that adds a touch of sophistication and grace to any look.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Ruby Royale",
            name: "Ruby Royale",
            description: "Ruby Royale specializes in stunning ruby jewelry, perfect for those looking to make a bold and luxurious statement.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Emerald Elegance",
            name: "Emerald Elegance",
            description: "Emerald Elegance offers beautiful emerald jewelry, adding a vibrant and elegant touch to any occasion.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Sapphire Splendor",
            name: "Sapphire Splendor",
            description: "Sapphire Splendor is known for their exquisite sapphire jewelry, perfect for adding a regal touch to any ensemble.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Opal Oasis",
            name: "Opal Oasis",
            description: "Opal Oasis provides stunning opal jewelry, offering a unique and mesmerizing addition to any jewelry collection.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Turquoise Treasures",
            name: "Turquoise Treasures",
            description: "Turquoise Treasures offers beautiful turquoise jewelry, perfect for adding a pop of color and style to any outfit.",
            starCount: 3
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Jade Jewelers",
            name: "Jade Jewelers",
            description: "Jade Jewelers specializes in exquisite jade jewelry, offering pieces that are both elegant and culturally significant.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Topaz Touch",
            name: "Topaz Touch",
            description: "Topaz Touch offers stunning topaz jewelry, perfect for those looking for a unique and beautiful addition to their collection.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Amethyst Allure",
            name: "Amethyst Allure",
            description: "Amethyst Allure provides beautiful amethyst jewelry, known for its calming properties and stunning purple hue.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Garnet Glamour",
            name: "Garnet Glamour",
            description: "Garnet Glamour specializes in exquisite garnet jewelry, perfect for adding a touch of bold color to any look.",
            starCount: 5
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Aquamarine Artistry",
            name: "Aquamarine Artistry",
            description: "Aquamarine Artistry offers stunning aquamarine jewelry, perfect for those who love the serene and calming blue tones.",
            starCount: 4
        },
        {
            href: "#",
            img: "../src/assets/images/Images/jewellery.jpeg",
            alt: "Citrine Creations",
            name: "Citrine Creations",
            description: "Citrine Creations offers beautiful citrine jewelry, known for its vibrant yellow color and positive energy.",
            starCount: 3
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

    const typeOptions = [
        { label: 'Necklase', type: 'type', value: 1 },
        { label: 'Earings', type: 'type', value: 2 },
        { label: 'Ring', type: 'type', value: 3 },
        { label: 'Bracelate', type: 'type', value: 4 },

        // Add more rating options
    ];

    const sortingButtons = [
        { iconPath: "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z", title: "Type", items: typeOptions },
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
                        title="Jewellery"

                        vendorData={jewelleryData}
                        sortingButtons={sortingButtons}
                    />
                </div>
            </div>
        </>
    );
};

export default AllJewelleryPage;
