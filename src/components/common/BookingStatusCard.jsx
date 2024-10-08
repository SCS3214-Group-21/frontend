import React from 'react'
import SecondaryButton from '../ui/SecondaryButton'
import StatusButton from '../ui/StatusButton'
import { Link } from 'react-router-dom';

function BookingStatusCard(props) {
    const { vendorname, date, status, expiration, vendortype, packagename, price, guestcount, totalamount } = props;

    // Object containing the details to pass to the Booking Details page
    const bookingDetails = {
        vendorname,
        vendortype,
        packagename,
        date,
        price,
        guestcount,
        totalamount,
        status,
    };

    return (
        <div className='w-full p-2 lg:p-4 mt-4 rounded-xl bg-[#FFDBC8] bg-opacity-30 text-black border-2 border-[#FFDBC8]'>
            <div className='flex flex-col mx-1 lg:flex-row lg:mx-4'>
                <div className="w-20 ml-2 rounded-full lg:w-10">
                    <img
                        alt="Avatar"
                        src="../../src/assets/images/Images/Profile.png"
                    />
                </div>
                <div className='mx-6 text-2xl'>
                    {vendorname}
                    <span className='ml-2 text-sm text-gray-600 lg:ml-10'>
                        {date}
                    </span>
                </div>
                <div className='mt-2 ml-6 lg:ml-2'><StatusButton status={status} /></div>
                <div className='mt-2 ml-6 lg:ml-10'>
                    {status === 'Accepted' && expiration && (
                        <div className="mt-2 text-sm lg:mt-0">
                            Expired in: <span className="font-bold text-red-600">{expiration}</span>
                        </div>
                    )}
                </div>
                <div className='absolute right-10 lg:right-16'>
                    {/*after create db this can use <SecondaryButton text="View" link="/bookingdetails" />*/}
                    <Link to="./bookingdetails" state={bookingDetails}>
                        <button className="px-6 border-0 rounded-full h-8 mt-1 bg-custom-blue-dark text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:from-custom-gray hover:via-custom-gray hover:to-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary">
                            View
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookingStatusCard;
