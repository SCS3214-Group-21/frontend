import React, { useState, useEffect } from 'react';
import PrimaryButton from './ui/PrimaryButton';
import { fetchPackageById } from '../services/packageService'; // Import the API function

function SelectedService({ packageId, onClose }) {
    const [packageDetails, setPackageDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch package details when the component mounts
    useEffect(() => {
        const fetchPackageDetails = async () => {
            try {
                const response = await fetchPackageById(packageId);
                console.log("Fetched package:", response);

                let parsedItems;
                try {
                    parsedItems = JSON.parse(response.packageItem.items); // Parse items string
                } catch {
                    parsedItems = response.packageItem.items; // Fallback in case items is already an array
                }

                setPackageDetails({
                    ...response.packageItem,
                    items: Array.isArray(parsedItems) ? parsedItems : [], // Ensure items is an array
                });
            } catch (err) {
                setError('Failed to load package details');
            } finally {
                setLoading(false);
            }
        };

        if (packageId) {
            fetchPackageDetails();
        }
    }, [packageId]);

    const handleOkClick = () => {
        onClose(); // Close the popup
    };

    if (loading) {
        return <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>Loading...</div>;
    }

    if (error) {
        return (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                <div className='bg-white p-5 rounded'>
                    <p className='text-red-500'>{error}</p>
                    <button onClick={onClose} className="mt-3 bg-gray-300 px-4 py-2 rounded">Close</button>
                </div>
            </div>
        );
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='relative w-11/12 md:w-1/2 lg:w-1/3 bg-white rounded-xl p-6 flex flex-col gap-6'>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl hover:bg-custom-primary rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={onClose}
                >
                    &times; {/* Close icon */}
                </button>
                <h1 className="text-black font-sans font-semibold text-2xl text-center">{packageDetails.name}</h1>
                <div className="w-full px-10">
                    {Array.isArray(packageDetails.items) && (
                        <ul className="list-disc list-inside text-black">
                            {packageDetails.items.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="text-black">
                    <p className="w-full border-black bg-[#f9e9e3] border p-2">
                        {packageDetails.description}
                    </p>
                </div>
                <h1 className="text-black font-sans font-semibold text-2xl text-center">{packageDetails.amount} LKR</h1>
                <div className='w-full flex justify-center items-center'>
                    <PrimaryButton onClick={handleOkClick} text="OK" />
                </div>
            </div>
        </div>
    );
}

export default SelectedService;
