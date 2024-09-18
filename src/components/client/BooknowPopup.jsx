import React from 'react';
import InputField2 from '../ui/InputField2';
import SecondaryButton from '../ui/SecondaryButton';

function BooknowPopup({ closePopup, name, type, pkg }) {
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
                    <div className='flex flex-col md:flex-row gap-5 lg:gap-2 w-[90%]'>
                        <div className="flex-1 bg-white opacity-70" style={{ pointerEvents: 'none' }}>
                            <InputField2
                                id={1}
                                name={"Vendor Name "}
                                placeholder={name}
                            />
                        </div>
                        <div className="flex-1 bg-white opacity-70" style={{ pointerEvents: 'none' }}>
                            <InputField2
                                id={2}
                                name={"Type "}
                                placeholder={type}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 lg:gap-2 w-[90%] mt-4'>
                        <div className="flex-1 bg-white opacity-70" style={{ pointerEvents: 'none' }}>
                            <InputField2
                                id={3}
                                name={"Price "}
                                placeholder={pkg.price}
                            />
                        </div>
                        <div className="flex-1 bg-white opacity-70" style={{ pointerEvents: 'none' }}>
                            <InputField2
                                id={4}
                                name={"Package Name "}
                                placeholder={pkg.name}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 lg:gap-2 w-[90%] mt-4'>
                        <div className="flex-1 bg-white ">
                            <InputField2
                                id={5}
                                name={"Wedding Date"}
                                placeholder={"yyyy/mm/dd"}
                                type={"date"}
                            />
                        </div>
                        <div className="flex-1 bg-white">
                            <InputField2
                                id={6}
                                name={"Start Time"}

                                type={"time"}
                            />
                        </div>
                        <div className="flex-1 bg-white ">
                            <InputField2
                                id={7}
                                name={"Guest Count"}
                                placeholder={"200"}
                                type={"text"}
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-4'>
                        <SecondaryButton text="Request Booking" link={"/bookings"} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BooknowPopup;
