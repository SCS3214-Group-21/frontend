import React, { useState } from 'react';
import StarRating from './ui/StarRating';
import SecondaryButton from './ui/SecondaryButton';

const ClientCarsVendorDetails = ({
    vendorName,
    location,
    email,
    rating,
    defaultImage,
    images,
    description,
    rentalTerms,
    paymentTerms,
    basePrice,
    packageOptions
}) => {
    const [isRentalTermsVisible, setIsRentalTermsVisible] = useState(false);
    const [isPaymentTermsVisible, setIsPaymentTermsVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedPackage, setSelectedPackage] = useState(packageOptions[0].name); // Default package
    const [price, setPrice] = useState(basePrice);

    const handleToggleRentalTerms = () => {
        setIsRentalTermsVisible(!isRentalTermsVisible);
    };

    const handleTogglePaymentTerms = () => {
        setIsPaymentTermsVisible(!isPaymentTermsVisible);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePackageChange = (event) => {
        const selectedOption = packageOptions.find(option => option.name === event.target.value);
        setSelectedPackage(selectedOption.name);
        setPrice(selectedOption.price);
    };

    return (
        <div className="flex flex-col p-8 mt-10 bg-white border-b-4 text-black border-[#FFDBC8] rounded-lg shadow-md relative md:mx-24 lg:mx-10 xl:mx-10 mb-6 w-full max-w-[1500px] mx-auto">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col items-center justify-center p-4 space-y-4 lg:w-1/2">
                    {images.map((image, index) => (
                        <img key={index} className="object-cover w-full h-auto max-w-md rounded-lg" src={`../src/assets/images/Images/${image}`} alt={`Image ${index + 1}`} />
                    ))}
                </div>
                <div className="flex flex-col justify-between flex-1 p-4">
                    <div>
                        <h2 className="font-bold text-5xl text-[#A57E17] lg:whitespace-nowrap">{vendorName}</h2>
                        <p className="mt-4 text-black">
                            {location}<br />
                            {email}<br />
                            <StarRating starCount={rating} /><br />
                        </p>
                    </div>
                    <p className='mt-4 textarea-xs'>{description}</p>
                    <div className="flex flex-col w-full">
                        <div className="divider"></div>
                        <div className="flex items-center justify-between cursor-pointer" onClick={handleToggleRentalTerms}>
                            <p className='ml-4'>RENTAL TERMS</p>
                            <svg className={`w-6 h-6 transform transition-transform ${isRentalTermsVisible ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        {isRentalTermsVisible && (
                            <div className="mt-2 ml-4">
                                <p>{rentalTerms}</p>
                            </div>
                        )}
                        <div className="mt-4 divider"></div>
                        <div className="flex items-center justify-between cursor-pointer" onClick={handleTogglePaymentTerms}>
                            <p className='ml-4'>PAYMENT TERMS</p>
                            <svg className={`w-6 h-6 transform transition-transform ${isPaymentTermsVisible ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        {isPaymentTermsVisible && (
                            <div className="mt-2 ml-4">
                                <p>{paymentTerms}</p>
                            </div>
                        )}
                        <div className="mt-4 divider"></div>
                    </div>
                    <div className="flex flex-col w-full mt-4">
                        <label htmlFor="package" className="text-lg font-bold">Select Package:</label>
                        <select
                            id="package"
                            value={selectedPackage}
                            onChange={handlePackageChange}
                            className="p-2 mt-2 border rounded"
                        >
                            {packageOptions.map((option, index) => (
                                <option key={index} value={option.name}>{option.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className='flex items-center space-x-4'>
                            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F0DFD7] hover:ring-2 hover:ring-[#A57E17]" onClick={handleDecrement}>
                                <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                </svg>
                            </button>
                            <div className='font-bold text-black'>{quantity}</div>
                            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F0DFD7] hover:bg-[#dbc9c0] hover:ring-2 hover:ring-[#A57E17]" onClick={handleIncrement}>
                                <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14" />
                                </svg>
                            </button>
                            <SecondaryButton text="Check Availability" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <b>{quantity * price} LKR per day</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientCarsVendorDetails;
