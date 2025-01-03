import React, { useState, useEffect } from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/client/ClientSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import BlogCard from "../../components/common/BlogCard.jsx";
import Pagination from '../../components/common/Pagination.jsx'
import { fetchAllBlogs } from "../../services/blogServices.js";
import api from "../../api.jsx";

function BlogPage() {
    const [blogs, setBlogs] = useState([]);  // State to store blogs
    const [loading, setLoading] = useState(true); // State to track loading
    const [error, setError] = useState(null); // State to track errors

    useEffect(() => {
        // Fetch blogs from the backend when the component mounts
        const fetchBlogData = async () => {
            try {
                const data = await fetchAllBlogs();  // Call the service to fetch blogs
                setBlogs(data.blogs);  // Set the blogs in state, assuming 'blogs' array is returned in 'data'
                setLoading(false);  // Stop loading
            } catch (error) {
                setError(error.message);  // Set error message
                setLoading(false);  // Stop loading
            }
        };

        fetchBlogData();
    }, []);  // Empty dependency array means it runs only on mount

    const renderItems = (currentItems) => (
        // <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6">
            {/* <div className="flex items-center justify-center p-2 bg-white h-72 w-60">
                <AddCard
                    text={"Create Blog"}
                    link={"/createblog"}
                />
            </div>  */}
            {currentItems.map((item, index) => (
                <div key={index} className='flex items-center justify-center p-2 bg-white h-72 w-60'>
                    <BlogCard
                        img={item.img ? `${api.defaults.baseURL}/uploads/${item.img}` : 'src/assets/Images/Images/01.png'}
                        text={item.title || 'No Title'}
                        date={item.date}
                        time={item.time}
                        button={"Read Blog"}
                        link={`./viewblog/${item.blog_id}`}
                    />
                </div>
            ))}
        </div>
        // </div>
    );

    if (loading) return <div>Loading...</div>;  // Display loading state
        if (error) return <div>Error: {error}</div>;  // Display error state


    const breadcrumbItems = [
        { label: 'My Wedding', href: './mywedding' },
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
                            <Pagination items={blogs} itemsPerPage={8} renderItems={renderItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage







// import React from "react";
// import RegisterHeader from "../../components/common/RegisterHeader.jsx";
// import ClientSidebar from "../../components/ClientSidebar.jsx";
// import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
// import BlogCard from "../../components/common/BlogCard.jsx";
// import Pagination from '../../components/common/Pagination.jsx';
// import useFetch from "../../hooks/useFetchBlogs.js";
// import AddCard from "../../components/common/AddCard"


// const renderItems = (currentItems) => (
//     <div className="flex flex-row flex-wrap items-center justify-center gap-6">
//         <div className="flex items-center justify-center p-2 bg-white h-72 w-60">
//             <AddCard
//                 text={"Create Blog"}
//                 link={"/blog"}
//             />
//         </div>
//         {currentItems.map((item, index) => (
//             <div key={index} className='flex items-center justify-center p-2 bg-white h-72 w-60'>
//                 <BlogCard
//                     img={item.img} // Adjust to match your data structure
//                     text={item.title} // Adjusted to match blog object properties
//                     date={new Date(item.date).toLocaleDateString(undefined, {
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric'
//                     })}  // Ensure date is formatted using local timezone
//                     time={item.time}
//                     button={"Read Blog"}
//                     link={`/viewblog/${item.blog_id}`} // Adjust the link to view a specific blog
//                 />
//             </div>
//         ))}
//     </div>
// );

// function BlogPage() {
//     const breadcrumbItems = [
//         { label: 'My Wedding', href: '/mywedding' },
//         { label: 'Blogs' },
//     ];

//     const { blogs, loading, error } = useFetch.useFetchBlogs(); // Use the custom hook to fetch blogs

//     if (loading) return <div>Loading...</div>; // Show a loading message while fetching data
//     if (error) return <div>Error: {error}</div>; // Show an error message if fetching fails


//     return (
//         <div>
//             <RegisterHeader />
//             <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
//                 <div className="w-[5%] sm:w-[10%] md:w-[20%]">
//                     <ClientSidebar />
//                 </div>
//                 <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
//                     <div className="pb-5">
//                         <Breadcrumb items={breadcrumbItems} />
//                     </div>
//                     <div className="pb-5">
//                         <h1 className='text-4xl font-bold text-custom-primary'>Blogs</h1>
//                     </div>
//                     <div className="pb-5">
//                         <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap'>
//                             <Pagination items={blogs} itemsPerPage={8} renderItems={renderItems} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BlogPage;
