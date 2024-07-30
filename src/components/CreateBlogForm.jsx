import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputField2 from './ui/InputField2';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';

const baseURL = "http://localhost:8000"; // Change to your API URL

function CreateBlogForm() {
    const [formData, setFormData] = useState({
        title: '',
        image: null,
        description: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('user_id', 1); // or get dynamically if needed
        formDataToSend.append('title', formData.title);
        if (formData.image) {
            formDataToSend.append('image', formData.image); // Match the key with the backend
        }
        formDataToSend.append('description', formData.description);

        try {
            const response = await axios.post(baseURL + "/blog/create-blog", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                console.log('Blog creation successful');
                navigate("/blogs"); // Redirect to the desired page
            } else {
                alert('Blog creation failed');
            }
        } catch (error) {
            console.error('Error creating blog', error);
            alert('An error occurred while creating the blog');
        }
    };

    const handleReset = () => {
        setFormData({
            title: '',
            image: null,
            description: ''
        });
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
                                    font-size: 0.75rem;
                                    color: #000000;
                                    font-weight: 700;
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
                                    font-size: 0.75rem;
                                    border: 2px #000000 solid;
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
                                    name="image" // Ensure this matches the FormData key
                                    type="file"
                                    accept=".png, .jpg"
                                    className="file-input"
                                    onChange={handleChange}
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
                                font-size: 0.75rem;
                                color: #000000;
                                font-weight: 700;
                                position: relative;
                                top: 0.5rem;
                                margin: 0 0 0 7px;
                                padding: 0 3px;
                                background: #FFF8F5;
                                width: fit-content;
                            }
                            
                            .coolinput2 .input2 {
                                padding: 11px 10px;
                                font-size: 0.75rem;
                                border: 2px #000000 solid;
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
                                name="description" // Ensure name matches state key
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5 md:px-[5%]'>
                    <PrimaryNoneFillButton 
                        text="Reset"
                        onClick={handleReset} // Pass the handleReset function
                    />
                    <PrimaryButton 
                        text="Post Blog"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}

export default CreateBlogForm;
