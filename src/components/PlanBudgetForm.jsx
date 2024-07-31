import React, { useState } from 'react';
import InputField2 from './ui/InputField2';
import SelectField from './ui/SelectField';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';
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
                <div className='flex flex-col w-full gap-5 p-3 px-5 md:flex-row lg:gap-20'>
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
                                { value: 'low', label: 'Low' },
                                { value: 'medium', label: 'Medium' },
                                { value: 'luxury', label: 'Luxury' }
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
                <div className='flex flex-col w-full gap-5 p-3 px-5 md:flex-row lg:gap-20'>
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
                                { value: 'Colombo', label: 'Colombo' },
                                { value: 'Matara', label: 'Matara' }
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
                <div className="relative w-full p-3 px-5">
                    <h1 className="relative bg-[#FFF8F5] text-black font-medium text-[1rem] top-[0.5rem] ml-[7px] px-[3px] w-fit">Services</h1>
                    <div className='flex flex-row flex-wrap items-center justify-start gap-10 p-10 border-[1px] border-black w-full bg-[#FFF8F5] rounded-lg'>
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
                        <CheckboxField
                            id="dj"
                            label="Dj"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('dj')}
                        />
                        <CheckboxField
                            id="ashtaka"
                            label="Ashtaka"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('ashtaka')}
                        />
                        <CheckboxField
                            id="salon"
                            label="Salon"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('salon')}
                        />
                        <CheckboxField
                            id="salon"
                            label="Invitation Cards"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('salon')}
                        />
                        <CheckboxField
                            id="salon"
                            label="Dancing Groups"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('salon')}
                        />
                        <CheckboxField
                            id="salon"
                            label="Poruwa"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('salon')}
                        />
                        <CheckboxField
                            id="salon"
                            label="Catering"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('salon')}
                        />
                        <CheckboxField
                            id="salon"
                            label="Honeymoon Hotels"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('salon')}
                        />
                        <CheckboxField
                            id="salon"
                            label="Dressers"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('salon')}
                        />
                        <CheckboxField
                            id="salon"
                            label="Jewellery"
                            checked={checkboxes.cakes}
                            onChange={handleCheckboxChange('salon')}
                        />
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-end gap-2 p-3 px-5 sm:gap-5'>
                    <PrimaryNoneFillButton
                        text={"Reset"}
                        link={"/planbudget"}
                    />

                    <PrimaryButton
                        text={"Save Changes"}
                        link={"/"}
                    />
                </div>
            </form>
        </div>
    );
}

export default PlanBudgetForm;
