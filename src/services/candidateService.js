import axios from "axios";

// Base URL of your Spring Boot backend
const API_URL = "http://localhost:9090/api/candidates";

// Fetch all candidates
export const getAllCandidates = () => {
  return axios.get(API_URL);
};

// Add a new candidate
export const addCandidate = (candidate) => {
  return axios.post(API_URL, candidate);
};

// Remove a candidate by ID
export const removeCandidate = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
