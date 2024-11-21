import React, { useState } from 'react';
import InputField2 from '../ui/InputField2';
import TextAreaField from '../ui/TextAreaField';

function BusinessDetailsForm() {
    const [items, setItems] = useState([]);
    const [images, setImages] = useState([]); // State to manage image files

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

    const addImageInput = () => {
        if (images.length < 20) {
            setImages([...images, { id: images.length + 1, file: null }]);
        }
    };

    const handleImageChange = (id, file) => {
        setImages(images.map(image => image.id === id ? { ...image, file } : image));
    };


    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                <div className='w-full p-3 px-5 pt-10'>
                    <h1 className='text-4xl text-black'>Business Details</h1>
                </div>
                <div className='flex flex-col flex-wrap items-center justify-center w-full gap-5 p-3 px-5 md:flex-row lg:gap-10'>
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
                                className="absolute top-0 right-0 font-bold text-red-500 text-md"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                <div className='flex justify-end items-center p-3 px-5 md:px-[5%]'>
                    <h5 className='cursor-pointer text-custom-primary hover:underline' onClick={addItem}>+ Add new branch</h5>
                </div>

                <div className="w-full h-40 p-3 px-5 md:px-[5%]">
                    <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="Description"
                        height="100px" // Pass the height as a prop
                    />
                </div>

                {/* Dynamic Image Inputs */}
                <div className='w-full p-3 px-5'>
                    <h1 className='text-4xl text-black pb-5'>Images</h1>
                    {images.map((image, index) => (
                        <div key={image.id} className="flex items-center gap-5 mb-4">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(image.id, e.target.files[0])}
                                className="block w-full border rounded-lg p-2"
                            />
                            {image.file && (
                                <img
                                    src={URL.createObjectURL(image.file)}
                                    alt={`Preview ${image.id}`}
                                    className="w-20 h-20 object-cover rounded-lg border"
                                />
                            )}
                        </div>
                    ))}
                    {images.length < 20 && (
                        <button
                            type="button"
                            onClick={addImageInput}
                            className="text-custom-primary hover:underline"
                        >
                            + Add Image
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default BusinessDetailsForm;
