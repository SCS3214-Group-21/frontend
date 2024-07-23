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
        { label: 'Shangrila' },
    ];

    const images = [
        'floral.png', 'cars.png', 'hotel.png', 'floral.png',
        'floral.png', 'floral.png', 'floral.png', 'floral.png', 'floral.png'
    ];

    const packages = [
        { img: "../src/assets/images/Images/03.png", alt: "Package 01", name: "Package 01", price: "Price per person 20000LKR", description: "maximum 150 guests", showStars: false, value: 'package1', additional: 'This is package more details in paragraph.I want to show how this works and this is give more better idea about the package' },
        { img: "../src/assets/images/Images/03.png", alt: "Package 02", name: "Package 02", price: "Price per person 25000LKR", description: "maximum 200 guests", showStars: false, value: 'package2' },
        // Add more packages as needed
    ];

    const packageItems = {
        package1: [
            { label: 'Welcome Drinks', type: 'text', value: 'welcomeDrink' },
            { label: 'Complimentary Meal Tasting', type: 'text', value: 'mealTasting' },
            // More items
        ],
        package2: [
            { label: 'Decorated Venue', type: 'text', value: 'decoratedVenue' },
            { label: 'Transportation Services', type: 'text', value: 'transportation' },
            // More items
        ],
        // Add more package items as needed
    };

    return (
        <>
            <RegisterHeader />
            <div className="flex flex-col md:flex-row">
                <ClientSidebar />
                <div className="flex-1 bg-[#FFF8F5] min-h-screen">
                    <div className="mt-4 ml-4 md:ml-24 lg:ml-80">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="mt-4 ml-4 mr-4 md:ml-20 md:mr-20 lg:ml-80 lg:mr-80">
                        <ClientVendorDetails
                            MainImgPath="../src/assets/images/Images/03.png"
                            Name="Shangri-la"
                            StarCount="4"
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
