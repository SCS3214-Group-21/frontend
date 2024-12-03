import api from "../api.jsx";

export const createEvent = async (title, description, event_date, start_time, end_time) => {
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('event_date', event_date);
        formData.append('start_time', start_time);
        formData.append('end_time', end_time);

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        const response = await api.post('/event/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });

        return response.data;
    } catch (error) {
        console.error('Event creation failed:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Event creation failed!');
    }
}

export const updateEvent = async (id, title, description, event_date, start_time, end_time) => {
    try {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', description);
        formData.append('event_date', event_date);
        formData.append('start_time', start_time);
        formData.append('end_time', end_time);

        const response = await api.put(`/event/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })

        return response.data
    } catch (error) {
        throw new Error('Failed to update event!');
    }
}

export const fetchAllEvents = async () => {
    try {
        const response = await api.get('/event/get-all', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch events!')
    }
}

export const fetchMyEvents = async () => {
    try {
        const token = localStorage.getItem('token')
        console.log('Authorization token:', token)

        const response = await api.get('/event/my-events', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Fetched events:', response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching events:', error?.response || error)
        throw new Error('Failed to fetch events!');
    }
}

export const deleteEvent = async (id) => {
    try {
        const response = await api.delete(`/event/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        return response.data
    } catch (error) {
        console.error('Error deleting event:', error?.response || error)
        throw new Error(error.response?.data?.message || 'Failed to delete event!')
    }
}

export const ChangeStatus = async (id) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found in localStorage.');

        const response = await api.put(
            `/event/event-status/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data
    }
    catch (error) {
            console.error('Error toggling event status: ', error?.response || error)
            throw new Error(error.response?.data?.message || 'Failed to toggle event status!')
    }
}