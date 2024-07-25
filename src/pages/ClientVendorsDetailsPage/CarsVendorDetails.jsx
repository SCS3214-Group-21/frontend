import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/ClientSidebar';
import ClientFloralVendorDetails from '../../components/ClientFloralVendorDetails';

function CarsVendorDetails() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/allvendors' },
        { label: 'Cars', href: '/allcars' },
        { label: 'Mercedez' },
    ];

    const vendorDetails = {
        vendorName: 'Mercedez',
        location: 'Dream Blooms, Galle Road, Colombo 7',
        email: 'obcakes@gmail.com',
        rating: 4,
        defaultImage: 'cars.png',
        images: ['cars.png', 'cars.png', 'cars.png', 'cars.png'],
        description: 'Luxury cars available for rent with driver and without driver options.',
        rentalTerms: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dignissimos id repellat architecto eligendi a dolorem eos neque aperiam eum. Vero aspernatur vel voluptatem soluta! Similique quis sed dolorem unde?',
        paymentTerms: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ducimus. Reprehenderit aut laborum fuga soluta temporibus, animi itaque blanditiis ut voluptates delectus nihil neque est iusto minus incidunt hic tempora.',
        basePrice: 20000,
        packageOptions: [
            { name: 'With Driver', price: 25000 },
            { name: 'Without Driver', price: 20000 }
        ]
    };

    return (
        <>
            <RegisterHeader />
            <div className="flex flex-col md:flex-row">
                <ClientSidebar />
                <div className="flex flex-col w-full">
                    <Breadcrumb items={breadcrumbItems} />
                    <ClientFloralVendorDetails {...vendorDetails} />
                </div>
            </div>
        </>
    );
}

export default CarsVendorDetails;
