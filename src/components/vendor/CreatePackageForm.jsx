import React, { useState } from 'react';
import InputField2 from '../ui/InputField2';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createPackage } from '../../services/packageService';

function CreatePackageForm() {
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        items: [{ id: 1, name: 'Item 1', value: '' }],
        description: '',
        image: null
    })
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, image: file }));
    };

    const handleItemChange = (id, value) => {
        const updatedItems = formData.items.map((item) =>
            item.id === id ? { ...item, value } : item
        );
        setFormData({ ...formData, items: updatedItems });
    };

    const addItem = () => {
        const newItem = { id: formData.items.length + 1, name: `Item ${formData.items.length + 1}`, value: '' };
        setFormData({ ...formData, items: [...formData.items, newItem] });
    };

    const removeItem = (id) => {
        if (formData.items.length > 1) {
            const updatedItems = formData.items
                .filter((item) => item.id !== id)
                .map((item, index) => ({ ...item, id: index + 1, name: `Item ${index + 1}` }));
            setFormData({ ...formData, items: updatedItems });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: 'At least one item should exist.',
                confirmButtonText: 'OK',
            });
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            amount: '',
            items: [{ id: 1, name: 'Item 1', value: '' }],
            description: '',
            image: null,
        });
        document.getElementById('file-upload').value = '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, amount, items, description, image } = formData;
        if (!name || !amount || !description || !image || items.some((item) => !item.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all fields, including items!',
                confirmButtonText: 'OK',
                background: '#FFF8F5',
                color: '#000000',
                confirmButtonColor: '#A57E17',
            });
            return;
        }

        try {
            const response = await createPackage(name, amount, items.map((item) => item.value), description, image);

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Package created successfully!',
                confirmButtonText: 'OK',
                background: '#FFF8F5',
                color: '#000000',
                confirmButtonColor: '#A57E17',
            });

            navigate('/vendor/packages');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Create Failed',
                text: `Package Creation failed: ${error.message}`,
                confirmButtonText: 'OK',
                background: '#FFF8F5',
                color: '#000000',
                confirmButtonColor: '#A57E17',
            });
        }
    };

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5' onSubmit={handleSubmit}>
                <div className='flex flex-col w-full gap-5 p-3 px-5 md:flex-row lg:gap-14'>
                    <div className='w-full'>
                        <InputField2
                            id="name"
                            name="name"
                            placeholder="Input"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='w-full'>
                        <div>
                            <style jsx>{`
                                .file-input-container {
                                    display: flex;
                                    flex-direction: column;
                                    width: 100%;
                                    position: relative;
                                }

                                .file-input-label {
                                    font-size: 1rem;
                                    color: #000000;
                                    font-weight: 500;
                                    position: relative;
                                    top: 0.5rem;
                                    margin: 0 0 0 7px;
                                    padding: 0 3px;
                                    background: #FFF8F5;
                                    width: fit-content;
                                }

                                .file-input {
                                    width: 100%;
                                    padding: 11px 10px;
                                    font-size: 1rem;
                                    border: 1px #000000 solid;
                                    border-radius: 5px;
                                    background: #FFF8F5;
                                    color: #000000;
                                }

                                .file-input::file-selector-button {
                                    padding: 5px 10px;
                                    font-size: 0.75rem;
                                    border: none;
                                    background-color: #A57E17; /* custom-primary */
                                    color: white;
                                    border-radius: 5px;
                                    cursor: pointer;
                                    transition: background-color 0.3s;
                                }

                                .file-input::file-selector-button:hover {
                                    background-color: #006972; /* custom-secondary */
                                }
                            `}</style>
                            <div className="file-input-container">
                                <label htmlFor="file-upload" className="file-input-label">Image</label>
                                <input
                                    id="file-upload"
                                    name="image"
                                    type="file"
                                    accept=".png, .jpg"
                                    className="file-input"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <InputField2
                            id="amount"
                            name="amount"
                            placeholder="Input"
                            type="text"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap gap-[5%] justify-start items-center w-full p-3 px-5'>
                {formData.items.map((item) => (
                        <div className='md:w-[30%] w-full relative' key={item.id}>
                            <InputField2
                                id={`item-${item.id}`}
                                name={item.name}
                                placeholder="Input"
                                type="text"
                                value={item.value}
                                onChange={(e) => handleItemChange(item.id, e.target.value)}
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
                <div>
                        <style jsx>{`
                            .coolinput2 {
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                                position: static;
                            }
                    
                            .coolinput2 label.text2 {
                                font-size: 1rem;
                                color: #000000;
                                font-weight: 500;
                                position: relative;
                                top: 0.5rem;
                                margin: 0 0 0 7px;
                                padding: 0 3px;
                                background: #FFF8F5;
                                width: fit-content;
                            }
                            

                            .coolinput2 .input2 {
                                padding: 11px 10px;
                                font-size: 1rem;
                                border: 1px #000000 solid;
                                border-radius: 5px;
                                background: #FFF8F5;
                                height: 100px;
                                color: #000000;
                                width: 100%; /* Ensure it occupies full width */
                            }
                            
                            .coolinput2 .input2:focus {
                                outline: none;
                            }
                        `}</style>
                        <div className="coolinput2">
                            <label htmlFor="description" className="text2">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                className="input2"
                                placeholder="..."
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-end gap-2 p-3 px-5 sm:gap-5'>
                    <PrimaryNoneFillButton text={"Reset"} onClick={handleReset} />
                    {/* <PrimaryButton text={"Save Changes"} /> */}
                    <button
                        type="submit"
                        className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:text-custom-secondary hover:border-2 hover:border-custom-secondary"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreatePackageForm;
