import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import RegisterHeader from '../../components/common/RegisterHeader';
import ClientSidebar from '../../components/client/ClientSidebar';
import SortingButton from '../../components/ui/SortingButton';
import BookingStatusCard from '../../components/common/BookingStatusCard';
import { getAllBookings, getBookingsByType } from '../../services/bookingServices';

function ClientAllBookings() {
    const [bookings, setBookings] = useState([]); // Stores all bookings
    const [loading, setLoading] = useState(true);
    const [selectedType, setSelectedType] = useState('all'); // Default type (All)
    const [noBookings, setNoBookings] = useState(false); // To track if there are no bookings

    const breadcrumbItems = [
        { label: 'My Wedding', href: './mywedding' },
        { label: 'Bookings' },
    ];

    // Updated typeOptions with string values
    const typeOptions = [
        { label: 'All', value: 'all' },
        { label: 'Hotels', value: 'hotel' },
        { label: 'Floral', value: 'floral' },
        { label: 'Cakes', value: 'cakes' },
        { label: 'Cars', value: 'cars' },
    ];

    const sortingButtons = [
        {
            iconPath: "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z",
            title: "Type",
            items: typeOptions,
        },
    ];

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                setLoading(true);
                let bookingsData;

                if (!selectedType) {
                    console.error('Selected type is missing.');
                    return;
                }

                if (selectedType === 'all') {
                    bookingsData = await getAllBookings();
                } else {
                    bookingsData = await getBookingsByType(selectedType);
                }

                // If no bookings found, set noBookings to true
                if (bookingsData.length === 0) {
                    setNoBookings(true);
                } else {
                    setNoBookings(false);
                }

                setBookings(bookingsData);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setNoBookings(true); // Set noBookings to true if an error occurs
            } finally {
                setLoading(false);
            }
        };
        fetchBookings();
    }, [selectedType]);

    const handleTypeChange = (type) => {
        console.log('Selected Type:', type);
        setSelectedType(type); // Update the selected type
    };

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
                        <h1 className="text-4xl font-bold text-custom-primary">Bookings</h1>
                    </div>
                    <div className="relative pb-5">
                        <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col gap-2 pt-12">
                            {/* Sorting Buttons */}
                            <div className="absolute flex flex-row gap-1 mb-0 top-3 right-5">
                                {sortingButtons.map((button, index) => (
                                    <SortingButton
                                        key={index}
                                        iconPath={button.iconPath}
                                        title={button.title}
                                        items={button.items}
                                        onSelect={handleTypeChange} // Pass the handler
                                    />
                                ))}
                            </div>
                            {/* Booking Status Cards */}
                            {loading ? (
                                <div>Loading...</div>
                            ) : noBookings ? (
                                <div className="text-center text-red-500">No bookings available for the selected type.</div>
                            ) : (
                                <div className="flex flex-col gap-2 pt-4">
                                    {bookings.map((booking, index) => (
                                       <BookingStatusCard
                                            key={index}
                                            vendorname={booking.vendor.business_name}
                                            date={booking.booking_date}
                                            status={booking.status}
                                            vendortype={booking.vendor_type}
                                            packagename={booking.package_name}
                                            price={booking.price}
                                            guestcount={booking.guest_count}
                                            totalamount={booking.price * booking.guest_count}
                                            pic={booking.vendor.pic}
                                            vendorId={booking.vendor_id}
                                            bookingId={booking.booking_id}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientAllBookings;
