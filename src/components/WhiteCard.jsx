import React, { useState } from 'react';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';

function WhiteCard() {
    // State to manage the checkboxes
    return (
        <div>
            <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5'>
            <div className='w-full bg-[#FFDBC8] rounded-xl  pb-5'>
                    <div className='w-full'>   
                    <div className='w-full'>   
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row items-center gap-1'>
                                <div className='w-10 h-10 bg-[#FFDBC8] rounded-full flex items-center justify-center'>
                                    <img src='src/assets/Images/Icons/FbIcon.png' alt='icon' />
                                </div>
                                <h1 className='text-3xl font-bold text-[#FFDBC8]'>Bookings</h1>
                            </div>
                            <div className='flex flex-row items-center gap-5'>
                                <PrimaryButton text='View' />
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                    
                </div>
            </div>
        </div>
    );
}

export default WhiteCard;
