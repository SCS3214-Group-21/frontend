import api from "../api";

export const createBudget = async (
  hotels,
  dressers,
  photography,
  floral,
  jewellary,
  dancing_groups,
  ashtaka,
  salons,
  dJs,
  honeymoon,
  cars,
  invitation_cards,
  poruwa,
  catering
) => {
  try {
    const formData = new FormData();
    formData.append("hotels", hotels);
    formData.append("dressers", dressers);
    formData.append("photography", photography);
    formData.append("floral", floral);
    formData.append("jewellary", jewellary);
    formData.append("dancing_groups", dancing_groups);
    formData.append("ashtaka", ashtaka);
    formData.append("salons", salons);
    formData.append("dJs", dJs);
    formData.append("honeymoon", honeymoon);
    formData.append("cars", cars);
    formData.append("invitation_cards", invitation_cards);
    formData.append("poruwa", poruwa);
    formData.append("catering", catering);

    const response = await api.post("/budget/create-budget", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Budget creating failed:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || "Budget creation failed!");
  }
};

export const getBudget = async (id) => {
  try {
    const response = await api.get(`/budget/get-budget/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Fetch budget: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch budget!");
  }
};

export const getInitialBudget = async (id) => {
  try {
    const response = await api.get(`budget/get-initial/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Fetch initial budget: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch initial budget!");
  }
};

export const updateBudget = async (
  id,
  hotels,
  dressers,
  photography,
  floral,
  jewellary,
  dancing_groups,
  ashtaka,
  salons,
  dJs,
  honeymoon,
  cars,
  invitation_cards,
  poruwa,
  catering
) => {
  try {
    const formData = new FormData();
    formData.append("hotels", hotels);
    formData.append("dressers", dressers);
    formData.append("photography", photography);
    formData.append("floral", floral);
    formData.append("jewellary", jewellary);
    formData.append("dancing_groups", dancing_groups);
    formData.append("ashtaka", ashtaka);
    formData.append("salons", salons);
    formData.append("dJs", dJs);
    formData.append("honeymoon", honeymoon);
    formData.append("cars", cars);
    formData.append("invitation_cards", invitation_cards);
    formData.append("poruwa", poruwa);
    formData.append("catering", catering);

    const response = await api.put(`/budget/update-budget/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
        }
    });
    return response.data
  } catch (error) {
    throw new Error('Failed to update package!');
  }
};

export const getMinPackages = async () => {
  try {
    const response = await api.get(`budget/get-min`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Fetch minimum budget: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch minimum budget!");
  }
};


export const getMinPackagesForCategory = async (planId, category) => {
  if (!planId || !category) {
      console.error('Invalid planId or category:', { planId, category });
      throw new Error('Invalid planId or category');
  }

  try {
      const normalizedCategory = category.toLowerCase();
      console.log('Fetching packages for:', { planId, normalizedCategory });
      const response = await api.post(
          `budget/find-packages`,
          { planId, category: normalizedCategory },
          {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          }
      );
      console.log('Fetched packages:', response.data);
      return response.data;
  } catch (error) {
      console.error('Failed to fetch packages:', error.response?.data || error.message);
      throw new Error('Failed to fetch packages!');
  }
};

export const getAllPackages = async () => {
  try {
    const response = await api.get(`/budget/get-all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Fetch budget: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch budget!");
  }
}

// export const ChangeBudgetStatus = async (id) => {
//     try {
//         const response = await api.patch(`/budget/budget-status/${id}`, null, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         throw new Error(error.response?.data?.message || "Failed to update status.");
//     }
// };

export const ChangeBudgetStatus = async (id) => {
  try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found in localStorage.');

      const response = await api.put(
          `/budget/budget-status/${id}`, 
          {}, // Pass an empty object if no payload is required
          {
              headers: {
                  Authorization: `Bearer ${token}`, // Correctly include the Authorization header
              },
          }
      );

      return response.data;
  } catch (error) {
      console.error('Error toggling package status:', error.response?.data || error.message);
      throw error; // Re-throw the error for handling in the caller
  }
};

export const getBudgetById = async (id) => {
  try {
      const response = await api.get(`budget/get-one/${id}`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      });
      return response.data;  // This will be the data object you use
  } catch (error) {
      throw new Error("Failed to fetch budget!");
  }
};

export const deleteBudget = async (id) => {
  try {
      const response = await api.delete(`/budget/delete/${id}`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
          }
      });
      return response.data;  // Return the actual API response (if available)
  } catch (error) {
      // Include the error message from the server if available
      throw new Error(error.response?.data?.message || 'Failed to delete budget!');
  }
};

