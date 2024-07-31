import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/ClientSidebar';
import ClientFloralVendorDetails from '../../components/ClientFloralVendorDetails';

function FloralVendorDetails() {
  const breadcrumbItems = [
    { label: 'My Wedding', href: '/' },
    { label: 'Vendors', href: '/allvendors' },
    { label: 'Florals', href: '/allflorals' },
    { label: 'Rose Garden' },
  ];

  const vendorDetails = {
    vendorName: 'Rose Garden',
    location: 'Dream Blooms, Galle Road, Colombo 7',
    email: 'dbflorals@gmail.com',
    rating: 4,
    defaultColor: 'Venetian Pink',
    images: {
      'Venetian Pink': {
        main: 'floral.png',
        small: ['floral1.jpg', 'floral2.jpg', 'floral3.jpg'],
        price: 20000
      },
      'Venetian Blue': {
        main: 'floral2.jpg',
        small: ['floral4.jpg', 'floral1.jpg', 'floral.png'],
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
    rentalTerms: 'Rentals are available for a minimum of 24 hours. Extended rental periods are subject to availability and additional charges.All rental items must be returned in their original condition. Any damage or excessive wear will result in additional fees.',
    paymentTerms: 'Delivery and setup are included for orders over $500. For orders under $500, a delivery fee of $50 will apply.Setup must be scheduled at least 48 hours in advance. Changes to the setup schedule are subject to availability and may incur additional charges.',
    basePrice: 20000
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

          <div className="mt-4 ml-2 mr-4 ">
            <ClientFloralVendorDetails {...vendorDetails} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FloralVendorDetails;
