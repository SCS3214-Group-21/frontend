import React from 'react';
import PrimaryButton from './ui/PrimaryButton';

function SelectedService({ onClose }) {
    // Handle the OK button click
    const handleOkClick = () => {
        // Close the popup
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='relative w-11/12 md:w-1/2 lg:w-1/3 bg-white rounded-xl p-6 flex flex-col gap-6'>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl hover:bg-custom-primary rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={onClose}
                >
                    &times; {/* Close icon */}
                </button>
                <h1 className="text-black font-sans font-semibold text-2xl text-center">Package 01</h1>
                <div className='flex flex-col items-center gap-4'>
                    <div className="flex flex-row gap-5 w-full px-10">
                        <span className="text-black label-text w-1/2">Welcome Drinks</span>
                        <span className="text-black label-text w-1/2">Complimentary Meal Tasting</span>
                    </div>
                    <div className="flex flex-row gap-5 w-full px-10">
                        <span className="text-black label-text w-1/2">Welcome Drinks</span>
                        <span className="text-black label-text w-1/2">Complimentary Meal Tasting</span>
                    </div>
                    <div className="flex flex-row gap-5 w-full px-10">
                        <span className="text-black label-text w-1/2">Welcome Drinks</span>
                        <span className="text-black label-text w-1/2">Complimentary Meal Tasting</span>
                    </div>
                </div>
                <div className="text-black">
                    <p className="w-full border-black bg-[#f9e9e3] border p-2">
                        This is package more details in paragraph. I want to show how this works and this is give more better idea about the package
                    </p>
                </div>
                <h1 className="text-black font-sans font-semibold text-2xl text-center">20000 LKR per person</h1>
                <div className='w-full flex justify-center items-center'>
                    <PrimaryButton onClick={handleOkClick} text="Select" />
                </div>
            </div>
        </div>
    );
}

export default SelectedService;
