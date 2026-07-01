import api from "./axios";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:2334"
    : "http://192.168.1.113:2334";

const BASE_ORDER_URL = `${API_URL}/api/payment`;
const token = localStorage.getItem("token");

//console.log("TOKEN =", token);
// export const createOrder = async (orderData) => {
//   const token = localStorage.getItem("token");

//   return await axios.post(
//     `${BASE_ORDER_URL}/create-order`,
//     orderData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };

export const createOrder = async (orderData) => {
  return await api.post(
    "/api/payment/create-order",
    orderData
  );
};