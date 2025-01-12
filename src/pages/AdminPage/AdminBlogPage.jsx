import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Breadcrumb from "../../components/ui/Breadcrumb.jsx";
import AddCard from "../../components/common/AddCard.jsx";
import BlogCard from "../../components/common/BlogCard.jsx";
import Pagination from "../../components/common/Pagination.jsx";
import AdminHeader from "../../components/common/AdminHeader.jsx";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import PrimaryNoneFillButton from "../../components/ui/PrimaryNoneFillButton.jsx";
import { fetchAllBlogs, deleteBlog } from "../../services/blogServices.js";
import api from "../../api.jsx";

function AdminBlogPage() {
  const [blogs, setBlogs] = useState([]);  // State to store blogs
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors
  const navigate = useNavigate(); // Use navigate hook to navigate programmatically

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

  // Function to delete a blog
//   const deleteBlog = async (blogId) => {
//     try {
//       // Perform the delete request (replace with your actual API endpoint)
//       await api.delete(`/admin/blogs`);
//       setBlogs(blogs.filter((blog) => blog.blog_id !== blogId)); // Update state after deletion
//       Swal.fire("Deleted!", "The blog has been deleted.", "success"); // Show success alert
//     } catch (error) {
//       Swal.fire("Error!", "There was an error deleting the blog.", "error"); // Show error alert
//     }
//   };

  // Function to handle confirmation for deletion
  const handleDelete = (blogId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
            deleteBlog(blogId);  
            Swal.fire("Deleted!", "The blog has been deleted.", "success"); // Show success alert
            window.location.reload();
          } catch (error) {
            Swal.fire("Error!", "There was an error deleting the blog.", "error"); // Show error alert
          }
      }
    });
  };

  const renderItems = (currentItems) => (
    <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        <div className="flex items-center justify-center p-2 bg-white h-72 w-60">
                <AddCard
                    text={"Create Blog"}
                    link={"./createblog"}
                />
            </div> 
      {currentItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-2 bg-white h-72 w-60 mb-6 gap-2">
          <BlogCard
            img={item.img ? `${api.defaults.baseURL}/uploads/${item.img}` : "src/assets/Images/Images/01.png"}
            text={item.title || "No Title"}
            date={item.date}
            time={item.time}
            button={"Read Blog"}
            link={`./view/${item.blog_id}`}
          />
          <button
            className="bg-red-400 rounded-full py-2 px-6 text-black hover:bg-red-700 hover:text-white"
            onClick={() => handleDelete(item.blog_id)} // Attach the delete handler to the button
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );

  if (loading) return <div>Loading...</div>;  // Display loading state
  if (error) return <div>Error: {error}</div>;  // Display error state

  const breadcrumbItems = [
    { label: "Dashboard", href: "/admindashboard" },
    { label: "Blogs" },
  ];

  return (
    <div>
      <AdminHeader />
      <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
        <div className="w-[5%] sm:w-[10%] md:w-[20%]">
          <AdminSidebar />
        </div>

        <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
          <div className="pb-5">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="flex justify-between pb-5">
            <h1 className="text-4xl font-bold text-custom-primary">Blogs</h1>
          </div>

          <div className="pb-5">
            <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap">
              <Pagination items={blogs} itemsPerPage={7} renderItems={renderItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBlogPage;
