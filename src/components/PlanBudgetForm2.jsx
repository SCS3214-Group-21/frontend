import React, { useState } from 'react';
import CustomPinkButton from './ui/CustomPinkButton';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';
import SelectedService from './SelectedServices';
import ChangePackages from './ChangePackages';

function PlanBudgetForm2() {
    const [showSelectedServicePopup, setShowSelectedServicePopup] = useState(false);
    const [showChangePackagesPopup, setShowChangePackagesPopup] = useState(false);

    const handleViewClick = () => {
        setShowSelectedServicePopup(true);
    };

    const handleCloseSelectedServicePopup = () => {
        setShowSelectedServicePopup(false);
    };

    const handleChangeClick = () => {
        setShowChangePackagesPopup(true);
    };

    const handleCloseChangePackagesPopup = () => {
        setShowChangePackagesPopup(false);
    };

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5'>
                {/* Example of one of the service sections */}
                <div className='w-full flex flex-row justify-start items-center gap-5 mb-5 border-black border p-2'>
                    <div className='w-full flex flex-row flex-wrap justify-start gap-8'>
                        <h1 className='text-black text-2xl'>Photography</h1>
                        <h1 className='text-black text-xl'>Suggest Package: <span className='text-lg'>Package 01</span></h1>
                    </div>
                    <div className='w-full flex flex-row flex-wrap justify-end items-center gap-5'>
                        <CustomPinkButton text={"view"} onClick={handleViewClick} />
                        <CustomPinkButton text={"change"} onClick={handleChangeClick} />
                    </div>
                </div>

                {/* Repeat similar blocks for other services */}

                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 py-3'>
                    <PrimaryNoneFillButton text={"Reset"} link={"/planbudget"} />
                    <PrimaryButton text={"Save"} link={"/planbudget2"} />
                </div>
            </form>

            {/* Conditionally render the SelectedService component */}
            {showSelectedServicePopup && (
                <SelectedService 
                    onClose={handleCloseSelectedServicePopup}
                />
            )}

            {/* Conditionally render the ChangePackages component */}
            {showChangePackagesPopup && (
                <ChangePackages 
                    onClose={handleCloseChangePackagesPopup}
                />
            )}
        </div>
    );
}

export default PlanBudgetForm2;
