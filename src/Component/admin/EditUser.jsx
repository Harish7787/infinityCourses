import React, {
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import {
  useParams,
} from "react-router-dom";

import BackButton from "./BackButton";

const EditUser = () => {

  const { id } = useParams();

  const [user, setUser] =
    useState({
      name: "",
      email: "",
      phone: "",
    });

useEffect(() => {

  fetchUser();

}, [id]);

const fetchUser = async () => {

  try {

    const res =
      await getUserById(id);

    setUser(res.data);

  } catch (error) {

    console.log(error);

    toast.error(
      "Failed To Load User"
    );
  }
};

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

 const handleUpdate = async (
  e
) => {

  e.preventDefault();

  try {

    const payload = {

      name: user.name,

      email: user.email,

      phone: user.phone,

      avatar: user.avatar,

      role: user.role,

      active: user.active,
    };

    await updateUser(
      id,
      payload
    );

    toast.success(
      "User Updated Successfully"
    );

    navigate("/admin/users");

  } catch (error) {

    console.log(error);

    toast.error(
      error?.response?.data?.message ||
      "Update Failed"
    );
  }
};

  return (
    <div className="space-y-6">

      <BackButton />

      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 shadow">

        <h2 className="text-2xl font-bold mb-6">
          Edit User
        </h2>

        <form
          onSubmit={handleUpdate}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            className="input"
          />

          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            className="input"
          />

          <input
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="input"
          />

          <button
            className="
              bg-green-600
              text-white
              py-3
              rounded-xl
              col-span-full
            "
          >
            Update User
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditUser;