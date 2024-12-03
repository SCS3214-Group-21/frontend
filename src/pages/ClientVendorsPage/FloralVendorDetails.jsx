// import React from 'react';
// import Breadcrumb from '../../components/ui/Breadcrumb';
// import RegisterHeader from '../../components/common/RegisterHeader';
// import ClientSidebar from '../../components/client/ClientSidebar';
// import ClientFloralVendorDetails from '../../components/client/ClientFloralVendorDetails';

// function FloralVendorDetails() {
//   const breadcrumbItems = [
//     { label: 'My Wedding', href: '/' },
//     { label: 'Vendors', href: '/allvendors' },
//     { label: 'Florals', href: '/allflorals' },
//     { label: 'Rose Garden' },
//   ];

//   const vendorDetails = {
//     vendorName: 'Rose Garden',
//     location: 'Dream Blooms, Galle Road, Colombo 7',
//     email: 'dbflorals@gmail.com',
//     rating: 4,
//     defaultColor: 'Venetian Pink',
//     images: {
//       'Venetian Pink': {
//         main: 'floral.png',
//         small: ['floral.png', 'floral.png', 'floral.png'],
//         price: 20000
//       },
//       'Venetian Blue': {
//         main: 'cars.png',
//         small: ['cars.png', 'cars.png', 'cars.png'],
//         price: 25000
//       },
//       // Add more color options here
//     },
//     colorOptions: [
//       'Venetian Pink',
//       'Venetian Blue',
//       'Venetian Green',
//       'Ellington',
//       'Venetian',
//       'Tuscany',
//       'Berkeley',
//       'Venetian Black',
//       'Pasadena',
//       'Venetian Gold',
//       'Savannah',
//       'Venetian Bronze',
//       'Venetian Gray'
//     ],
//     description: 'One garland embedded with collection blooms of your choice. Garland length is 81"',
//     rentalTerms: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dignissimos id repellat architecto eligendi a dolorem eos neque aperiam eum. Vero aspernatur vel voluptatem soluta! Similique quis sed dolorem unde?',
//     paymentTerms: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ducimus. Reprehenderit aut laborum fuga soluta temporibus, animi itaque blanditiis ut voluptates delectus nihil neque est iusto minus incidunt hic tempora.',
//     basePrice: 20000
//   };

//   return (
//     <>

//       <RegisterHeader />
//       <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
//         <div className="w-[5%] sm:w-[10%] md:w-[20%]">
//           <ClientSidebar />
//         </div>
//         <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
//           <div className="pb-5">
//             <Breadcrumb items={breadcrumbItems} />
//           </div>

//           <div className="mt-4 ml-2 mr-4 ">
//             <ClientFloralVendorDetails {...vendorDetails} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FloralVendorDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/client/ClientSidebar';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ClientFloralVendorDetails from '../../components/client/ClientFloralVendorDetails';
import { fetchVendorDetailsById } from '../../services/packageService';

function FloralVendorDetails() {
    const { id } = useParams(); // Get vendor ID from URL
    const [vendorDetails, setVendorDetails] = useState(null);

    useEffect(() => {
        const fetchVendorDetails = async () => {
            try {
                const data = await fetchVendorDetailsById(id);
                setVendorDetails(data);
            } catch (error) {
                console.error('Error fetching vendor details:', error);
            }
        };

        fetchVendorDetails();
    }, [id]);

    // Set breadcrumbItems only when vendorDetails is available
    const breadcrumbItems = vendorDetails
        ? [
            { label: 'My Wedding', href: '../../mywedding' },
            { label: 'Vendors', href: '../../vendors' },
            { label: 'Hotels', href: '../hotels' },
            { label: vendorDetails.Vendor.business_name }
        ]
        : [];

    if (!vendorDetails) return <div>Loading...</div>;

    return (
        <div className="flex flex-col">
            <RegisterHeader />
            <div className="flex">
                <ClientSidebar />
                <div className="flex flex-col w-full ml-4">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="mt-4 ml-4 mr-4">
                        <ClientFloralVendorDetails 
                            vendorName={vendorDetails.Vendor.vendorName}
                            location={vendorDetails.Vendor.location}
                            email={vendorDetails.Vendor.email}
                            rating={vendorDetails.Vendor.rating}
                            defaultColor={vendorDetails.Vendor.colors?.[0] || 'defaultColor'} // Safe check with fallback value
                            MainImgPath={`http://localhost:5000/uploads/vendor/pic/${vendorDetails.Vendor.pic}`}
                            images={vendorDetails.Vendor.images}
                            colorOptions={vendorDetails.Vendor.colors || []} // Safe check with empty array as fallback
                            description={vendorDetails.Vendor.description}
                            rentalTerms={vendorDetails.Vendor.rentalTerms}
                            paymentTerms={vendorDetails.Vendor.paymentTerms}
                            basePrice={vendorDetails.Vendor.basePrice}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FloralVendorDetails;
