import React, { useState } from 'react';
import InputField2 from './ui/InputField2';
import TextAreaField from './ui/TextAreaField';

function BusinessDetailsForm() {
    const [items, setItems] = useState([ ]);

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Branch ${items.length + 1}`
        };
        setItems([...items, newItem]);
    };

    const removeItem = (id) => {
        const newItems = items.filter(item => item.id !== id);
        const renamedItems = newItems.map((item, index) => ({
            ...item,
            name: `Branch ${index + 1}`,
            id: index + 1
        }));
        setItems(renamedItems);
    };

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                <div className='w-full p-3 pt-10 px-5'>
                    <h1 className='text-black text-4xl'>Business Details</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center flex-wrap  gap-5 lg:gap-10 w-full p-3 px-5'>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"First Name "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Last Name "}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Business Name"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Contact Number"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Email"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Address"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"City"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Main Branch"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap gap-[5%] justify-center items-center w-full p-3 px-5'>
                    {items.map((item, index) => (
                        <div className='md:w-[45%] w-full relative ' key={index}>
                            <InputField2 
                                id={item.id}
                                name={item.name}
                                placeholder={"Input"}
                                type={"text"}
                            />
                            <button 
                                type="button" 
                                onClick={() => removeItem(item.id)}
                                className="font-bold text-md absolute top-0 right-0 text-red-500"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                <div className='flex justify-end items-center p-3 px-5 md:px-[5%]'>
                    <h5 className='text-custom-primary hover:underline cursor-pointer' onClick={addItem}>+ Add new branch</h5>
                </div>
                <div className="w-full h-40 p-3 px-5 md:px-[5%]">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="Description"
                        height="100px" // Pass the height as a prop
                    />
                </div>
            </form>
        </div>
    );
}

export default BusinessDetailsForm;
