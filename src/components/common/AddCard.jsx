import React from 'react';

function AddCard() {
    return (        
        <div className="w-full h-full bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4 border border-custom-primary cursor-pointer hover:bg-custom-primary hover:bg-opacity-10 hover:shadow-lg transition duration-300">
        <div className="text-6xl text-custom-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path fillRule="evenodd" d="M12 3a1 1 0 01.993.883L13 4v7h7a1 1 0 01.117 1.993L20 13h-7v7a1 1 0 01-1.993.117L11 20v-7H4a1 1 0 01-.117-1.993L4 11h7V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
        </div>
        <div className="text-yellow-600 text-sm font-medium">Create Package</div>
        </div>
    );
}

export default AddCard;
