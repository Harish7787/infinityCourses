
// export default UsersData;
import React, { useEffect, useState } from "react";


import {
  Search,
  UserPlus,
  Edit3,
  Trash2,
  Mail,
  Phone,
  Shield,
} from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { getUsers } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../api/userApi";
import { toast } from "react-toastify";
const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();

      console.log(res.data);

      setUsers(res.data.content || []);
    } catch (error) {
      console.log(error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase())
  );

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (u) => u.active
  ).length;

  const adminUsers = users.filter(
    (u) => u.role === "ADMIN"
  ).length;

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="h-14 w-14 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }
const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  try {

    await deleteUser(id);

    toast.success("User deleted successfully");

    fetchUsers();

  } catch (error) {

    toast.error(
      error?.response?.data?.message ||
      "Failed to delete user"
    );

  }
};
  return (
    <div className="space-y-6">

      {/* Header */}
      {/* <div className="flex justify-between items-center">

    <div>
      <h1 className="text-3xl font-bold">
        Users Management
      </h1>

      <p className="text-slate-500">
        Manage registered users
      </p>
    </div>

  </div> */}

      <div className=" items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Users Management
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all registered users
          </p>
        </div>


        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mt-6">

          {/* Search */}
          <div className="relative flex-1 max-w-lg">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search users by name or email..."
              className="
        w-full
        bg-white
        dark:bg-[#111827]
        border
        border-slate-200
        dark:border-slate-700
        rounded-2xl
        pl-11
        pr-4
        py-3
        text-sm
        outline-none
        transition-all
        focus:ring-2
        focus:ring-indigo-500/30
        focus:border-indigo-500
      "
            />

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">

            {/* Restore Users */}
            <button
              className="
        flex
        items-center
        gap-2
        bg-green-600
        hover:bg-green-700
        text-white
        font-medium
        px-5
        py-3
        rounded-2xl
        shadow-md
        transition-all
        duration-300
      "
              onClick={() => { navigate("/admin/restore-users") }}
            >
              <UserPlus size={18} />
              Restore Users
            </button>

            {/* Add User */}
            <button
              className="
        flex
        items-center
        gap-2
        bg-gradient-to-r
        from-indigo-600
        to-violet-600
        hover:from-indigo-500
        hover:to-violet-500
        text-white
        font-medium
        px-5
        py-3
        rounded-2xl
        shadow-lg
        shadow-indigo-500/20
        transition-all
        duration-300
      "
              onClick={() => { navigate("/admin/add-user") }}
            >
              <UserPlus size={18} />
              Add User
            </button>

          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 border">
            <p className="text-white-500 text-sm">
              Total Users
            </p>
            <h2 className="text-3xl px-3 mt-2 font-bold">
              {totalUsers}
            </h2>
          </div>

          <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 border">
            <p className="text-white-500 text-sm">
              Active Users
            </p>
            <h2 className="text-3xl px-3 mt-2 font-bold text-green-600">
              {activeUsers}
            </h2>
          </div>

          <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 border">
            <p className="text-slate-500 text-sm">
              Admin Users
            </p>
            <h2 className="text-3xl px-3 mt-2 font-bold text-purple-600">
              {adminUsers}
            </h2>
          </div>

        </div>
      </div>

      <div className="bg-white dark:bg-[#111827] rounded-3xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            {/* <thead>

              <tr
                className="bg-slate-50 dark:bg-slate-900 text-slate-400 font-semibold text-xs uppercase border-b border-slate-200 dark:border-slate-800
          "
              >

                <th className="px-6 py-4 text-left">
                  User
                </th>

                <th className="px-6 py-4 text-left">
                  Email
                </th>

                <th className="px-6 py-4 text-left">
                  Phone
                </th>

                <th className="px-6 py-4 text-left">
                  Role
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead> */}

            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                  User
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                  Contact
                </th>

                <th className="px-6 py-4 text-center text-xs font-semibold uppercase">
                  Role
                </th>

                <th className="px-6 py-4 text-center text-xs font-semibold uppercase">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-xs font-semibold uppercase">
                  Actions
                </th>

              </tr>
            </thead>
            <tbody>

              {filteredUsers.length > 0 ? (

                filteredUsers.map((user) => (

                  <tr
                    key={user.id}
                    className="
          border-b
          border-slate-100
          dark:border-slate-800
          hover:bg-slate-50
          dark:hover:bg-slate-900/30
          transition-all
        "
                  >

                    {/* User Info */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <img
                          src={
                            user.avatar
                              ? user.avatar
                              : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                user.name
                              )}&background=4f46e5&color=fff`
                          }
                          alt={user.name}
                          className="h-11 w-11 rounded-full object-cover border border-slate-200"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              user.name
                            )}&background=4f46e5&color=fff`;
                          }}
                        />

                        <div>

                          <h4 className="font-semibold text-slate-800 dark:text-white">
                            {user.name}
                          </h4>

                          <p className="text-xs text-slate-500">
                            ID #{user.id}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Contact */}
                    <td className="px-6 py-4">

                      <div className="space-y-1">

                        <div className="flex items-center gap-2 text-sm">

                          <Mail size={14} />

                          {user.email}

                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500">

                          <Phone size={14} />

                          {user.phone || "Not Available"}

                        </div>

                      </div>

                    </td>

                    {/* Role */}
                    <td className="px-6 py-4 text-center">

                      <span
                        className={`
              inline-flex
              items-center
              gap-1
              px-3
              py-1.5
              rounded-full
              text-xs
              font-semibold

              ${user.role === "ADMIN"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                          }
            `}
                      >
                        <Shield size={12} />

                        {user.role}

                      </span>

                    </td>

                    {/* Status */}
                    <td className="px-6 py-4 text-center">

                      <span
                        className={` px-3 py-1.5 rounded-full text-xs font-semibold

              ${user.active
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                          }
            `}
                      >
                        {user.active
                          ? "Active"
                          : "Inactive"}
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">

                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() =>
                            navigate(`/admin/edit-user/${user.id}`)
                          }
                          className=" p-2 rounded-lg text-indigo-500 hover:bg-indigo-50 "
                        >
                          <Edit3 size={16} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(user.id)
                          }
                          className=" p-2 rounded-lg text-red-500 hover:bg-red-50 "
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center py-16"
                  >

                    <div className="flex flex-col items-center">

                      <img
                        src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
                        alt=""
                        className="w-20 h-20 opacity-40"
                      />

                      <p className="mt-3 text-slate-500">
                        No Users Found
                      </p>

                    </div>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>


      </div>

    </div>
  );
};

export default UsersData;