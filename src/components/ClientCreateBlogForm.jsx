import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';
import InputField2 from './ui/InputField2';


const baseURL = 'http://localhost:4000';

function ClientCreateBlogForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState(''); // Add state for image error
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title || !description) {
            alert('Title and Description are required!');
        }

        // Check for image error before submitting the form
        if (imageError) {
            alert(imageError); // Show alert with the image error message
            return;
        }


        const formData = new FormData();
        formData.append('user_id', 1); // Example user_id
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image || ''); // Add image even if null, to debug

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        try {
            const token = localStorage.getItem('token'); // Assuming token is stored in local storage

            const response = await axios.post(`${baseURL}/client/blog`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });


            if (response.status === 201) {
                alert('Blog created successfully!');
                navigate('/blogs'); // Navigate to the blogs list or homepage
            }
        } catch (error) {
            console.error('Error creating blog:', error.response?.data || error.message);
            alert('Error creating blog. Please try again.');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first file selected by the user
        if (file) { // Check if a file has been selected
            const fileType = file.type; // Get the MIME type of the selected file (e.g., image/jpeg, image/png)
            // Check if the file type is either 'image/jpeg' or 'image/png'
            if (fileType === 'image/jpeg' || fileType === 'image/png') {
                setImage(file); // If valid, set the file in the state
                setImageError(''); // Clear any previous error message
            } else {
                setImageError('Only .jpg and .png files are allowed'); // Set an error message
                setImage(null); // Clear the file input in the state
            }
        }
    };


    // const handleReset = () => {
    //     setTitle('');
    //     setDescription('');
    //     setImage(null);
    // };

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5' onSubmit={handleSubmit}>

                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5 md:px-[5%]'>
                    <div className='w-full'>
                        <InputField2
                            id="title"
                            type="text"
                            name="title"
                            placeholder="Input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
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
                                    name="image" // Ensure this matches the FormData key
                                    type="file"
                                    accept=".png, .jpg"
                                    className="file-input"
                                    onChange={handleFileChange}
                                />
                                {imageError && <p style={{ color: 'red' }}>{imageError}</p>} {/* Display error */}
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
                                name="description" // Ensure name matches state key
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5 md:px-[5%]'>
                    {/* <PrimaryNoneFillButton
                        text="Reset"
                        onClick={handleReset}
                    /> */}
                    <PrimaryButton
                        text="Post Blog"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}

export default ClientCreateBlogForm;

