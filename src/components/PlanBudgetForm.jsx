import React, { useState } from 'react';
import InputField2 from './ui/InputField2';
import SelectField from './ui/SelectField';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';
import Swal from 'sweetalert2';
import CheckboxField from './ui/CheckboxField';

function PlanBudgetForm() {
    // State to manage the checkboxes
    const [checkboxes, setCheckboxes] = useState({
        photographers: false,
        hotels: false,
        weddingCars: false,
        floral: false,
        cakes: false,
    });

    const handleCheckboxChange = (key) => (checked) => {
        setCheckboxes(prev => ({
            ...prev,
            [key]: checked
        }));
    };

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5'>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Plan Name "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <SelectField 
                            id="select-input" 
                            name="Budget Category" 
                            options={[
                                { value: 'Budget1', label: 'Budget 1' },
                                { value: 'Budget2', label: 'Budget 2' }
                            ]} 
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Budget Amount(Rs.)"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5'>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Wedding Date"}
                            placeholder={"yyyy/mm/dd"}
                            type={"date"}
                        />
                    </div>
                    <div className='w-full'>
                        <SelectField 
                            id="select-input" 
                            name="City" 
                            options={[
                                { value: 'Budget1', label: 'Budget 1' },
                                { value: 'Budget2', label: 'Budget 2' }
                            ]} 
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Participant count"}
                            placeholder={"Input"}
                            type={"number"}
                        />
                    </div>
                </div>
                <div className="w-full p-3 px-5 relative">
                    <h1 className="relative bg-[#FFF8F5] text-black font-bold text-[0.75rem] top-[0.5rem] ml-[7px] px-[3px] w-fit z-10">Services</h1>
                    <div className='flex flex-row flex-wrap items-center justify-center gap-10 p-10 border-2 border-black w-full bg-[#FFF8F5] rounded-lg'>
                        <CheckboxField
                            id="photographers"
                            label="Photographers"
                            checked={checkboxes.photographers}
                            onChange={handleCheckboxChange('photographers')}
                        />
                        <CheckboxField
                            id="hotels"
                            label="Hotels"
                            checked={checkboxes.hotels}
                            onChange={handleCheckboxChange('hotels')}
                        />
                        <CheckboxField
                            id="weddingCars"
                            label="Wedding Cars"
                            checked={checkboxes.weddingCars}
                            onChange={handleCheckboxChange('weddingCars')}
                        />
                        <CheckboxField
                            id="floral"
                            label="Floral"
                            checked={checkboxes.floral}
                            onChange={handleCheckboxChange('floral')}
                        />
                        <CheckboxField
                            id="cakes"
                            label="Cakes"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('cakes')}
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5'>
                    {/* <PrimaryNoneFillButton text={"Reset"} />
                    <PrimaryButton text={"Save Changes"} /> */}
                </div>
            </form>
        </div>
    );
}

export default PlanBudgetForm;
