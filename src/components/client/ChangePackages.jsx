import React, { useState, useEffect } from 'react';
import ServiceDescriptionCard from './ServiceDescriptionCard';
import SelectedService from '../SelectedServices';
import { getMinPackagesForCategory } from '../../services/budgetServices';
import api from '../../api';

function ChangePackages({ serviceName, planId, onClose }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPackageId, setSelectedPackageId] = useState(null);
    const [showSelectedServicePopup, setShowSelectedServicePopup] = useState(false);

    // Fetch the packages for the given serviceName
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                setLoading(true); // Start loading
                setError(null); // Clear any previous error
    
                const fetchedPackages = await getMinPackagesForCategory(planId, serviceName);
    
                // Map the data to rename `amount` to `price`
                const transformedPackages = fetchedPackages.map(pkg => ({
                    ...pkg,
                    price: pkg.amount, // Map amount to price
                }));
    
                setPackages(transformedPackages); // Set the transformed packages
            } catch (err) {
                console.error('Error fetching packages:', err.message);
                setError('Failed to load packages.');
            } finally {
                setLoading(false); // Stop loading
            }
        };
    
        fetchPackages();
    }, [planId, serviceName]);

    // Handle modal opening
    const handleViewClick = (packageId) => {
        setSelectedPackageId(packageId); // Set the selected package ID
        setShowSelectedServicePopup(true);
    };

    // Handle modal closing
    const handleCloseSelectedServicePopup = () => {
        setShowSelectedServicePopup(false);
    };

    // Filter packages based on the search term
    const filteredPackages = packages.filter((pkg) =>
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Render loading and error states
    const renderLoadingError = () => {
        if (loading) {
            return <p className="text-lg text-gray-500">Loading packages...</p>;
        }
        if (error) {
            return <p className="text-lg text-red-500">{error}</p>;
        }
        return null;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 bg-black bg-opacity-50">
            <div className="relative w-[80%] h-[95%] bg-white rounded-xl p-6 flex flex-col gap-6 overflow-y-auto">
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
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Packages List */}
                <div className="flex flex-col items-center gap-4">
                    {renderLoadingError()}
                    {!loading && !error && (
                        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
                            {filteredPackages.map((pkg, index) => {
                                const imageUrl = pkg.img ? `${api.defaults.baseURL}/uploads/${pkg.img}` : 'default-img.png';

                                return (
                                    <div key={index} onClick={() => handleViewClick(pkg.package_id)}>
                                        <ServiceDescriptionCard
                                            img={imageUrl}
                                            alt={pkg.alt || 'Package'}
                                            name={pkg.name}
                                            price={pkg.price}
                                            description={pkg.description}
                                            showStars={pkg.showStars}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Selected Service Popup */}
            {showSelectedServicePopup && (
                <SelectedService packageId={selectedPackageId} onClose={handleCloseSelectedServicePopup} />
            )}
        </div>
    );
}

export default ChangePackages;
