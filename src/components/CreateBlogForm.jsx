import React, { useState } from 'react';
import InputField2 from './ui/InputField2';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';
import FileInputField from './ui/FileInputField';
import TextAreaField from './ui/TextAreaField';

function CreateBlogForm() {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Selected file:", file);
    };
    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
            <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5 md:px-[5%]'>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Title "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5 md:px-[5%]'>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Bride's Name "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Groom's Name "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Wedding Date"}
                            placeholder={"yyyy/mm/dd"}
                            type={"date"}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5 md:px-[5%]'>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Wedding Location "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2 
                            id={1}
                            name={"Wedding Theme "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='w-full'>
                        <FileInputField
                            id="file-upload"
                            name="Upload Image"
                            accept=".png, .jpg"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                <div className="w-full h-40 p-3 px-5 md:px-[5%]">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="Description"
                        height="100px" // Pass the height as a prop
                    />
                </div>
                <div className="w-full h-40 p-3 px-5 md:px-[5%]">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="Description"
                        height="100px" // Pass the height as a prop
                    />
                </div>
                <div className="w-full h-40 p-3 px-5 md:px-[5%]">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="Description"
                        height="100px" // Pass the height as a prop
                    />
                </div>
                
                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5'>
                    {/* <PrimaryNoneFillButton 
                    text={"Reset"} 
                    link={"/planbudget"}
                    />

                    <PrimaryButton 
                    text={"Save Changes"} 
                    link={"/"}
                    /> */}
                </div>
            </form>
        </div>
    );
}

export default CreateBlogForm;
