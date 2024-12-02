import React, { useEffect, useState } from 'react';
import RegisterHeader from '../../components/common/RegisterHeader.jsx';
import ClientSidebar from '../../components/client/ClientSidebar.jsx';
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import Swal from 'sweetalert2';
import { fetchClientQuotations } from '../../services/quotationServices.js';

function ClientQuotationPage() {
    const [quotations, setQuotations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const breadcrumbItems = [
        { label: 'Dashboard', href: '../dashboard' },
        { label: 'My Quotations' },
    ];

    // Fetch all client quotations
    useEffect(() => {
        const fetchQuotations = async () => {
            try {
                const response = await fetchClientQuotations();
                // Parse items in the response if they are strings
                const updatedQuotations = response.data.map((quotation) => ({
                    ...quotation,
                    items: Array.isArray(JSON.parse(quotation.items)) ? JSON.parse(quotation.items) : [],
                }));
                setQuotations(updatedQuotations);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchQuotations();
    }, []);

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
                    <div className="pb-5">
                        <h1 className="text-4xl font-bold text-custom-primary">My Quotations</h1>
                    </div>
                    {loading ? (
                        <div className="flex items-center justify-center py-20 bg-white border border-[#FFDBC8] rounded-lg">
                            <p className="text-lg font-semibold text-gray-600">Loading...</p>
                        </div>
                    ) : error ? (
                        <div className="flex items-center justify-center py-20 bg-white border border-red-500 rounded-lg">
                            <p className="text-lg font-semibold text-red-600">{error}</p>
                        </div>
                    ) : quotations.length === 0 ? (
                        <div className="flex items-center justify-center py-20 bg-white border border-[#FFDBC8] rounded-lg">
                            <p className="text-lg font-semibold text-gray-600">
                                No quotations available!
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto bg-white border border-[#FFDBC8] rounded-lg">
                            <table className="w-full text-left border-collapse table-auto">
                                <thead>
                                    <tr className="bg-[#FFF8F5] text-gray-500 border-b border-[#FFDBC8]">
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Package Name</th>
                                        <th className="px-4 py-2">Items</th>
                                        <th className="px-4 py-2">Details</th>
                                        <th className="px-4 py-2">Price</th>
                                        <th className="px-4 py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-black">
                                    {quotations.map((quotation, index) => (
                                        <tr
                                            key={quotation.quotation_id}
                                            className={`${
                                                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                            }`}
                                        >
                                            <td className="px-4 py-2">{quotation.quotation_id}</td>
                                            <td className="px-4 py-2">{quotation.package_name}</td>
                                            <td className="px-4 py-2">
                                                {Array.isArray(quotation.items) ? quotation.items.join(', ') : 'No items'}
                                            </td>
                                            <td className="px-4 py-2">{quotation.details}</td>
                                            <td className="px-4 py-2">{quotation.price}</td>
                                            <td className="px-4 py-2">
                                                {quotation.status === true ? 'Reviewed' : 'Pending'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ClientQuotationPage;
