import React, { useEffect, useState } from "react";
import axios from "axios";
import { RotateCcw, Search, RefreshCw, Mail } from "lucide-react";
import { toast } from "react-toastify";
import BackButton from "./BackButton";

const RestoreUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchDeletedUsers();
    }, []);

    const fetchDeletedUsers = async () => {
        try {
            const res = await axios.get(
                "http://localhost:2334/api/users/deleted",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            console.log(res);
            setUsers(res.data.content || []);
        } catch (error) {
            toast.error("Failed to fetch deleted users");
        } finally {
            setLoading(false);
        }
    };

    const restoreUser = async (id) => {
        try {
            await axios.put(
                `http://localhost:2334/api/users/restore/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            toast.success("User Restored Successfully");

            setUsers((prev) =>
                prev.filter((user) => user.id !== id)
            );

        } catch (error) {
            toast.error("Restore Failed");
        }
    };
    const filteredUsers = users.filter(
        (user) =>
            user.name?.toLowerCase().includes(search.toLowerCase()) ||
            user.email?.toLowerCase().includes(search.toLowerCase())
    );
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[400px]">
                <RefreshCw
                    size={40}
                    className="animate-spin"
                />
            </div>
        );
    }
    return (
        <div className="space-y-6">

            <BackButton />

            <div className="relative mb-6">
                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    type="text"
                    placeholder="Search deleted users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
      w-full
      pl-10
      pr-4
      py-3
      rounded-2xl
      border
      bg-white
      dark:bg-[#111827]
    "
                />
            </div>

            <div
                className="
    bg-white
    dark:bg-[#111827]
    rounded-3xl
    border
    border-slate-200
    dark:border-slate-800
    overflow-hidden
    shadow-sm
  "
            >

                <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">

                    <h2 className="text-2xl font-bold">
                        Restore Users
                    </h2>

                    <p className="text-slate-500 mt-1">
                        View deleted users and restore them.
                    </p>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">

                                <th className="px-6 py-4 text-left text-xs uppercase">
                                    User
                                </th>

                                <th className="px-6 py-4 text-left text-xs uppercase">
                                    Email
                                </th>

                                <th className="px-6 py-4 text-center text-xs uppercase">
                                    Role
                                </th>

                                <th className="px-6 py-4 text-center text-xs uppercase">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-center text-xs uppercase">
                                    Action
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
          dark:hover:bg-slate-900/40
          transition-all
        "
                                    >
                                        {/* User */}
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
                                                    className="w-11 h-11 rounded-full object-cover border border-slate-200"
                                                    onError={(e) => {
                                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                            user.name
                                                        )}&background=4f46e5&color=fff`;
                                                    }}
                                                />

                                                <div>
                                                    <h4 className="font-semibold">
                                                        {user.name}
                                                    </h4>

                                                    <p className="text-xs text-slate-500">
                                                        ID #{user.id}
                                                    </p>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Email */}
                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>

                                        {/* Role */}
                                        <td className="px-6 py-4 text-center">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold
              ${user.role === "ADMIN"
                                                        ? "bg-purple-100 text-purple-700"
                                                        : user.role === "SELLER"
                                                            ? "bg-orange-100 text-orange-700"
                                                            : "bg-blue-100 text-blue-700"
                                                    }`}
                                            >
                                                {user.role}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-4 text-center">
                                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                                                Deleted
                                            </span>
                                        </td>

                                        {/* Action */}
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => restoreUser(user.id)}
                                                className="
              inline-flex
              items-center
              gap-2
              bg-green-600
              hover:bg-green-700
              text-white
              px-4
              py-2
              rounded-xl
              transition-all
            "
                                            >
                                                <RotateCcw size={16} />
                                                Restore
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="py-16 text-center">
                                        <div className="flex flex-col items-center">

                                            <RotateCcw
                                                size={45}
                                                className="text-slate-300 mb-3"
                                            />

                                            <p className="text-slate-500 font-medium">
                                                No Deleted Users Found
                                            </p>

                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>

                </div>

            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">

                {filteredUsers.map((user) => (

                    <div
                        key={user.id}
                        className="
        bg-white
        dark:bg-[#111827]
        rounded-2xl
        border
        p-5
      "
                    >

                        <h3 className="font-bold text-lg">
                            {user.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-2 text-sm">
                            <Mail size={15} />
                            {user.email}
                        </div>

                        <button
                            onClick={() => restoreUser(user.id)}
                            className="
          w-full
          mt-4
          bg-green-600
          hover:bg-green-700
          text-white
          py-3
          rounded-xl
          flex
          justify-center
          items-center
          gap-2
        "
                        >
                            <RotateCcw size={16} />
                            Restore User
                        </button>

                    </div>

                ))}

            </div> */}
        </div>
    );
};

export default RestoreUsers;