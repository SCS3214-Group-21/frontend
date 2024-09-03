import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Update this URL to match your backend server's address

const blogService = {
    getAllBlogs: async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve token from local storage
           // console.log(`Token is ${token}` );
            const response = await axios.get(`${API_URL}/client/blogs`, {
                headers: {
                    'Authorization': `Bearer ${token}` // Include token in the request header
                }
            });
            return { blogs: response.data.blogs, error: null };
        } catch (error) {
            console.error('Error fetching blogs:', error.response || error.message);
            const errorMessage = error.response?.data?.message || 'Failed to fetch blogs';
            return { blogs: [], error: errorMessage };
        }
    },

    
    // createBlog: async ({ title, description, img }) => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await axios.post(`${API_URL}/client/blog`, {
    //             title,
    //             description,
    //             img
    //         }, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}` // Include token in the request header
    //             }
    //         });
    //         return { blog: response.data, error: null };
    //     } catch (error) {
    //         console.error('Error creating blog:', error.response || error.message);
    //         const errorMessage = error.response?.data?.message || 'Failed to create blog';
    //         return { blog: null, error: errorMessage };
    //     }
    // },
    
    

    getBlogById: async(blog_id) =>{

        try {
            const token = localStorage.getItem('token');
            console.log('Token retrieved for fetching a blog');

            const response = await axios.get(`${API_URL}/client/blog/${blog_id}`,{
                headers: {
                    'Authorization': `Bearer ${token}` // Include token in the request header
                }

            });

            return {blog:response.data.blog , error: null};

            
        } catch (error) {
            console.error('Error fetching blog by ID:', error.response || error.message);
            const errorMessage = error.response?.data?.message || 'Failed to fetch blog';  // Handle errors
            return { blog: null, error: errorMessage };  // Return an error message if the request fails
        
        }
    },

    updateBlog: async (blog_id, formData) => {
        try {
            const token = localStorage.getItem('token');
            console.log('Token retrieved for fetching a blog');

            const response = await axios.patch(`${API_URL}/client/update/${blog_id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,  // Include token in the request header
                    'Content-Type': 'multipart/form-data'  // Set the Content-Type to multipart/form-data
                }
            });

            return { blog: response.data.blog, error: null };
        } catch (error) {
            console.error('Error updating blog by ID:', error.response || error.message);
            const errorMessage = error.response?.data?.message || 'Failed to update blog';
            return { blog: null, error: errorMessage };
        }
    },

    deleteBlog: async (blog_id) => {
        try {
            const token = localStorage.getItem('token');
            console.log('Token retrieved for deleting a blog');

            const response = await axios.delete(`${API_URL}/client/blog/${blog_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`  // Include token in the request header
                }
            });

            return { success: true, message: response.data.message };
        } catch (error) {
            console.error('Error deleting blog:', error.response || error.message);
            const errorMessage = error.response?.data?.message || 'Failed to delete blog';
            return { success: false, error: errorMessage };
        }
    }
};

export default blogService;
