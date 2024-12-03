import api from "../api.jsx"
import { formatDistanceToNow } from 'date-fns'

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

        const response = await api.get('/notification/my-notification', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        })

        console.log('Fetched events:', response.data);

        const mappedNotifications = response.data.notifications.map(notification => ({
            title: notification.title,
            content: notification.description,
            time: formatDistanceToNow(new Date(notification.created_at), { addSuffix: true }),
            read: notification.viewed,
        }))

        return mappedNotifications;
    } catch (error) {
        console.error('Error fetching notifications:', error?.response || error);
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

export const fetchNotificationById = async (id) => {
    try {
        const response = await api.get(`/notification/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });

        const notification = response.data

        const mappedNotification = {
            title: notification.title,
            content: notification.description,
            time: notification.created_at,
            read: notification.viewed,
        }

        return mappedNotification
    } catch (error) {
        console.error('Error fetching notification by ID:', error?.response || error)
        throw new Error('Failed to fetch notification!')
    }
}