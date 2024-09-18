import React, { useState } from 'react';
import InputField2 from '../ui/InputField2';
import SelectField from '../ui/SelectField';
import TextAreaField from '../ui/TextAreaField';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import PrimaryButton from '../ui/PrimaryButton';
import Swal from 'sweetalert2';

function UpdatePackageForm() {
    const [items, setItems] = useState([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" },
        { id: 6, name: "Item 6" }
    ]);

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Item ${items.length + 1}`
        };
        setItems([...items, newItem]);
    };

    const removeItem = (id) => {
        if (items.length > 1) {
            const newItems = items.filter(item => item.id !== id);
            const renamedItems = newItems.map((item, index) => ({
                ...item,
                name: `Item ${index + 1}`,
                id: index + 1
            }));
            setItems(renamedItems);
        } else {
            Swal.fire({
                title: 'Warning',
                text: 'At least one item should exist.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                <div className='flex flex-col w-full gap-5 p-3 px-5 md:flex-row lg:gap-20'>
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
                <div className='flex flex-col md:flex-row flex-wrap gap-[5%] justify-start items-center w-full p-3 px-5'>
                    {items.map((item, index) => (
                        <div className='md:w-[30%] w-full relative ' key={index}>
                            <InputField2
                                id={item.id}
                                name={item.name}
                                placeholder={"Input"}
                                type={"text"}
                            />
                            <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="absolute top-0 right-0 font-bold text-red-500 text-md"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-end p-3 px-5'>
                    <h5 className='cursor-pointer text-custom-primary hover:underline' onClick={addItem}>+ Add more item</h5>
                </div>
                <div className="w-full h-40 p-3 px-5">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="Package Description"
                        height="100px" // Pass the height as a prop
                    />
                </div>
                <div className='flex flex-wrap items-center justify-end gap-2 p-3 px-5 sm:gap-5'>
                    <PrimaryNoneFillButton text={"Reset"} />
                    <PrimaryButton text={"Update"} />
                </div>
            </form>
        </div>
    );
}

export default UpdatePackageForm;
