import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // SweetAlert for success/error messages
import CustomPinkButton from '../ui/CustomPinkButton';
import SelectedService from '../SelectedServices';
import ChangePackages from './ChangePackages';
import { getInitialBudget, updateBudget } from '../../services/budgetServices';

function PlanBudgetForm2() {
    const { id } = useParams(); // Extract the dynamic id from the URL
    const navigate = useNavigate(); // Hook to navigate programmatically
    const [showSelectedServicePopup, setShowSelectedServicePopup] = useState(false);
    const [showChangePackagesPopup, setShowChangePackagesPopup] = useState(false);
    const [services, setServices] = useState([]); // This will hold the service details
    const [packageIds, setPackageIds] = useState({}); // To store selected package IDs
    const [selectedPackageId, setSelectedPackageId] = useState(null);

    // Fetch budget details and populate services
    useEffect(() => {
        const fetchBudgetDetails = async () => {
            try {
                const storedSuggestions = localStorage.getItem('suggestions');
                if (storedSuggestions) {
                    // If suggestions exist in localStorage, use them to set services state
                    const suggestions = JSON.parse(storedSuggestions);

                    const transformedServices = Object.keys(suggestions)
                        .filter((key) => suggestions[key] !== null) // Exclude null packages
                        .map((key, index) => {
                            const suggestion = suggestions[key];
                            return {
                                id: index + 1,
                                name: key.replace('_', ' ').replace(/\b\w/g, (char) => char.toUpperCase()), // Format key
                                package: suggestion.name,
                                packageId: suggestion.package_id, // Capture the package ID
                            };
                        });

                    // Initialize packageIds state with the package IDs from the response
                    const initialPackageIds = Object.keys(suggestions).reduce((acc, key) => {
                        acc[key] = suggestions[key] ? suggestions[key].package_id : null;
                        return acc;
                    }, {});

                    setServices(transformedServices);
                    setPackageIds(initialPackageIds);
                } else {
                    // If suggestions do not exist in localStorage, fetch them from the API
                    const response = await getInitialBudget(id); // Fetch budget details
                    const { suggestions } = response;

                    // Store the fetched suggestions in localStorage
                    localStorage.setItem('suggestions', JSON.stringify(suggestions));

                    const transformedServices = Object.keys(suggestions)
                        .filter((key) => suggestions[key] !== null) // Exclude null packages
                        .map((key, index) => {
                            const suggestion = suggestions[key];
                            return {
                                id: index + 1,
                                name: key.replace('_', ' ').replace(/\b\w/g, (char) => char.toUpperCase()), // Format key
                                package: suggestion.name,
                                packageId: suggestion.package_id, // Capture the package ID
                            };
                        });

                    // Initialize packageIds state with the package IDs from the response
                    const initialPackageIds = Object.keys(suggestions).reduce((acc, key) => {
                        acc[key] = suggestions[key] ? suggestions[key].package_id : null;
                        return acc;
                    }, {});

                    setServices(transformedServices);
                    setPackageIds(initialPackageIds);
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchBudgetDetails();
    }, [id]);

    // Handle saving changes
    const handleSaveChanges = async () => {
        try {
            // Destructure package IDs for the update API
            const {
                hotels = null,
                dressers = null,
                photography = null,
                floral = null,
                jewellary = null,
                dancing_groups = null,
                ashtaka = null,
                salons = null,
                dJs = null,
                honeymoon = null,
                cars = null,
                invitation_cards = null,
                poruwa = null,
                catering = null,
            } = packageIds;

            // Call the updateBudget API
            await updateBudget(
                id,
                hotels,
                dressers,
                photography,
                floral,
                jewellary,
                dancing_groups,
                ashtaka,
                salons,
                dJs,
                honeymoon,
                cars,
                invitation_cards,
                poruwa,
                catering
            );

            // // Update localStorage after successful changes
            // localStorage.setItem('packageIds', JSON.stringify(packageIds));
            // Clear the 'suggestions' key from localStorage
            localStorage.removeItem('suggestions');

            // Show SweetAlert success message and navigate
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Budget updated successfully!',
                timer: 2000,
                showConfirmButton: false,
            }).then(() => {
                navigate('/client/budget'); // Navigate after success
            });
        } catch (error) {
            // Show SweetAlert error message
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update the budget!',
            });
        }
    };

    // Handle "view" button click
    const handleViewClick = (packageId) => {
        setSelectedPackageId(packageId); // Set the selected package ID
        setShowSelectedServicePopup(true);
    };

    // Handle close of the SelectedService popup
    const handleCloseSelectedServicePopup = () => {
        setShowSelectedServicePopup(false);
    };

    // Handle "change" button click
    const handleChangeClick = (serviceName) => {
        setSelectedPackageId(serviceName); // Store the selected service category (e.g., "photography")
        setShowChangePackagesPopup(true);
    };

    // Handle close of the ChangePackages popup
    const handleCloseChangePackagesPopup = () => {
        setShowChangePackagesPopup(false);
    };

    return (
        <div>
            <form className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5">
                {/* Render the services dynamically */}
                {services.map((service) => (
                    <div key={service.id} className="flex flex-row items-center justify-start w-full gap-5 p-2 mb-5 border border-black">
                        <div className="flex flex-row flex-wrap justify-start w-full gap-8">
                            <h1 className="text-2xl text-black">{service.name}</h1>
                            <h1 className="text-xl text-black">
                                Suggest Package: <span className="text-lg">{service.package}</span>
                            </h1>
                        </div>
                        <div className="flex flex-row flex-wrap items-center justify-end w-full gap-5">
                            <CustomPinkButton text={"view"} onClick={() => handleViewClick(service.packageId)} />
                            <CustomPinkButton text={"change"} onClick={() => handleChangeClick(service.name)} />
                        </div>
                    </div>
                ))}

                {/* Bottom buttons */}
                <div className="flex flex-wrap items-center justify-end gap-2 py-3 sm:gap-5">
                    <button
                        type="button"
                        onClick={handleSaveChanges} // Trigger the save changes handler
                        className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white"
                    >
                        Save Changes
                    </button>
                </div>
            </form>

            {/* Conditionally render the SelectedService component */}
            {showSelectedServicePopup && (
                <SelectedService packageId={selectedPackageId} onClose={handleCloseSelectedServicePopup} />
            )}

            {/* Conditionally render the ChangePackages component */}
            {showChangePackagesPopup && (
                <ChangePackages serviceName={selectedPackageId} planId={id} onClose={handleCloseChangePackagesPopup} />
            )}
        </div>
    );
}

export default PlanBudgetForm2;
