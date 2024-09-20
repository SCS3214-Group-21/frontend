import React, { useState } from 'react';
import PrimaryButton from '../ui/PrimaryButton';

function ChangeBudget({ onClose, setAllocatedPrices, setRemainingBudget }) {
    const [inputValue, setInputValue] = useState('');
    const [action, setAction] = useState('add'); // 'add' or 'remove'
    const [selectedService, setSelectedService] = useState('hotels'); // Example service

    const handleOkClick = () => {
        const value = parseFloat(inputValue) || 0;

        setAllocatedPrices((prev) => {
            const updatedPrices = { ...prev };
            const totalAllocated = Object.values(updatedPrices).reduce((acc, curr) => acc + curr, 0);

            if (action === 'add') {
                updatedPrices[selectedService] = (updatedPrices[selectedService] || 0) + value;
                setRemainingBudget((prev) => prev - value);
            } else {
                updatedPrices[selectedService] = Math.max((updatedPrices[selectedService] || 0) - value, 0);
                setRemainingBudget((prev) => prev + value);
            }

            return updatedPrices;
        });
        onClose(); // Close the popup
    };

    const toggleAction = () => {
        setAction((prevAction) => (prevAction === 'add' ? 'remove' : 'add'));
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
                <h1 className="text-black font-sans font-semibold text-2xl text-center">Change Budget</h1>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex flex-col md:flex-row items-center gap-4 w-full'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full md:w-3/5 p-3 border border-black rounded-lg shadow-md bg-[#FFF8F5] text-black"
                            placeholder="Enter amount"
                        />
                        <button
                            onClick={toggleAction}
                            className={`w-full md:w-2/5 p-3 rounded-lg border-2 transition-all duration-300
                                ${action === 'add' ? 
                                    'border-green-500 bg-green-100 text-green-700 hover:bg-green-200' : 
                                    'border-red-500 bg-red-100 text-red-700 hover:bg-red-200'
                                }`}
                        >
                            {action === 'add' ? 'Switch to Remove' : 'Switch to Add'}
                        </button>
                    </div>
                    <PrimaryButton onClick={handleOkClick} text="OK" />
                </div>
            </div>
        </div>
    );
}

export default ChangeBudget;
