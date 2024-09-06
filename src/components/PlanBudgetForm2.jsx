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

    const serviceDetails = [
        { name: 'Photography', package: 'Package 01' },
        { name: 'Cake', package: 'Package 02' },
        { name: 'Wedding', package: 'Package 05' },
        { name: 'Hotel', package: 'Package 10' },
        { name: 'DJs', package: 'Package 23' },
        { name: 'Dancing', package: 'Package 04' }
    ];

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5'>
                {/* Loop through serviceDetails to create service sections */}
                {serviceDetails.map((service, index) => (
                    <div key={index} className='w-full flex flex-row justify-start items-center gap-5 mb-5 border-black border p-2'>
                        <div className='w-full flex flex-row flex-wrap justify-start gap-8'>
                            <h1 className='text-black text-2xl'>{service.name}</h1>
                            <h1 className='text-black text-xl'>Suggest Package: <span className='text-lg'>{service.package}</span></h1>
                        </div>
                        <div className='w-full flex flex-row flex-wrap justify-end items-center gap-5'>
                            <CustomPinkButton text={"view"} onClick={handleViewClick} />
                            <CustomPinkButton text={"change"} onClick={handleChangeClick} />
                        </div>
                    </div>
                ))}

                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 py-3'>
                    <PrimaryNoneFillButton text={"Reset"} link={"/planbudget"} />
                    <PrimaryButton text={"Save"} link={"/budget"} />
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
