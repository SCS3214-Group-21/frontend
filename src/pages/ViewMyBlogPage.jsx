import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import CommentSection from "../components/common/CommentSection";
import RegisterHeader from "../components/common/RegisterHeader";
import ClientSidebar from "../components/ClientSidebar";
import Breadcrumb from "../components/ui/Breadcrumb";
import Swal from 'sweetalert2';

const baseURL = "http://localhost:8000/blog"; // Adjust the base URL to your backend endpoint

function ViewMyBlogPage() {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${baseURL}/view-blog/${id}`);
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog', error);
                setError('Failed to fetch blog details.');
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                await axios.delete(`${baseURL}/delete-blog/${id}`);
                Swal.fire(
                    'Deleted!',
                    'Your blog has been deleted.',
                    'success'
                );
                navigate('/vendorblog'); // Redirect to the blogs list page after deletion
            }
        } catch (error) {
            console.error('Error deleting blog', error);
            Swal.fire(
                'Error!',
                'Failed to delete blog.',
                'error'
            );
        }
    };

    const handleEdit = () => {
        navigate(`/updateblog/${id}`); // Navigate to the update blog page
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!blog) return <p>No blog found.</p>;

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendordashboard' },
        { label: 'Blogs', href: '/vendorblog' },
        { label: blog.title },
    ];

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-custom-primary font-bold text-4xl'>{blog.title}</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col'>
                            <div className="items-end justify-end flex gap-2 flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black hover:bg-custom-secondary hover:text-white w-8 h-8 rounded-full p-1" onClick={handleEdit}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-700 hover:bg-red-700 hover:text-white w-8 h-8 rounded-full p-1" onClick={handleDelete}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                            <div className="p-5 flex items-center justify-center">
                                <img src={`http://localhost:8000/uploads/blogs/${blog.img}`} alt={blog.title} className="w-full h-full sm:w-3/4 sm:h-3/4" />
                            </div>
                            <div>
                                <p className="text-justify text-black p-5">{blog.description}</p>
                            </div>
                            <h2 className="font-semibold p-5 text-black">Published By : <span className="font-normal">{blog.author}</span></h2>
                            <CommentSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewMyBlogPage;
