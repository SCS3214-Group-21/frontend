import React from 'react'
import RegisterHeader from '../../components/common/RegisterHeader'
import ClientSidebar from '../../components/client/ClientSidebar'
import Breadcrumb from '../../components/ui/Breadcrumb'
import BookingDetailsTable from '../../components/client/BookingDetailsTable';
import { useLocation } from 'react-router-dom';
import PrimaryNoneFillButton from '../../components/ui/PrimaryNoneFillButton';
import SecondaryButton from '../../components/ui/SecondaryButton';

import {loadStripe} from '@stripe/stripe-js';

function ClientBookingDetailsPage(props) {
    //after create db this location hook can remove
    const location = useLocation();
    const { vendorname, vendortype, packagename, date, price, guestcount, totalamount, status, vendorId } = location.state || {};


    const breadcrumbItems = [
        { label: 'My Wedding', href: './../mywedding' },
        { label: 'Bookings', href: '../bookings' },
        { label: 'Booking Details' },
    ];

const stripePromise = loadStripe('pk_test_51QMkG6Kt5ygtiLn42cdRHWwll1JzXghV4ErkCQyg4D4qnoCXeIPedgmhLajkEdZoXF2FwR9exiNxC7S0Cs4Qz7OM00GHOy17MB');

const makePayment = async () => {
    try {
        const stripe = await stripePromise;

        const bookingData = [
            { name: packagename, guest_Count: guestcount, booking_date: date, price: totalamount },
        ];

        const response = await fetch(`http://localhost:5000/payment/create-checkout-session`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                booking: bookingData,
                vendorId: vendorId  // Include vendor ID here
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch session ID');
        }

        const session = await response.json();

        if (session.id) {
            const result = await stripe.redirectToCheckout({ sessionId: session.id });
            if (result.error) console.error(result.error.message);
        } else {
            console.error('Session ID not received');
        }
    } catch (error) {
        console.error('Payment failed:', error.message);
    }
};


    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16 ">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Booking Details </h1>
                    </div>
                    <div className="relative flex items-center justify-center pb-5">
                        <div className='relative w-full lg:w-2/3 bg-white border  border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row  gap-10 sm:gap-5 flex-wrap text-black '>
                            <div className='absolute top-3 right-8'>
                                Status: <span className={status === 'pending' ? 'text-custom-primary font-bold' : 'text-custom-secondary font-bold'}>{status}</span>
                            </div>
                            <BookingDetailsTable vendorname={vendorname} vendortype={vendortype} packagename={packagename} bookingdate={date} price={price} guestcount={guestcount} totalamount={totalamount} />
                            <div className='absolute flex gap-4 px-2 py-1 text-sm right-8 bottom-4'>
                                <PrimaryNoneFillButton text="Cancel" link="/client/bookings" />
                                {/* <SecondaryButton text="Pay Now" link="#" /> */}
                                <button 
                                    onClick={makePayment}
                                    disabled={status === 'pending'} // Disable if status is "Pending"
                                    className={`border-0 rounded-full px-8 h-10 text-white transition-all duration-[600ms] ease-in-out font-semibold
                                        ${status === 'pending' 
                                        ? 'bg-gray-400 cursor-not-allowed'  // Disabled styling
                                        : 'bg-custom-secondary hover:bg-custom-gray hover:from-custom-gray hover:via-custom-gray hover:to-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary'
                                        }`}
                                    >
                                    Pay Now!
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientBookingDetailsPage
