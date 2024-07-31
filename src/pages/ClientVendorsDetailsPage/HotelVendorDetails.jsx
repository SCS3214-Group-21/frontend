import React from 'react';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/ClientSidebar';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ClientVendorDetails from '../../components/ClientVendorDetails';

function HotelVendorDetails() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/allvendors' },
        { label: 'Hotels', href: '/allhotels' },
        { label: 'Shangri-la' },
    ];

    const images = [
        'hotel3.jpg', 'hotel9.jpeg', 'hotel.png', 'floral.png',
        'floral.png', 'floral.png', 'floral.png', 'floral.png', 'floral.png'
    ];

    const packages = [
        { img: "../src/assets/images/Images/hotel6.jpeg", alt: "Package 01", name: "Package 01", price: "20000LKR", description: "maximum 150 guests", showStars: false, value: 'package1', additional: 'This is very unique package and this include all the things that you want at your wedding hall' },
        { img: "../src/assets/images/Images/hotel7.jpeg", alt: "Package 02", name: "Package 02", price: "25000LKR", description: "maximum 200 guests", showStars: false, value: 'package2' },
        { img: "../src/assets/images/Images/hotel8.jpeg", alt: "Package 03", name: "Package 03", price: "25000LKR", description: "maximum 200 guests", showStars: false, value: 'package3' },
        // Add more packages as needed
    ];

    const packageItems = {
        package1: [
            { label: 'Welcome Drinks', type: 'text', value: 'welcomeDrink' },
            { label: 'Complimentary Meal Tasting', type: 'text', value: 'mealTasting' },
            { label: 'Cocktail Bar', type: 'text', value: 'cocktailBar' },
            { label: 'Decorated Venue', type: 'text', value: 'decoratedVenue' },
            // More items
        ],
        package2: [
            { label: 'Decorated Venue', type: 'text', value: 'decoratedVenue' },
            { label: 'Complimentary Meal Tasting', type: 'text', value: 'mealTasting' },
            // More items
        ],
        package3: [
            { label: 'Decorated Venue', type: 'text', value: 'decoratedVenue' },
            { label: 'Transportation Services', type: 'text', value: 'transportation' },
            // More items
        ],

        // Add more package items as needed
    };

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
                    <div className="mt-4 ml-4 mr-4 ">
                        <ClientVendorDetails
                            MainImgPath="../src/assets/images/Images/hotel2.jpg"
                            Name="Shangri-la"
                            Type="Hotel"
                            StarCount="5"
                            LocationCity="Colombo, Hambantota"
                            Email="shangrila@gmail.com"
                            ServiceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem ea eum qui? Error ipsum ut voluptate quia mollitia exercitationem accusantium at, provident a animi, illum odio quas sapiente tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste enim voluptatem ipsam numquam, animi porro omnis ab, nemo exercitationem quod optio. Ad velit consequatur assumenda ratione minus molestiae numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, necessitatibus excepturi cumque ratione cum debitis quidem molestias, esse recusandae, quaerat veniam ea iste autem! Modi eum quis culpa tempora deleniti."
                            packages={packages}
                            packageItems={packageItems}
                            images={images}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelVendorDetails;
