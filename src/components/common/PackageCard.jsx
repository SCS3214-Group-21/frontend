import React, { useState } from 'react';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import { ChangeStatus } from '../../services/packageService';

function PackageCard(props) {
    const { img, text, button, link, id, showToggle = true, initialIsEnabled } = props;  // Add showToggle prop with default value true
    const [isDisabled, setIsDisabled] = useState(initialIsEnabled);

    const toggleDisabled = async () => {
        try {
            await ChangeStatus(id); // Call the service
            setIsDisabled((prevState) => !prevState); // Update UI on success
        } catch (error) {
            console.error('Failed to toggle package status:', error.message);
            alert('Failed to update the package status. Please try again.');
        }
    };      

    return (
        <div className="relative w-full h-full bg-white rounded-lg shadow-md flex flex-col gap-3 items-center justify-center border border-custom-primary">
            {/* Conditionally render Sliding Toggle Switch */}
            {showToggle && (
                <div className="absolute top-2 right-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={!isDisabled} onChange={toggleDisabled} className="sr-only peer" />
                        <div className="w-11 h-6 bg-custom-primary rounded-full peer peer-checked:bg-red-500 peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                </div>
            )}

            <div className='p-1'>
            <a href={`${img}`} target="_blank" rel="noopener noreferrer">
                <img src={img} className='rounded-lg w-40 h-28'/>
            </a>
            </div>
            <div className="text-black text-sm font-medium">{text}</div>
            <div className='p-1'>
                <PrimaryNoneFillButton 
                    link={link}
                    text={button}
                    disabled={isDisabled}  // Pass the disabled state to the button
                />
            </div>
        </div>
    );
}

export default PackageCard;
