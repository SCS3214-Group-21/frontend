import React, { useState } from 'react';
import Breadcrumb from '../../components_depr/ui/Breadcrumb';
import RegisterHeader from '../../components_depr/common/RegisterHeader';
import ClientSidebar from '../../components_depr/ClientSidebar';
import StarRating from '../../components_depr/ui/StarRating';
import SecondaryButton from '../../components_depr/ui/SecondaryButton';
import SelectField from '../../components_depr/ui/SelectField';

const CarsVendorDetails = () => {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/allvendors' },
        { label: 'Cars', href: '/allcars' },
        { label: 'Mercedez' },
    ];

    const vendorDetails = {
        vendorName: 'Mercedez',
        location: 'Dream Blooms, Galle Road, Colombo 7',
        email: 'obcakes@gmail.com',
        rating: 4,
        images: ['cars.png', 'cars.png', 'cars.png', 'cars.png'],
        description: 'Luxury cars available for rent with driver and without driver options.',
        rentalTerms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut quam vestibulum.',
        paymentTerms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia est ac sapien.',
        basePrice: 20000,
        packageOptions: [
            { value: 'with_driver', label: 'With Driver' },
            { value: 'without_driver', label: 'Without Driver' }
        ]
    };

    const { vendorName, location, email, rating, images, description, rentalTerms, paymentTerms, basePrice, packageOptions } = vendorDetails;

    const [isRentalTermsVisible, setIsRentalTermsVisible] = useState(false);
    const [isPaymentTermsVisible, setIsPaymentTermsVisible] = useState(false);

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
                        <h1 className='text-4xl font-bold text-custom-primary'>Wedding Car</h1>
                    </div>
                    <div className='w-full bg-white border text-black border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col gap-10 sm:gap-5 flex-wrap'>
                        <div className="relative flex flex-col gap-10 mt-10 lg:flex-row">
                            <div className="flex flex-col items-center lg:w-1/2">
                                <img src={`../src/assets/images/Images/${images[0]}`} alt="Main" className="w-full h-auto max-w-md rounded-lg" />
                                <div className="flex mt-4 space-x-2 lg:mt-10">
                                    {images.slice(1).map((image, index) => (
                                        <img key={index} src={`../src/assets/images/Images/${image}`} alt={`Small ${index + 1}`} className="object-cover w-20 h-20 rounded-lg cursor-pointer" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col lg:w-1/2">
                                <h2 className="font-bold text-5xl text-[#A57E17]">{vendorName}</h2>
                                <p className="mt-4 text-black">
                                    {location}<br />
                                    {email}<br />
                                    <StarRating starCount={rating} /><br />
                                </p>
                                <p className='mt-4 text-black'>{description}</p>
                                <div className="flex flex-col mt-4 ">
                                    <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsRentalTermsVisible(!isRentalTermsVisible)}>
                                        <p className='ml-4 '>RENTAL TERMS</p>
                                        <svg className={`w-6 h-6 transform transition-transform ${isRentalTermsVisible ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                    {isRentalTermsVisible && <p className="mt-2 ml-4">{rentalTerms}</p>}
                                    <div className="flex items-center justify-between mt-4 cursor-pointer" onClick={() => setIsPaymentTermsVisible(!isPaymentTermsVisible)}>
                                        <p className='ml-4'>PAYMENT TERMS</p>
                                        <svg className={`w-6 h-6 transform transition-transform ${isPaymentTermsVisible ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                    {isPaymentTermsVisible && <p className="mt-2 ml-4">{paymentTerms}</p>}
                                </div>
                                <div className="flex mt-4">
                                    <SecondaryButton text="Check Availability" />
                                </div>
                                <div className="flex flex-row mt-6">
                                    <p className="mt-2 text-2xl font-bold">{basePrice} LKR <span className='text-sm font-semibold'>price per day</span></p>

                                    <div className='w-1/3 ml-8' >


                                        <SelectField
                                            id="select-input"
                                            name="Package Category"
                                            options={packageOptions}
                                        />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarsVendorDetails;
