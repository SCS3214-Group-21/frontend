import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';

function RegisterType({ onClose }) {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex flex-col w-11/12 bg-white md:w-2/3 lg:w-1/2 rounded-xl md:flex-row'>
                <button
                    className="absolute w-8 h-8 text-3xl text-gray-500 transition-transform duration-300 transform rounded-full top-2 right-2 hover:text-gray-700 hover:bg-custom-primary hover:rotate-180"
                    onClick={onClose}
                >
                    &times; {/* This represents the close icon */}
                </button>
                <div className='flex flex-col items-center justify-center w-full gap-5 p-10 border-b-2 md:w-1/2 md:border-b-0 md:border-r-2'>
                    <h1 className="font-sans text-2xl font-normal text-black">As A Client</h1>
                    <ul className="text-black list-disc text-md">
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                    </ul>
                    <PrimaryButton
                        text={"Register"}
                        link={"/register"}
                    />
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-5 p-10 border-t-2 md:w-1/2 md:border-t-0 md:border-l-2'>
                    <h1 className="font-sans text-2xl font-normal text-black">As A Service Provider</h1>
                    <ul className="text-black list-disc text-md">
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                    </ul>
                    <PrimaryButton
                        text={"Register"}
                        link={"/vendorregister"}
                    />
                </div>
            </div>
        </div>
    );
}

export default RegisterType;
