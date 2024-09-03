// custom hook for fetching data from an api

import { useState, useEffect } from 'react';
import blogService from '../services/blogServices';

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { blogs, error } = await blogService.getAllBlogs(); // Use the service to fetch blogs
      if (error) {
        setError(error);
      } else {
        setBlogs(blogs);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

const useFetchBlog = (blog_id) => {
  const [blog, setBlog] = useState(null);  // State for storing a single blog
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);  // State for error messages

  useEffect(() => {
    const fetchBlog = async () => {

      if (!blog_id) return;  // Avoid fetching if no blogId is provided
      const { blog, error } = await blogService.getBlogById(blog_id);  // Fetch a single blog by ID
      if (error) {
        setError(error);  // Set error state if there's an error
      } else {
        setBlog(blog);  // Set the blog state with fetched data
      }
      setLoading(false);  // Set loading to false after fetching data
    };

    if (blog_id) {  // Check if blogId is provided before fetching
      fetchBlog();
    }
  }, [blog_id]);  // Dependency array includes blogId, so it refetches if blogId changes

  return { blog, loading, error };  // Return the blog, loading status, and error state
};

// const useCreateBlog = () => {
//   const [blog, setBlog] = useState(null); // State for storing the created blog
//   const [loading, setLoading] = useState(false); // State for loading status
//   const [error, setError] = useState(null); // State for error messages

//   // Function to handle blog creation, taking blog data as an argument
//   const createBlog = async (blogData) => {
//     setLoading(true); // Start loading
//     setError(null); // Reset any previous errors

//     try {
//       const { blog, error } = await blogService.createBlog(blogData); // Call the service method with blog data

//       if (error) {
//         setError(error); // Set error state if there's an error
//       } else {
//         setBlog(blog); // Set the blog state with fetched data
//       }
//     } catch (err) {
//       setError('Failed to create blog'); // Handle unexpected errors
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return { blog, loading, error, createBlog }; // Return the state and the createBlog function
// };

export default {useFetchBlogs,useFetchBlog};


