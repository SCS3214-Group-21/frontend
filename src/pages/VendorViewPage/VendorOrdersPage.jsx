import React, { useEffect, useState } from 'react';
import RegisterHeader from '../../components/common/RegisterHeader.jsx';
import VendorSidebar from '../../components/vendor/VendorSidebar.jsx';
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import { getVendorOrders, updateBookingStatus } from '../../services/bookingServices.js'; 
import Swal from 'sweetalert2';

function VendorOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const breadcrumbItems = [
        { label: 'Dashboard', href: '../dashboard' },
        { label: 'Orders' },
    ];

    // Fetch orders on component mount
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const fetchedOrders = await getVendorOrders();
                setOrders(fetchedOrders);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    // Function to handle accepting a booking
    const handleAcceptBooking = async (bookingId) => {
        try {
            await updateBookingStatus(bookingId, 'accept');
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.booking_id === bookingId ? { ...order, status: 'accept' } : order
                )
            );

            // Show success alert
            Swal.fire({
                title: 'Success!',
                text: 'Booking status updated to Accepted.',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                // Refresh the page after the alert is closed
                window.location.reload();
            });
        } catch (err) {
            console.error(err.message);

            // Show error alert
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update booking status.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    // Function to handle rejecting a booking
    const handleRejectBooking = async (bookingId) => {
        try {
            await updateBookingStatus(bookingId, 'reject');
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.booking_id === bookingId ? { ...order, status: 'reject' } : order
                )
            );
    
            // Show success alert with red text
            Swal.fire({
                title: 'Success!',
                html: '<p style="color: red; font-weight: bold;">Booking Rejected.</p>',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                // Refresh the page after the alert is closed
                window.location.reload();
            });
        } catch (err) {
            console.error(err.message);
    
            // Show error alert
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update booking status.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };
    

    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className="text-4xl font-bold text-custom-primary">Orders</h1>
                    </div>
                    {loading ? (
                        <div className="flex items-center justify-center py-20 bg-white border border-[#FFDBC8] rounded-lg">
                            <p className="text-lg font-semibold text-gray-600">Loading...</p>
                        </div>
                    ) : error ? (
                        <div className="flex items-center justify-center py-20 bg-white border border-red-500 rounded-lg">
                            <p className="text-lg font-semibold text-red-600">{error}</p>
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="flex items-center justify-center py-20 bg-white border border-[#FFDBC8] rounded-lg">
                            <p className="text-lg font-semibold text-gray-600">
                                No orders available yet.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto bg-white border border-[#FFDBC8] rounded-lg">
                            <table className="w-full text-left border-collapse table-auto">
                                <thead>
                                    <tr className="bg-[#FFF8F5] text-gray-500 border-b border-[#FFDBC8]">
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Client Name</th>
                                        <th className="px-4 py-2">Price</th>
                                        <th className="px-4 py-2">Package Name</th>
                                        <th className="px-4 py-2">Booking Date</th>
                                        <th className="px-4 py-2">Booking Time</th>
                                        <th className="px-4 py-2">Location</th>
                                        <th className="px-4 py-2">Guest Count</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-black">
                                    {orders.map((order, index) => (
                                        <tr
                                            key={index}
                                            className={`${
                                                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                            }`}
                                        >
                                            <td className="px-4 py-2">{order.booking_id}</td>
                                            <td className="px-4 py-2">{order.client.groom_name}</td>
                                            <td className="px-4 py-2">{order.price}</td>
                                            <td className="px-4 py-2">{order.package_name}</td>
                                            <td className="px-4 py-2">{order.booking_date}</td>
                                            <td className="px-4 py-2">{order.booking_time}</td>
                                            <td className="px-4 py-2">{order.client.location}</td>
                                            <td className="px-4 py-2">{order.guest_count}</td>
                                            <td className="px-4 py-2">
                                                <button
                                                    className="px-3 py-1 mr-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                                                    onClick={() => handleAcceptBooking(order.booking_id)}
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                                                    onClick={() => handleRejectBooking(order.booking_id)}
                                                >
                                                    Reject
                                                </button>
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

export default VendorOrdersPage;
