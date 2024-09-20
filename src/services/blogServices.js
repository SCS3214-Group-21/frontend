import api from '../api';

// Create a new blog
export const createBlog = async (title, image, description) => {
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('img', image); // Add the image to FormData
        formData.append('description', description);

        // Log formData entries for debugging
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        const response = await api.post('/blog/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        
        return response.data; // Return the response data
    } catch (error) {
        throw new Error('Blog Creation failed!');
    }
};

// Fetch all blogs
export const fetchAllBlogs = async () => {
    try {
        const response = await api.get('/blog/get-all', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;  // Return the array of blogs
    } catch (error) {
        throw new Error('Failed to fetch blogs!');
    }
};


// Fetch all blogs
export const fetchMyBlogs = async () => {
    try {
        const response = await api.get('/blog/my-blogs', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;  // Return the array of blogs
    } catch (error) {
        throw new Error('Failed to fetch blogs!');
    }
};

// Fetch a single blog by ID
export const fetchBlogById = async (id) => {
    try {
        const response = await api.get(`/blog/blog/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;  // Return the blog data
    } catch (error) {
        throw new Error('Failed to fetch blog!');
    }
};

// services/blogServices.js

// Update a blog by ID
export const updateBlog = async (id, updatedBlog, image) => {
    try {
        const formData = new FormData();

        // Append the necessary fields to FormData, even if there's no image
        formData.append('title', updatedBlog.title);
        formData.append('description', updatedBlog.description);

        if (image) {
            formData.append('img', image); // Append image if provided
        }

        // Send FormData for both cases, ensuring the backend can parse it
        const response = await api.put(`/blog/blog/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });

        return response.data;  // Return the updated blog data
    } catch (error) {
        throw new Error('Failed to update blog!');
    }
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
    try {
        const response = await api.delete(`/blog/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;  // Return the actual API response (if available)
    } catch (error) {
        // Include the error message from the server if available
        throw new Error(error.response?.data?.message || 'Failed to delete blog!');
    }
};
