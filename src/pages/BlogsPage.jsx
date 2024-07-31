import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterHeader from "../components/common/RegisterHeader";
import ClientSidebar from "../components/ClientSidebar";
import Breadcrumb from '../components/ui/Breadcrumb';
import BlogCard from "../components/common/BlogCard";
import Pagination from '../components/common/Pagination';

const baseURL = "http://localhost:8000/blog";

function BlogPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${baseURL}/view-blogs`);
                console.log('Response data:', response.data); // Log response data
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs', error);
            }
        };
    
        fetchBlogs();
    }, []);

    const renderItems = (currentItems) => (
        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
            {currentItems.length > 0 ? (
                currentItems.map((blog, index) => {
                    const image = `http://localhost:8000/uploads/blogs/${blog.img}`;
                    return (
                        <div key={index} className='flex items-center justify-center p-2 bg-white h-72 w-60'>
                            <BlogCard
                                img={image}
                                text={blog.title}
                                date={blog.date}
                                time={blog.time}
                                button={"Read Blog"}
                                link={`/viewblog/${blog.blog_id}`} // Modify this link as needed
                            />
                        </div>
                    );
                })
            ) : (
                <p>No blogs available</p>
            )}
        </div>
    );

    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Blogs' },
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Blogs</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
                            <Pagination items={blogs} itemsPerPage={5} renderItems={renderItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
