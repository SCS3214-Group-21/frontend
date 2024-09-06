import React, { useState } from 'react';
import StarRating from './ui/StarRating';
import CustomGrayButton from './ui/CustomGrayButton';
import SecondaryButton from './ui/SecondaryButton';

const ClientFloralVendorDetails = ({
    vendorName,
    location,
    email,
    rating,
    defaultColor,
    images,
    colorOptions,
    description,
    rentalTerms,
    paymentTerms,
    basePrice
}) => {
    const [isRentalTermsVisible, setIsRentalTermsVisible] = useState(false);
    const [isPaymentTermsVisible, setIsPaymentTermsVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(defaultColor); // Default color
    const [mainImage, setMainImage] = useState(images[defaultColor]?.main || images[defaultColor]?.small[0]); // Default image
    const [smallImages, setSmallImages] = useState(images[defaultColor]?.small || []);
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

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setMainImage(images[color]?.main || images[defaultColor]?.main);
        setSmallImages(images[color]?.small || images[defaultColor]?.small);
        setPrice(images[color]?.price || basePrice);
    };

    return (
        <div className="flex flex-col p-8 mt-10 bg-white border-b-4 text-black border-[#FFDBC8] rounded-lg shadow-md relative md:mx-24 lg:mx-10 xl:mx-10 mb-6 w-full max-w-[1500px] mx-auto">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col items-center justify-center p-4 space-y-4 lg:w-1/2">
                    {[mainImage, ...smallImages].map((image, index) => (
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
                            <b>{quantity * price} LKR</b>
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 p-4 lg:grid-cols-3 md:grid-cols-3 md:p-8'>
                        {colorOptions.map((color) => (
                            <CustomGrayButton key={color} text={color} onClick={() => handleColorChange(color)} />
                        ))}
                    </div>
                    <p className='textarea-xs'>{description}</p>
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
                </div>
            </div>
        </div>
    );
};

export default ClientFloralVendorDetails;
