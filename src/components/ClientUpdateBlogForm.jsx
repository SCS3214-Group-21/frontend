import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InputField2 from './ui/InputField2';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';
import FileInputField from './ui/FileInputField';
import TextAreaField from './ui/TextAreaField';
import useFetchBlogs from '../hooks/useFetchBlogs';  // Your custom hook for fetching blog data
import axios from 'axios';

const baseURL = 'http://localhost:4000';

function ClientUpdateBlogForm() {
    const { blog_id } = useParams();  // Retrieve blogId from URL parameters
    const { blog, loading, error } = useFetchBlogs.useFetchBlog(blog_id);  // Use custom hook to fetch blog
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (blog) {
            setTitle(blog.title || '');
            setDescription(blog.description || '');
            setImage(blog.img || null);
            console.log(blog.description);
        }
    }, [blog]);  // Only run when `blog` changes

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title || !description) {
            alert('Title and Description are required!');
            return;
        }

        if (imageError) {
            alert(imageError);
            return;
        }

        const formData = new FormData();
        formData.append('user_id', 1);  // Example user_id, replace with actual user ID
        formData.append('title', title);
        formData.append('description', description);
        if (image) formData.append('image', image);  // Append image if it exists

        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`${baseURL}/client/blog/${blog_id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,  // Include token in the request header
                    'Content-Type': 'multipart/form-data'  // Set the Content-Type to multipart/form-data
                }
            });

            alert('Blog updated successfully!');
            navigate('/blogs');  // Redirect to the desired page after update
        } catch (error) {
            console.error('Error updating blog:', error.response || error.message);
            alert('Failed to update blog');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            if (fileType === 'image/jpeg' || fileType === 'image/png') {
                setImage(file);
                setImageError('');
            } else {
                setImageError('Only .jpg and .png files are allowed');
                setImage(null);
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5 md:px-[5%]'>
                    <div className='w-full'>
                        <InputField2
                            id={1}
                            name={"Title "}
                            placeholder={"Input"}
                            type={"text"}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full p-3 px-5 md:px-[5%]'>
                    <div className='w-full'>
                        {/* <FileInputField
                            id="file-upload"
                            name="Upload Image"
                            accept=".png, .jpg"
                            onChange={handleFileChange}
                        /> */}
                        {image && typeof image === 'string' && (
                            <div className="mb-4">
                                <img src={image} alt="Current Blog" width={200} className="rounded-lg" />
                            </div>
                        )}
                        <input
                            id="file-upload"
                            name="image" // Ensure this matches the FormData key
                            type="file"
                            accept=".png, .jpg"
                            className="file-input"
                            // value={image}
                            onChange={handleFileChange}
                        />
                        {imageError && <div className="error-message">{imageError}</div>}
                    </div>
                </div>

                <div className="w-full h-40 p-3 px-5 md:px-[5%]">
                    {/* <TextAreaField
                        id="text-input"
                        placeholder="..."
                        name="description"
                        height="100px"  // Pass the height as a prop
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /> */}
                    <textarea
                        id="text-input"
                        placeholder="..."
                        className="input2"
                        name="description" // Ensure name matches state key
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                </div>

                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 p-3 px-5 md:px-[5%]'>
                    {/* <PrimaryNoneFillButton
                        text={"Reset"}
                        link={"/planbudget"}
                    />
                    <PrimaryButton
                        text={"Save Changes"}
                        link={"/"}
                    /> */}
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default ClientUpdateBlogForm;

