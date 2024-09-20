import React, { useState } from 'react';
// import PrimaryButton from './ui/PrimaryButton';
import ServiceDescriptionCard from './ServiceDescriptionCard';
import SelectedService from '../SelectedServices';

function ChangePackages({ onClose }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedService, setSelectedService] = useState(null); // State for selected service

    // Sample data for packages
    const packages = [
        {
            img: '../../src/assets/images/Images/03.png',  // Replace with actual image URLs
            alt: 'Package 1',
            name: 'Package 01',
            price: '15000 LKR',
            description: 'This package includes XYZ services...',
            showStars: true,
        },
        {
            img: '../../src/assets/images/Images/03.png',
            alt: 'Package 2',
            name: 'Package 02',
            price: '20000 LKR',
            description: 'This package includes ABC services...',
            showStars: false,
        },
        {
            img: '../../src/assets/images/Images/03.png',  // Replace with actual image URLs
            alt: 'Package 1',
            name: 'Package 01',
            price: '15000 LKR',
            description: 'This package includes XYZ services...',
            showStars: true,
        },
        {
            img: '../../src/assets/images/Images/03.png',
            alt: 'Package 2',
            name: 'Package 02',
            price: '20000 LKR',
            description: 'This package includes ABC services...',
            showStars: false,
        },
        {
            img: '../../src/assets/images/Images/03.png',  // Replace with actual image URLs
            alt: 'Package 1',
            name: 'Package 01',
            price: '15000 LKR',
            description: 'This package includes XYZ services...',
            showStars: true,
        },
        {
            img: '../../src/assets/images/Images/03.png',
            alt: 'Package 2',
            name: 'Package 02',
            price: '20000 LKR',
            description: 'This package includes ABC services...',
            showStars: false,
        },
        {
            img: '../../src/assets/images/Images/03.png',  // Replace with actual image URLs
            alt: 'Package 1',
            name: 'Package 01',
            price: '15000 LKR',
            description: 'This package includes XYZ services...',
            showStars: true,
        },
        {
            img: '../../src/assets/images/Images/03.png',
            alt: 'Package 2',
            name: 'Package 02',
            price: '20000 LKR',
            description: 'This package includes ABC services...',
            showStars: false,
        },
        // Add more packages as needed
    ];

    // Function to handle modal opening
    const openModal = (pkg) => {
        setSelectedService(pkg); // Set the selected service
    };

    // Function to handle modal closing
    const closeModal = () => {
        setSelectedService(null); // Clear the selected service
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter packages based on the search term
    const filteredPackages = packages.filter((pkg) =>
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='fixed inset-0 z-50 flex items-start justify-center pt-16 bg-black bg-opacity-50'>
            <div className='relative w-[80%] h-[95%] bg-white rounded-xl p-6 flex flex-col gap-6 overflow-y-auto'>
                <button
                    className="absolute flex items-center justify-center w-8 h-8 text-3xl text-gray-500 rounded-full top-2 right-2 hover:text-gray-700 hover:bg-custom-primary"
                    onClick={onClose}
                >
                    &times; {/* Close icon */}
                </button>

                {/* Search Bar */}
                <div className="flex justify-end w-full pr-5">
                    <input
                        type="text"
                        className="w-full max-w-md px-4 py-2 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary"
                        placeholder="Search for packages..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <div className='flex flex-row flex-wrap items-center justify-center gap-10'>
                        {filteredPackages.map((pkg, index) => (
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
                {/* <h1 className="font-sans text-2xl font-semibold text-center text-black">20000 LKR per person</h1> */}
            </div>

            {/* Conditionally render the SelectedService component as a modal */}
            {selectedService && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60'>
                    <div className='p-6 bg-white rounded-lg'>
                        <SelectedService
                            service={selectedService} // Pass the selected service details
                            onClose={closeModal} // Pass the close function
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChangePackages;
