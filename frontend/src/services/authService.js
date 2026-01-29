import axios from "axios";

const API = "http://localhost:3000";

export const loginRequest = (email, password) =>
  axios.post(`${API}/login`, { email, password });

export const registerRequest = (email, password) =>
  axios.post(`${API}/register`, { email, password });