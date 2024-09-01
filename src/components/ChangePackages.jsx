import React, { useState } from 'react';
// import PrimaryButton from './ui/PrimaryButton';
import ServiceDescriptionCard from './common/ServiceDescriptionCard';
import SelectedService from './SelectedServices';

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
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-16 z-50'>
            <div className='relative w-[80%] h-[95%] bg-white rounded-xl p-6 flex flex-col gap-6 overflow-y-auto'>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl hover:bg-custom-primary rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={onClose}
                >
                    &times; {/* Close icon */}
                </button>
                
                {/* Search Bar */}
                <div className="w-full flex justify-end pr-5">
                    <input 
                        type="text" 
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary bg-white text-black"
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
                {/* <h1 className="text-black font-sans font-semibold text-2xl text-center">20000 LKR per person</h1> */}
            </div>

            {/* Conditionally render the SelectedService component as a modal */}
            {selectedService && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60'>
                    <div className='bg-white p-6 rounded-lg'>
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
