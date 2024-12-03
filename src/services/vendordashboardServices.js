import api from "../api";

export const fetchDashboardData = async () => {
    try {
        // Make an API call to fetch dashboard data
        const response = await api.get("/vendor-dashboard/get", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,  // Add the token if necessary
            },
        });

        // Set the state with the fetched data
        setDashboardData(response.data);
    } catch (error) {
        console.error("Error fetching vendor dashboard data:", error);
    }
};