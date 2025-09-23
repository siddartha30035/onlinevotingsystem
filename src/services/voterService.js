import axios from "axios";

const API_URL = "http://localhost:9090/api/voters"; // backend endpoint

// Register voter
export const registerVoter = async (voterData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, voterData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

// Fetch all voters
export const getAllVoters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch voters");
  }
};

// Delete voter by ID
export const deleteVoterById = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete voter");
  }
};
