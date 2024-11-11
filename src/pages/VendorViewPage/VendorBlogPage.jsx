import React, { useState, useEffect } from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from '../../components/vendor/VendorSidebar.jsx';
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AddCard from '../../components/common/AddCard.jsx';
import BlogCard from "../../components/common/BlogCard.jsx";
import Pagination from '../../components/common/Pagination.jsx';
import { fetchMyBlogs } from "../../services/blogServices";  // Import the fetchBlogs service
import api from "../../api";  // Import the api instance

function BlogPage() {
    const [blogs, setBlogs] = useState([]);  // State to store blogs
    const [loading, setLoading] = useState(true); // State to track loading
    const [error, setError] = useState(null); // State to track errors

    useEffect(() => {
        // Fetch blogs from the backend when the component mounts
        const fetchBlogData = async () => {
            try {
                const data = await fetchMyBlogs();  // Call the service to fetch blogs
                setBlogs(data.blogs);  // Set the blogs in state, assuming 'blogs' array is returned in 'data'
                setLoading(false);  // Stop loading
            } catch (error) {
                setError(error.message);  // Set error message
                setLoading(false);  // Stop loading
            }
        };

        fetchBlogData();
    }, []);  // Empty dependency array means it runs only on mount

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendor/dashboard' },
        { label: 'Blogs' }
    ];

    const renderItems = (currentItems) => (
        <div className="flex flex-row flex-wrap items-center justify-center gap-6">
            <div className="flex items-center justify-center p-2 bg-white h-72 w-60">
                <AddCard
                    text={"Create Blog"}
                    link={"/vendor/blog/createblog"}
                />
            </div>
            {currentItems.map((item, index) => (
                <div key={index} className='flex items-center justify-center p-2 bg-white h-72 w-60'>
                    <BlogCard
                        // Use api.defaults.baseURL to construct the image URL dynamically
                        img={item.img ? `${api.defaults.baseURL}/uploads/${item.img}` : 'src/assets/Images/Images/01.png'}  
                        text={item.title || 'No Title'}  // If title is empty, display 'No Title'
                        date={item.date}
                        time={item.time}
                        button={"Read Blog"}
                        link={`/vendor/blog/viewmyblog/${item.blog_id}`}  // Assuming each blog has a 'blog_id'
                    />
                </div>
            ))}
        </div>
    );

    if (loading) return <div>Loading...</div>;  // Display loading state
    if (error) return <div>Error: {error}</div>;  // Display error state

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
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
                            <Pagination items={blogs} itemsPerPage={8} renderItems={renderItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
