import React, { useState } from 'react';
import CustomPinkButton from '../ui/CustomPinkButton';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import PrimaryButton from '../ui/PrimaryButton';
import SelectedService from '../SelectedServices';
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
                <div className='flex flex-row items-center justify-start w-full gap-5 p-2 mb-5 border border-black'>
                    <div className='flex flex-row flex-wrap justify-start w-full gap-8'>
                        <h1 className='text-2xl text-black'>Photography</h1>
                        <h1 className='text-xl text-black'>Suggest Package: <span className='text-lg'>Package 01</span></h1>
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-end w-full gap-5'>
                        <CustomPinkButton text={"view"} onClick={handleViewClick} />
                        <CustomPinkButton text={"change"} onClick={handleChangeClick} />
                    </div>
                </div>

                {/* Repeat similar blocks for other services */}

                <div className='flex flex-wrap items-center justify-end gap-2 py-3 sm:gap-5'>
                    <PrimaryNoneFillButton text={"Reset"} link={"/client/planbudget"} />
                    <PrimaryButton text={"Save"} link={"/client/viewbudget"} />
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
