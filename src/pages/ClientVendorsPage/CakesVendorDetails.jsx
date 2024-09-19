import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/client/ClientSidebar';
import ClientFloralVendorDetails from '../../components/client/ClientFloralVendorDetails';

function CakesVendorDetails() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/allvendors' },
        { label: 'Cakes', href: '/allcakes' },
        { label: 'Orange Blooms Cake' },
    ];

    const vendorDetails = {
        vendorName: 'Orange Blooms Cake',
        location: 'Dream Blooms, Galle Road, Colombo 7',
        email: 'obcakes@gmail.com',
        rating: 4,
        defaultColor: 'Venetian Pink',
        images: {
            'Venetian Pink': {
                main: 'cake.png',
                small: ['cake.png', 'cake.png', 'cake.png'],
                price: 20000
            },
            'Venetian Blue': {
                main: 'cake.png',
                small: ['cars.png', 'cars.png', 'cars.png'],
                price: 25000
            },
            // Add more color options here
        },
        colorOptions: [
            'Venetian Pink',
            'Venetian Blue',
            'Venetian Green',
            'Ellington',
            'Venetian',
            'Tuscany',
            'Berkeley',
            'Venetian Black',
            'Pasadena',
            'Venetian Gold',
            'Savannah',
            'Venetian Bronze',
            'Venetian Gray'
        ],
        description: 'One garland embedded with collection blooms of your choice. Garland length is 81"',
        rentalTerms: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dignissimos id repellat architecto eligendi a dolorem eos neque aperiam eum. Vero aspernatur vel voluptatem soluta! Similique quis sed dolorem unde?',
        paymentTerms: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ducimus. Reprehenderit aut laborum fuga soluta temporibus, animi itaque blanditiis ut voluptates delectus nihil neque est iusto minus incidunt hic tempora.',
        basePrice: 20000
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
                        <ClientFloralVendorDetails {...vendorDetails} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CakesVendorDetails;
