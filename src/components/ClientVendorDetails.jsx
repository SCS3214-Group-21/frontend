import React, { useState } from 'react';
import SecondaryNoneFillButton from './ui/SecondaryNoneFillButton';
import ServiceDescriptionCard from './common/ServiceDescriptionCard';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';

function ClientVendorDetails() {
    const [isOpen, setIsOpen] = useState(false); // Control modal visibility

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const packitems = [
        { label: 'Welcome Drinks', type: 'text', value: 'welcomeDrink' },
        { label: 'Complimentary Meal Tasting', type: 'text', value: 'mealTasting' },
        { label: 'Decorated Venue', type: 'text', value: 'decoratedVenue' },
        { label: 'Transportation Services', type: 'text', value: 'transportation' },
        { label: 'Open Bar', type: 'text', value: 'openBar' },
        { label: 'Cocktail Hour', type: 'text', value: 'cocktailHour' },
    ];

    return (
        <>
            <div className='flex-row shadow-lg'>
                <div className="shadow-sm card lg:card-side bg-base-100">
                    <figure>
                        <img className='h-full w-96'
                            src="../src/assets/images/Images/03.png"
                            alt="Album" />
                    </figure>
                    <div className="card-body bg-[#f9e9e3] text-black">
                        <h2 className="card-title font-bold text-6xl text-[#A57E17]">Shangri-la</h2>
                        <p>5 star hotel
                            <br />Colombo, Hambantota
                            <br />Shangri-la@gmail.com</p>
                        <div className='flex'>
                            <svg className="w-6 h-6 mr-3 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                            </svg>
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                            </svg>
                        </div>
                        <div className='mt-2 text-sm'>
                            <SecondaryNoneFillButton text="Photo Gallery" />
                        </div>
                    </div>
                </div>
                <div className='mt-10 ml-4 mr-4 text-black justify-items-center'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolores nostrum culpa similique voluptate?
                        Labore veniam magnam illum quisquam, eligendi cupiditate quos accusantium, adipisci, qui vel beatae. Accusantium,
                        impedit asperiores.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo cum voluptatum, facilis, sequi eaque iste blanditiis
                        eveniet aliquid, nesciunt quas soluta amet perspiciatis vel rem perferendis maxime impedit. Dolorem, ipsa?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolores nostrum culpa similique voluptate?
                        Labore veniam magnam illum quisquam, eligendi cupiditate quos accusantium, adipisci, qui vel beatae. Accusantium,
                        impedit asperiores.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo cum voluptatum, facilis, sequi eaque iste blanditiis
                        eveniet aliquid, nesciunt quas soluta amet perspiciatis vel rem perferendis maxime impedit. Dolorem, ipsa?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolores nostrum culpa similique voluptate?
                        Labore veniam magnam illum quisquam, eligendi cupiditate quos accusantium, adipisci, qui vel beatae. Accusantium,
                        impedit asperiores.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo cum voluptatum, facilis, sequi eaque iste blanditiis
                        eveniet aliquid, nesciunt quas soluta amet perspiciatis vel rem perferendis maxime impedit. Dolorem, ipsa?</p>
                </div>
                <div className="h-96">
                    <div className='flex justify-center mt-5 space-x-10 '>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                            <div onClick={openModal}>
                                <ServiceDescriptionCard
                                    href="#popup" img="../src/assets/images/Images/03.png" alt="shangrila" name="Package 01" price="Price per person 20000LKR" description="maximum 150 guests" showStars={false} />
                            </div>
                            <div onClick={openModal}>
                                <ServiceDescriptionCard
                                    href="#popup" img="../src/assets/images/Images/03.png" alt="shangrila" name="Package 01" price="Price per person 20000LKR" description="maximum 150 guests" showStars={false} />
                            </div>
                            <div onClick={openModal}>
                                <ServiceDescriptionCard
                                    href="#popup" img="../src/assets/images/Images/03.png" alt="shangrila" name="Package 01" price="Price per person 20000LKR" description="maximum 150 guests" showStars={false} />
                            </div>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="modal" role="dialog" id="popup">
                            <div className="modal-box bg-[#f9e9e3] text-black ">
                                <button
                                    className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                                    onClick={closeModal}
                                >
                                    ✕
                                </button>
                                <h3 className="text-lg font-bold text-">Package 01</h3>
                                <div className="grid grid-cols-2 gap-2 py-4 form-control">
                                    {packitems.map((items, index) => (
                                        <label key={index} className="cursor-pointer label">
                                            <span className="text-black label-text"> {items.label}</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                                className="checkbox border-[#A57E17] [--chkbg:#A57E17] [--chkfg:white] checked:border-[#A57E17]"
                                            />
                                        </label>
                                    ))}
                                </div>
                                <div className="relative mt-4">
                                    <div className="absolute -top-3 left-3 bg-[#f9e9e3] px-1">
                                        <span className="text-sm text-gray-700">Description</span>
                                    </div>
                                    <textarea className="w-full h-24 border-black bg-[#f9e9e3] textarea textarea-bordered"></textarea>
                                </div>
                                <div className='flex mt-4'>
                                    <PrimaryNoneFillButton text="Get quatation" />
                                    <div className="absolute mb-4 right-4 bottom">
                                        <SecondaryNoneFillButton text="Book Now!" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ClientVendorDetails;
