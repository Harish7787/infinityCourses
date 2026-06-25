import axios from "axios";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:2334"
    : "http://192.168.1.47:2334";

const BASE_URL = `${API_URL}/api/users`;

const getToken = () =>
  localStorage.getItem("token");

/* GET ALL USERS */

export const getUsers = async (
  page = 0,
  size = 10
) => {

  return axios.get(
    `${BASE_URL}?page=${page}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
};

/* GET USER */

export const getUserById = async (id) => {

  return axios.get(
    `${BASE_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
};

/* CREATE USER */

export const createUser = async (
  userData
) => {

  return axios.post(
    BASE_URL,
    userData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
};

/* UPDATE USER */

export const updateUser = async (
  id,
  userData
) => {

  return axios.put(
    `${BASE_URL}/${id}`,
    userData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
};

/* DELETE USER */

export const deleteUser = async (
  id
) => {

  return axios.delete(
    `${BASE_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
};

/* RESTORE USER */

export const restoreUser = async (
  id
) => {

  return axios.put(
    `${BASE_URL}/restore/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
};