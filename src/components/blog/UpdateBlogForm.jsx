import React, { useState } from 'react';
import InputField2 from '../ui/InputField2';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import PrimaryButton from '../ui/PrimaryButton';
import FileInputField from '../ui/FileInputField';
import TextAreaField from '../ui/TextAreaField';

function UpdateBlogForm() {
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
                            value={"Love in Full Blooms - Navigating the Delicate Petals of Romance"}
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
                            value={"Chelsie Gallimore"}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2
                            id={1}
                            name={"Groom's Name "}
                            placeholder={"Input"}
                            type={"text"}
                            value={"Neville Gallimore"}
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
                            value={"Chantilly, Virginia "}
                        />
                    </div>
                    <div className='w-full'>
                        <InputField2
                            id={1}
                            name={"Wedding Theme "}
                            placeholder={"Input"}
                            type={"text"}
                            value={"Black and White Eleg"}
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
                        value=" On October 22, 2020, Neville arrived at a house gathering, and Chelsie opened the door for him. Instantly he thought, “Man, this girl’s beautiful. She’s amazing.” They talked a little at the gathering, but nothing came of it that night. A few days later, Neville reached out to Chelsie, and they got the chance to bond over their love for music and sports. It felt like they had known each other forever. After about a month, they were officially a couple. A year and a half later, Neville asked Chelsie to become his wife. This fun-loving couple tied the knot in an elegant, black-and-white wedding ceremony, followed by a reception that went viral! See all of the details of this wedding featured in the spring 2024 issue of Black Bride Magazine, and captured by Jamaal McKenzie and Paul McFall IV of Capital Films DC."
                    />
                </div>
                <div className="w-full h-40 p-3 px-5 md:px-[5%]">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="Briefly tell us about your wedding experience and how the both of you felt on your big day"
                        height="100px" // Pass the height as a prop
                        value=" On October 22, 2020, Neville arrived at a house gathering, and Chelsie opened the door for him. Instantly he thought, “Man, this girl’s beautiful. She’s amazing.” They talked a little at the gathering, but nothing came of it that night. A few days later, Neville reached out to Chelsie, and they got the chance to bond over their love for music and sports. It felt like they had known each other forever. After about a month, they were officially a couple. A year and a half later, Neville asked Chelsie to become his wife. This fun-loving couple tied the knot in an elegant, black-and-white wedding ceremony, followed by a reception that went viral! See all of the details of this wedding featured in the spring 2024 issue of Black Bride Magazine, and captured by Jamaal McKenzie and Paul McFall IV of Capital Films DC."
                    />
                </div>
                <div className="w-full h-40 p-3 px-5 md:px-[5%]">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="What are you most looking forward to as a married couple?"
                        height="100px" // Pass the height as a prop
                        value=" On October 22, 2020, Neville arrived at a house gathering, and Chelsie opened the door for him. Instantly he thought, “Man, this girl’s beautiful. She’s amazing.” They talked a little at the gathering, but nothing came of it that night. A few days later, Neville reached out to Chelsie, and they got the chance to bond over their love for music and sports. It felt like they had known each other forever. After about a month, they were officially a couple. A year and a half later, Neville asked Chelsie to become his wife. This fun-loving couple tied the knot in an elegant, black-and-white wedding ceremony, followed by a reception that went viral! See all of the details of this wedding featured in the spring 2024 issue of Black Bride Magazine, and captured by Jamaal McKenzie and Paul McFall IV of Capital Films DC."
                    />
                </div>

                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5 md:px-[5%]'>
                    <PrimaryNoneFillButton
                        text={"Reset"}
                        link={"/"}
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

export default UpdateBlogForm;
