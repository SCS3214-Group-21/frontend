import React from 'react';
import InputField2 from './ui/InputField2';
import SelectField from './ui/SelectField';
import TextAreaField from './ui/TextAreaField';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';

function CreatePackageForm() {
    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5'>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Package Name "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <SelectField 
                        id="select-input" 
                        name="Package Category" 
                        options={[
                            { value: 'Budget1', label: 'Budget 1' },
                            { value: 'Budget2', label: 'Budget 2' }
                        ]} 
                    />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Package Amount(Rs.)"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5'>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Item 1"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Item 2"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Item 3"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5'>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Item 4"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Item 5"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Item 6"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                </div>
                <div className='flex justify-end items-center p-3 px-5'>
                    <h5 className='text-custom-primary hover:underline cursor-pointer'>+ Add more item</h5>
                </div>
                <div className="w-full h-40 p-3 px-5">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="Package Description"
                        height="100px" // Pass the height as a prop
                    />
                </div>
                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5'>
                    <PrimaryNoneFillButton text={"Reset"} />
                    <PrimaryButton text={"Save Changes"} />
                </div>
            </form>
        </div>
    );
}

export default CreatePackageForm;