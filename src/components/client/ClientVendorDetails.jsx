import React, { useState } from 'react';
import ServiceDescriptionCard from './ServiceDescriptionCard';
import VendorImagesPopup from './VendorImagesPopup';
import PackageModal from './PackageModal';


function ClientVendorDetails({ MainImgPath, Name, Type, StarCount, LocationCity, Email, ServiceDescription, packages, packageItems, images }) {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (pkg) => {
        setSelectedPackage(pkg);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPackage(null);
        setIsOpen(false);
    };

    const downloadPDF = () => {
        // Implement the logic to download the PDF of the selected package
        // This might involve fetching the PDF from a server or generating it on the fly
        console.log('Downloading PDF for package:', selectedPackage.name);
    };

    return (
        <>
            <div className='flex-row shadow-lg'>
                <div className="shadow-sm card lg:card-side bg-base-100">
                    <figure>
                        <img className='h-full w-96' src={MainImgPath} alt="Album" />
                    </figure>
                    <div className="card-body bg-[#f9e9e3] text-black ">
                        <h2 className="card-title font-bold text-6xl text-[#A57E17]">{Name}</h2>
                        <p>{StarCount} star {Type}
                            <br />{LocationCity}
                            <br />{Email}</p>
                        <div className='flex'>
                            <svg className="w-6 h-6 mr-3 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                            </svg>
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                            </svg>
                        </div>
                        <div className='text-sm '>
                            <VendorImagesPopup images={images} />
                        </div>
                    </div>
                </div>
                <div className='mt-10 ml-4 mr-4 text-black justify-items-center'>
                    <p>{ServiceDescription}</p>
                </div>
                <div className="h-96">
                    <div className='flex justify-center mt-5 space-x-10 '>
                        <div className='flex flex-row flex-wrap items-center justify-center gap-10'>
                            {packages.map((pkg, index) => (
                                <div key={index} onClick={() => openModal(pkg)}>
                                    <ServiceDescriptionCard
                                        href="#popup"
                                        img={pkg.img}
                                        alt={pkg.alt}
                                        name={pkg.name}
                                        price={pkg.price}
                                        description={pkg.description}
                                        showStars={pkg.showStars}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {isOpen && selectedPackage && (
                        <PackageModal
                            selectedPackage={selectedPackage}
                            packageItems={packageItems}
                            closeModal={closeModal}
                            downloadPDF={downloadPDF}
                            vendorName={Name}
                            vendorType={Type}

                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default ClientVendorDetails;
