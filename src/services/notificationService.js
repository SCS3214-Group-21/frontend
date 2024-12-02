import api from "../api.jsx"

export const createNotification = async (title, description, priority) => {
    try {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('priority', priority)

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`)
        }

        const response = await api.post('/notification/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })

        return response.data
    } catch (error) {
        console.error('Notification creation failed: ', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Event creation failed!');
    }
}

export const changeNotificationStatus = async (id, viewed) => {
    try {
        const formData = new FormData();

        formData.append('viewed', viewed)

        const response = await api.put(`/notification/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })

        return response.data
    } catch (error) {
        throw new Error('Failed to update notification!');
    }
}

export const fetchAllNotifications = async () => {
    try {
        const response = await api.get('/notification/get-all', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch notifications!')
    }
}

export const fetchMyNotifications = async () => {
    try {
        const token = localStorage.getItem('token')
        console.log('Authorization token:', token)

        const response = await api.get('/notification/my-events', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Fetched events:', response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching notifications:', error?.response || error)
        throw new Error('Failed to fetch notifications!');
    }
}

export const deleteNotification = async (id) => {
    try {
        const response = await api.delete(`/notification/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        return response.data
    } catch (error) {
        console.error('Error deleting notification:', error?.response || error)
        throw new Error(error.response?.data?.message || 'Failed to delete notification!')
    }
}