import api from '../api'

export const getAdminDashboard = async () => {
    try {
        const response = await api.get('/admin/get', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
    });
    console.log("Fetch details: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch details!");
  }
}

export const generateReport = async () => {
    try {
        const response = await api.get('/admin/generate-report', {
          responseType: 'blob',  // Important for downloading files
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,  // Use token if necessary
          },
          withCredentials: true,  // Ensure credentials (cookies, etc.) are sent
        });
    
        // Handle the report download (assuming response is a PDF or similar)
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'AdminDashboardReport.pdf');  // Adjust file name if necessary
        document.body.appendChild(link);
        link.click();
        link.remove();  // Clean up the link element
      } catch (error) {
        console.error('Error generating report:', error);
      }
};