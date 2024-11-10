import React, { useEffect, useState } from 'react';
import InputField2 from '../ui/InputField2';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlogById, updateBlog } from '../../services/blogServices';
import Swal from 'sweetalert2'; // Import SweetAlert2

function UpdateBlogForm() {
    const { id } = useParams(); // Get the blog id from the URL
    const [formData, setFormData] = useState({
        title: '',
        image: null,
        description: ''
    });

    const [loading, setLoading] = useState(true); // State to track loading
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { blog } = await fetchBlogById(id); // Fetch blog and destructure it from the response object

                setFormData({
                    title: blog.title || '', // Use blog.title from the nested "blog" key
                    description: blog.description || '', // Same for description
                    image: null  // Image remains null because the backend response doesn't provide the image file directly
                });
            } catch (error) {
                setError(error.message); // Set error message if any
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchBlog();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({ ...prevData, image: file })); // Correctly set the file in state
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
    
        // Validate the required fields
        if (!formData.title || !formData.description) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the required fields (Title and Description).',
                confirmButtonText: 'OK',
                background: '#FFF8F5',
                color: '#000000',
                confirmButtonColor: '#A57E17',
            });
            return;
        }
    
        try {
            // Call the updateBlog service with form data
            const response = await updateBlog(id, { title: formData.title, description: formData.description }, formData.image);
    
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Blog updated successfully!',
                confirmButtonText: 'OK',
                background: '#FFF8F5',
                color: '#000000',
                confirmButtonColor: '#A57E17', // Custom button color
            });
    
            navigate('/vendor/blog'); // Redirect after successful update
        } catch (error) {
            console.error("Blog Updating failed: ", error);
            setError('Blog Updating failed: ' + error.message); // Show error message
    
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: `Blog Updating failed: ${error.message}`,
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
                            value={formData.title} // Conditionally render blog title or formData.title
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
                                value={formData.description} // Conditionally render blog description or formData.description
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
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateBlogForm;
