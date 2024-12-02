import React, { useState } from 'react';
import ServiceDescriptionCard from './ServiceDescriptionCard';
import VendorImagesPopup from './VendorImagesPopup';
import PackageModal from './PackageModal';

function ClientVendorDetails({
    MainImgPath,
    Name,
    Type,
    StarCount,
    LocationCity,
    Email,
    ServiceDescription,
    packages,
    images,
    vendorId
}) {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (pkg) => {
       // console.log('Selected Package:', pkg); // Debug: Check the package data
        setSelectedPackage(pkg);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPackage(null);
        setIsOpen(false);
    };

    const downloadPDF = () => {
        if (selectedPackage) {
            console.log('Downloading PDF for package:', selectedPackage.name);
        }
    };

    return (
        <>
            <div className="flex-row shadow-lg">
                <div className="shadow-sm card lg:card-side bg-base-100">
                    <figure>
                        <img className="h-full w-96" src={MainImgPath} alt="Vendor" />
                    </figure>
                    <div className="card-body bg-[#f9e9e3] text-black">
                        <h2 className="card-title font-bold text-6xl text-[#A57E17]">{Name}</h2>
                        <p>
                            {StarCount} star {Type}
                            <br />
                            {LocationCity}
                            <br />
                            {Email}
                        </p>
                        <div className="text-sm">
                            <VendorImagesPopup images={images} />
                        </div>
                    </div>
                </div>
                <div className="mt-10 ml-4 mr-4 text-black">
                    <p>{ServiceDescription}</p>
                </div>
                <div className="h-96">
                    <div className="flex justify-center mt-5 space-x-10">
                        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
                            {packages.map((pkg) => (
                                <div key={pkg.package_id} onClick={() => openModal(pkg)}>
                                    <ServiceDescriptionCard
                                        href="#popup"
                                        img={pkg.img}
                                        alt={pkg.name}
                                        name={pkg.name}
                                        price={pkg.amount}
                                        description={pkg.description}
                                        starCount="4"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {isOpen && selectedPackage && (
                        <PackageModal
                            selectedPackage={selectedPackage}
                            closeModal={closeModal}
                            downloadPDF={downloadPDF}
                            vendorName={Name}
                            vendorType={Type}
                            vendorId={vendorId}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default ClientVendorDetails;

