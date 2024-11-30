import React, { useState } from 'react';
import InputField2 from '../ui/inputFieldNew.jsx';
import { createBooking } from '../../services/bookingServices.js';

function BooknowPopup({ name, type, pkg, vendor_id, closePopup, pkgId }) {
    const [bookingDate, setBookingDate] = useState(null); // Store as Date object
    const [startTime, setStartTime] = useState('');
    const [guestCount, setGuestCount] = useState('');

    const handleBooking = async () => {
        try {
            const client_id = localStorage.getItem('id'); // Replace with actual client ID from authentication
            if (!client_id) {
                alert('Client not logged in. Please log in first.');
                return;
            }

            // console.log('Selected Date:', bookingDate);
            // console.log('Selected Time:', startTime);

            // Validate input
            if (!bookingDate || isNaN(bookingDate.getTime())) {
                alert('Please select a valid wedding date.');
                return;
            }

            if (!startTime) {
                alert('Please select a start time.');
                return;
            }
            if (!guestCount) {
                alert('Please enter the number of guests.');
                return;
            }

            // Format the date and time
            const formattedDate = bookingDate.toISOString().split('T')[0]; // YYYY-MM-DD
            const formattedTime = startTime;

            // Collect all the required fields
            const bookingData = {
                vendor_id,
                client_id,
                vendor_type: type,
                price: pkg.price,
                package_id: pkgId,
                package_name: pkg.name,
                booking_date: formattedDate,
                booking_time: formattedTime,
                guest_count: guestCount,
                status: 'Pending',
            };

            console.log('Booking Data:', bookingData);

            // Call the booking service
            await createBooking(bookingData);

            alert('Booking request submitted successfully!');
            closePopup();
        } catch (error) {
            console.error('Error creating booking:', error.message);
            alert('Failed to create booking. Please try again.');
        }
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex flex-col w-11/12 text-black bg-white md:w-2/3 lg:w-1/3 rounded-xl border border-[#FFDBC8] border-b-8 pb-5'>
                <button
                    className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                    onClick={closePopup}
                >
                    ✕
                </button>

                <h2 className='w-full mt-5 text-4xl font-bold text-center'>Book Now</h2>

                <div className='flex flex-col items-center w-full mt-10'>
                    {/* Vendor and Type Information */}
                    <div className='flex flex-col md:flex-row gap-5 lg:gap-2 w-[90%]'>
                   
                                            <div className="flex-1 bg-white opacity-70" style={{ pointerEvents: 'none' }}>
                        
                            <InputField2 id={1} name="Vendor Name" value={name} disabled />
                        </div>
                        <div className="flex-1 bg-white opacity-70" style={{ pointerEvents: 'none' }}>
                            <InputField2 id={2} name="Type" value={type} disabled />
                        </div>
                    </div>

                    {/* Package Details */}
                    <div className='flex flex-col md:flex-row gap-5 lg:gap-2 w-[90%] mt-4'>
                    <div className="flex-1 bg-white opacity-70" style={{ pointerEvents: 'none' }}>
                            <InputField2 id={3} name="Price" value={`${pkg.price}`} disabled />
                        </div>
                        <div className="flex-1 bg-white opacity-70" style={{ pointerEvents: 'none' }}>
                            <InputField2 id={4} name="Package Name" value={pkg.name} disabled />
                        </div>
                    </div>

                    {/* Booking Details */}
                    <div className='flex flex-col md:flex-row gap-5 lg:gap-2 w-[90%] mt-4'>
                        <div className="flex-1 bg-white">
                            <InputField2
                                id={5}
                                name="Wedding Date"
                                type="date"
                                value={bookingDate ? bookingDate.toISOString().split('T')[0] : ''}
                                onChange={(e) => setBookingDate(new Date(e.target.value))}
                            />
                        </div>
                        <div className="flex-1 bg-white">
                            <InputField2
                                id={6}
                                name="Start Time"
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 bg-white">
                            <InputField2
                                id={7}
                                name="Guest Count"
                                placeholder="Guest count"
                                type="number"
                                value={guestCount}
                                onChange={(e) => setGuestCount(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Booking Button */}
                    <div className='mt-6 mb-4'>
                        <button
                            onClick={handleBooking}
                            className="border-0 rounded-full px-8 h-10 bg-custom-secondary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary"
                        >
                            Request Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooknowPopup;

