import api from "../api";

export const getEnableBudget = async () => {
    try {
      const response = await api.get(`progress/enable`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Fetch enable budget: ", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch enable budget!");
    }
  };

export const getProgressById = async (id) => {
    try {
        const response = await api.get(`progress/get-one/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;  // This will be the data object you use
    } catch (error) {
        throw new Error("Failed to fetch progress!");
    }
  };

export const updateProgress = async (id, field, value) => {
    try {
        const response = await api.put(
            `progress/update/${id}`,
            { field, value },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return response.data; // Return updated progress data
    } catch (error) {
        throw new Error("Failed to update progress!");
    }
};
