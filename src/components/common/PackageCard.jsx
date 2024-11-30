import React, { useState } from 'react';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import { ChangeStatus } from '../../services/packageService';
import { ChangeBudgetStatus } from '../../services/budgetServices';
import Swal from 'sweetalert2';

function PackageCard(props) {
    const { img, text, button, link, id, showToggle1 = true, showToggle2 = true, initialIsEnabled } = props;  // Add showToggle prop with default value true
    const [isDisabled, setIsDisabled] = useState(initialIsEnabled);
    const [isDisabledBudget, setIsDisabledBudget] =useState(initialIsEnabled);
    const [isLoading, setIsLoading] = useState(false);

    const toggleDisabled1 = async () => {
        try {
            await ChangeStatus(id); // Call the service
            setIsDisabled((prevState) => !prevState); // Update UI on success
        } catch (error) {
            console.error('Failed to toggle package status:', error.message);
            // alert('Failed to update the package status. Please try again.');
            Swal.fire({
                icon: 'error',
                title: 'Failed to Update package',
                text: 'Failed to update the package status. Please try again.',
                confirmButtonText: 'OK',
            });
        }
    };      

    const toggleDisabled2 = async () => {
        if (isLoading) return; // Prevent double-clicking
        setIsLoading(true);
    
        if (isDisabledBudget == 1) {
            // Show SweetAlert for already active status
            Swal.fire({
                icon: 'info',
                title: 'Already Active',
                text: 'This budget is already active.',
                confirmButtonText: 'OK',
            });
            setIsLoading(false); // Reset loading state after alert
            return;
        }
    
        try {
            await ChangeBudgetStatus(id); // Call the service
            setIsDisabledBudget((prevState) => !prevState); // Update UI on success
            Swal.fire({
                icon: 'success',
                title: 'Budget Status Updated',
                text: 'The selected budget is now active.',
                confirmButtonText: 'OK',
            });
            window.location.reload(); // Reload the page to reflect the updated status
        } catch (error) {
            console.error('Failed to toggle budget status:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Failed to Update Budget',
                text: 'Failed to update the budget status. Please try again.',
                confirmButtonText: 'OK',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative w-full h-full bg-white rounded-lg shadow-md flex flex-col gap-3 items-center justify-center border border-custom-primary">
            {/* Conditionally render Sliding Toggle Switch */}
            {showToggle1 && (
                <div className="absolute top-2 right-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={!isDisabled} onChange={toggleDisabled1} className="sr-only peer" />
                        <div className="w-11 h-6 bg-custom-primary rounded-full peer peer-checked:bg-red-500 peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                </div>
            )}
            {showToggle2 && (
                <div className="absolute top-2 right-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={!isDisabledBudget} onChange={toggleDisabled2} className="sr-only peer" />
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
