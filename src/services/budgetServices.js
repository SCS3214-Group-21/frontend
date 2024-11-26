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
