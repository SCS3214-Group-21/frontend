import React, { useState } from 'react';
import InputField2 from '../ui/InputField2';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import { useNavigate } from 'react-router-dom';
import FileInputField from '../ui/FileInputField';
import TextAreaField from '../ui/TextAreaField';
import { createBlog } from '../../services/blogServices';
import Swal from 'sweetalert2'; // Import SweetAlert2

function CreateBlogForm() {
    const [formData, setFormData] = useState({
        title: '',
        image: null,
        description: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({ ...prevData, image: file }));
    };

    const handleReset = () => {
        setFormData({
            title: '',
            image: null,
            description: ''
        });
        document.getElementById('file-upload').value = ''; // Clear file input
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Check if all required fields are filled
        if (!formData.title || !formData.image || !formData.description) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
                confirmButtonText: 'OK',
                background: '#FFF8F5',
                color: '#000000',
                confirmButtonColor: '#A57E17', // Custom button color
            });
            return;
        }

        try {
            // Call the createBlog service with form data
            const response = await createBlog(formData.title, formData.image, formData.description);

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Blog created successfully!',
                confirmButtonText: 'OK',
                background: '#FFF8F5',
                color: '#000000',
                confirmButtonColor: '#A57E17', // Custom button color
            });

            navigate('/vendor/blog');   // Redirect after successful creation
        } catch (error) {
            console.error("Blog Creation failed: ", error);
            setError('Blog Creation failed: ' + error.message);

            Swal.fire({
                icon: 'error',
                title: 'Create Failed',
                text: `Blog Creation failed: ${error.message}`,
                confirmButtonText: 'OK',
                background: '#FFF8F5',
                color: '#000000',
                confirmButtonColor: '#A57E17', // Custom button color for retry
            });
        }
    };

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5 md:px-[5%]'>
                    <div className='w-full'>
                        <InputField2
                            id="title"
                            name="title"
                            placeholder="Input"
                            type="text"
                            value={formData.title}
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
                </div>
                <div className="w-full h-80 p-3 px-5 md:px-[5%]">
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
                                height: 250px;
                                color: #000000;
                                width: 100%; /* Ensure it occupies full width */
                            }
                            
                            .coolinput2 .input2:focus {
                                outline: none;
                            }
                        `}</style>
                        <div className="coolinput2">
                            <label htmlFor="text-input" className="text2">Description</label>
                            <textarea
                                id="text-input"
                                placeholder="..."
                                className="input2"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5 md:px-[5%]'>
                    <PrimaryNoneFillButton
                        text="Reset"
                        onClick={handleReset}
                    />
                    <button
                        type="submit"
                        className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:text-custom-secondary hover:border-2 hover:border-custom-secondary"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateBlogForm;
