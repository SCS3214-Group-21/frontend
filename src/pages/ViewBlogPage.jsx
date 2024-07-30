import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CommentSection from "../components/common/CommentSection";
import RegisterHeader from "../components/common/RegisterHeader";
import ClientSidebar from "../components/ClientSidebar";
import Breadcrumb from "../components/ui/Breadcrumb";

const baseURL = "http://localhost:8000/blog";

function ViewBlogPage() {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${baseURL}/view-blog/${id}`);
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch blog details.');
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`${baseURL}/delete-blog/${id}`);
            navigate('/blogs'); // Redirect to the blogs page after deletion
        } catch (error) {
            setError('Failed to delete blog.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!blog) return <p>No blog found.</p>;

    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Blogs', href: '/blogs' },
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
                            <div className="p-5 flex items-center justify-center">
                                <img src={`http://localhost:8000/uploads/blogs/${blog.img}`} alt={blog.title} className="w-full h-full sm:w-3/4 sm:h-[32rem]" />
                            </div>
                            <div>
                                <p className="text-justify text-black p-5">{blog.description}</p> {/* Assuming 'description' field is present */}
                            </div>
                            <h2 className="font-semibold p-5 text-black">Published By : <span className="font-normal">{blog.author}</span></h2> {/* Assuming 'author' field */}
                            <div className="mt-4 flex justify-end">
                                <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Delete Blog</button>
                            </div>
                            <CommentSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewBlogPage;
