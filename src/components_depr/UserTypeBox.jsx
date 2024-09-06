// src/components_depr/UserTypeBox.js
import React from 'react';
import { Link } from 'react-router-dom';

function UserTypeBox({ name, type, avatarSrc }) {
    const typeColor = type === 'Client' ? 'bg-custom-secondary' : 'bg-custom-primary';

    return (
        <div className='w-full p-2 lg:p-4 mt-4 rounded-xl bg-[#FFDBC8] bg-opacity-30 text-black border-2 border-[#FFDBC8]'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className="flex items-center lg:w-3/4">
                    <div className="w-20 ml-2 overflow-hidden rounded-full lg:w-10 lg:ml-4">
                        <img
                            alt="Avatar"
                            src={avatarSrc}
                        />
                    </div>
                    <div className='ml-6 text-2xl'>
                        {name}
                    </div>
                    <div className='ml-6'>
                        <div className={`inline-block px-5 py-1 text-xs font-medium text-center text-white border rounded-lg ${typeColor}`}>
                            {type}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end lg:w-1/4">
                    <Link to="#">
                        <button className="px-6 border-0 rounded-full h-8 mt-4 lg:mt-0 bg-custom-blue-dark text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary">
                            View
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserTypeBox;
