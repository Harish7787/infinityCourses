import axios from "axios";

const API =
  "http://localhost:2334/api/users";

export const getUsers = async () => {

  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        "token"
      )}`,
    },
  });
};