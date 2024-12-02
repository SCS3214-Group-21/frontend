import React, { useState, useEffect } from 'react';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/client/ClientSidebar';
import Breadcrumb from '../../components/ui/Breadcrumb';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { getBudgetById, deleteBudget } from '../../services/budgetServices'; // Import deleteBudget service
import api from '../../api';
import Swal from 'sweetalert2';  // Import SweetAlert2

function MyBudgetPage() {
    const { id } = useParams();  // Get the `id` from the URL parameters
    const [services, setServices] = useState([]);  // Store the fetched services (packages)
    const navigate = useNavigate();  // Initialize the navigate function
    
    useEffect(() => {
        // Fetch the budget data when the component mounts
        const fetchBudget = async () => {
            try {
                const response = await getBudgetById(id);  // Fetch data using your backend API
                const fetchedServices = response.packages.map((pkg) => ({
                    id: pkg.package_id,
                    name: pkg.name,
                    package: pkg.role,  // You can use package name or any other details
                    packageId: pkg.package_id,
                    description: pkg.description,
                    amount: pkg.amount,
                    img: pkg.img,  // Image URL
                    items: JSON.parse(pkg.items), // Parse items to make it an array
                }));
                setServices(fetchedServices);  // Update the services state
            } catch (error) {
                console.error("Error fetching budget data", error);
            }
        };
        fetchBudget();
    }, [id]);  // Fetch data when the `id` changes (if URL changes)

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (str) => {
        if (!str) return ''; // Handle empty or undefined strings
        return str.charAt(0).toUpperCase() + str.slice(1); // Capitalize the first letter
    };

    // Function to delete a package
    const handleDelete = async (packageId) => {
        // Show a confirmation dialog using SweetAlert2
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to undo this action!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                await deleteBudget(id); // Call delete function with the package ID
                // Filter out the deleted package from the services list
                // setServices(services.filter((service) => service.id !== packageId));
                // Show success message
                navigate('/client/budget'); // Navigate to the budget page
                Swal.fire('Deleted!', 'The package has been deleted.', 'success');
            } catch (error) {
                // Show error message
                Swal.fire('Error!', 'Failed to delete package: ' + error.message, 'error');
            }
        }
    };

    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Budget', href: '/budget' },
        { label: `Budget ${id}` },
    ];

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5 flex flex-row justify-between">
                        <h1 className="text-4xl font-bold text-custom-primary">Budget {id}</h1>
                        <button onClick={handleDelete}>
                            {/* SVG Icon for delete (cross) */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-red-700 size-6">
                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="pb-5">
                        <form className="w-full h-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5">
                            {/* Render the services dynamically */}
                            {services.map((service) => (
                                <div key={service.id} className="flex flex-col items-start justify-start w-full gap-5 p-5 mb-5 border border-black rounded-lg shadow-md bg-white">
                                    <div className="w-full h-full mb-2">
                                        {/* Package Image */}
                                        <h1 className="text-2xl font-bold text-black mb-2">{capitalizeFirstLetter(service.package)}</h1>
                                        <a href={`${api.defaults.baseURL}/uploads/${service.img}`} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={`${api.defaults.baseURL}/uploads/${service.img}`} 
                                                alt={service.package} 
                                                className="w-full h-full rounded-lg mb-2"
                                                style={{ maxHeight: '300px', objectFit: 'cover' }} // Optional: Restrict image size
                                            />
                                        </a>
                                    </div>

                                    <div className="w-full mb-2">
                                        <h2 className="text-lg font-semibold text-black">Description:</h2>
                                        <p className="text-gray-700">{service.description}</p>
                                    </div>

                                    <div className="w-full mb-2">
                                        <h2 className="text-lg font-semibold text-black">Package Amount:</h2>
                                        <p className="text-gray-700">{`LKR ${service.amount.toLocaleString()}`}</p>
                                    </div>

                                    <div className="w-full mb-2">
                                        <h2 className="text-lg font-semibold text-black">Items Included:</h2>
                                        <ul className="list-disc pl-5">
                                            {service.items.map((item, index) => (
                                                <li key={index} className="text-gray-700">{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Delete Button */}
                                    {/* <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(service.id)} // Trigger delete on button click
                                            className="text-red-700 hover:text-red-500"
                                        >
                                            Delete Package
                                        </button>
                                    </div> */}
                                </div>
                            ))}

                            {/* Bottom buttons */}
                            {/* <div className="flex flex-wrap items-center justify-end gap-2 py-3 sm:gap-5">
                                <button
                                    type="button"
                                    className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white"
                                >
                                    Save Changes
                                </button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyBudgetPage;
