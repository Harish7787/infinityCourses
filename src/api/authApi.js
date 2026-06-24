
import axios from "axios";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:2334"
    : "http://192.168.1.47:2334";

const BASE_URL = `${API_URL}/api/auth`;
const BASE_ORDER_URL = `${API_URL}/api/payment`;

// REGISTER API
export const registerUser = async (data) => {
  return await axios.post(`${BASE_URL}/register`, data);
};

// LOGIN API
export const loginUser = async (data) => {
  return await axios.post(`${BASE_URL}/login`, data);
};

// CREATE ORDER API
export const createOrder = async (orderData) => {
  const token = localStorage.getItem("token");

  return await axios.post(
    `${BASE_ORDER_URL}/create-order`,
    orderData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
