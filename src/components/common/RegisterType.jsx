import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';

function RegisterType({ onClose }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='relative w-11/12 md:w-2/3 lg:w-1/2 bg-white rounded-xl flex flex-col md:flex-row'>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times; {/* This represents the close icon */}
                </button>
                <div className='w-full md:w-1/2 flex flex-col items-center justify-center gap-5 border-b-2 md:border-b-0 md:border-r-2 p-10'>
                    <h1 className="text-black font-sans font-normal text-2xl">As A Client</h1>
                    <ul className="list-disc text-black text-md">
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                    </ul>
                    <PrimaryButton 
                        text={"Register"}
                        link={"register"}
                    />
                </div>
                <div className='w-full md:w-1/2 flex flex-col items-center justify-center gap-5 border-t-2 md:border-t-0 md:border-l-2 p-10'>
                    <h1 className="text-black font-sans font-normal text-2xl">As A Service Provider</h1>
                    <ul className="list-disc text-black text-md">
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat</li>
                    </ul>
                    <PrimaryButton 
                        text={"Register"}
                        link={"vendorregister1"}
                    />
                </div>
            </div>
        </div>
    );
}

export default RegisterType;
