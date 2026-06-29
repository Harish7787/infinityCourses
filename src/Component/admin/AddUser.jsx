import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    User,
    UserPlus,
    ArrowLeft,
} from "lucide-react";
import {
  RefreshCw
} from "lucide-react";
import BackButton from "./BackButton";
import { createUser } from "../../api/userApi";
const AddUser = () => {

    const navigate = useNavigate();
const [loading, setLoading] = useState();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        avatar: "",
        role: "USER",
        active: true,
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            setLoading(true);
            const payload = {
                name: form.name,
                email: form.email,
                password: form.password,
                phone: form.phone,
                avatar: form.avatar,
                role: form.role,
                active: form.active,
            };

            await createUser(payload);

            toast.success(
                "User Created Successfully"
            );

            navigate("/admin/users");

        } catch (error) {
            toast.error(
                error?.response?.data?.message ||
                "Failed To Create User"
            );
        } finally {
            setLoading(false);
        }
    };
    // return (

    //     <div className="max-w-7xl mx-auto">

    //         {/* Header */}

    //         <div className="flex items-center justify-between mb-8">

    //             <div>

    //                 <h1 className="text-3xl font-bold">
    //                     Add User
    //                 </h1>

    //                 <p className="text-slate-500 mt-1">
    //                     Create a new user account
    //                 </p>

    //             </div>

    //             {/* <button
    //       onClick={() => navigate(-1)}
    //       className="
    //         flex
    //         items-center
    //         gap-2
    //         px-5
    //         py-3
    //         rounded-xl
    //         border
    //         border-slate-300
    //         dark:border-slate-700
    //         hover:bg-slate-100
    //         dark:hover:bg-slate-800
    //       "
    //     >
    //       <ArrowLeft size={18} />
    //       Go Back
    //     </button> */}

    //         </div>

    //         <div className="grid lg:grid-cols-3 gap-8">

    //             {/* Preview */}

    //             <div
    //                 className="
    //         bg-white
    //         dark:bg-[#111827]
    //         border
    //         border-slate-200
    //         dark:border-slate-800
    //         rounded-3xl
    //         p-8
    //         shadow-sm
    //       "
    //             >

    //                 <div className="flex flex-col items-center">

    //                     <div
    //                         className="
    //             h-32
    //             w-32
    //             rounded-full
    //             overflow-hidden
    //             border-4
    //             border-indigo-100
    //           "
    //                     >

    //                         {form.avatar ? (

    //                             <img
    //                                 src={form.avatar}
    //                                 alt=""
    //                                 className="
    //                 h-full
    //                 w-full
    //                 object-cover
    //               "
    //                             />

    //                         ) : (

    //                             <div
    //                                 className="
    //                 h-full
    //                 w-full
    //                 bg-indigo-100
    //                 flex
    //                 items-center
    //                 justify-center
    //               "
    //                             >
    //                                 <User
    //                                     size={60}
    //                                     className="text-indigo-600"
    //                                 />
    //                             </div>

    //                         )}

    //                     </div>

    //                     <h3 className="mt-4 text-xl font-semibold">
    //                         {form.name || "User Name"}
    //                     </h3>

    //                     <p className="text-slate-500">
    //                         {form.email || "user@email.com"}
    //                     </p>

    //                     <span
    //                         className="
    //             mt-4
    //             px-4
    //             py-1
    //             rounded-full
    //             bg-indigo-100
    //             text-indigo-600
    //             text-sm
    //           "
    //                     >
    //                         {form.role}
    //                     </span>

    //                 </div>

    //             </div>

    //             {/* Form */}

    //             <form
    //                 onSubmit={handleSubmit}
    //                 className="
    //         lg:col-span-2
    //         bg-white
    //         dark:bg-[#111827]
    //         border
    //         border-slate-200
    //         dark:border-slate-800
    //         rounded-3xl
    //         p-8
    //         shadow-sm
    //       "
    //             >

    //                 <div className="grid md:grid-cols-2 gap-5">

    //                     <div>

    //                         <label className="block mb-2">
    //                             Full Name
    //                         </label>

    //                         <input
    //                             type="text"
    //                             name="name"
    //                             value={form.name}
    //                             onChange={handleChange}
    //                             className="w-full border rounded-xl px-4 py-3"
    //                         />

    //                     </div>

    //                     <div>

    //                         <label className="block mb-2">
    //                             Email
    //                         </label>

    //                         <input
    //                             type="email"
    //                             name="email"
    //                             value={form.email}
    //                             onChange={handleChange}
    //                             className="w-full border rounded-xl px-4 py-3"
    //                         />

    //                     </div>

    //                     <div>

    //                         <label className="block mb-2">
    //                             Phone
    //                         </label>

    //                         <input
    //                             type="text"
    //                             name="phone"
    //                             value={form.phone}
    //                             onChange={handleChange}
    //                             className="w-full border rounded-xl px-4 py-3"
    //                         />

    //                     </div>

    //                     <div>

    //                         <label className="block mb-2">
    //                             Password
    //                         </label>

    //                         <input
    //                             type="password"
    //                             name="password"
    //                             value={form.password}
    //                             onChange={handleChange}
    //                             className="w-full border rounded-xl px-4 py-3"
    //                         />

    //                     </div>

    //                     <div className="md:col-span-2">

    //                         <label className="block mb-2">
    //                             Avatar URL
    //                         </label>

    //                         <input
    //                             type="text"
    //                             name="avatar"
    //                             value={form.avatar}
    //                             onChange={handleChange}
    //                             className="w-full border rounded-xl px-4 py-3"
    //                         />

    //                     </div>

    //                     <div>

    //                         <label className="block mb-2">
    //                             Role
    //                         </label>

    //                         <select
    //                             name="role"
    //                             value={form.role}
    //                             onChange={handleChange}
    //                             className="w-full border rounded-xl px-4 py-3"
    //                         >
    //                             <option value="USER">USER</option>
    //                             <option value="ADMIN">ADMIN</option>
    //                         </select>

    //                     </div>

    //                     <div>

    //                         <label className="block mb-2">
    //                             Status
    //                         </label>

    //                         <select
    //                             value={form.active}
    //                             onChange={(e) =>
    //                                 setForm({
    //                                     ...form,
    //                                     active:
    //                                         e.target.value === "true",
    //                                 })
    //                             }
    //                             className="w-full border rounded-xl px-4 py-3"
    //                         >
    //                             <option value="true">
    //                                 Active
    //                             </option>

    //                             <option value="false">
    //                                 Inactive
    //                             </option>

    //                         </select>

    //                     </div>

    //                 </div>

    //                 <div
    //                     className="
    //           flex
    //           justify-end
    //           gap-3
    //           mt-8
    //           pt-6
    //           border-t
    //         "
    //                 >

    //                     <button
    //                         type="button"
    //                         onClick={() => navigate(-1)}
    //                         className="
    //             px-6
    //             py-3
    //             border
    //             rounded-xl
    //           "
    //                     >
    //                         Cancel
    //                     </button>

    //                     <button
    //                         type="submit"
    //                         className="
    //             flex
    //             items-center
    //             gap-2
    //             px-6
    //             py-3
    //             rounded-xl
    //             bg-indigo-600
    //             hover:bg-indigo-700
    //             text-white
    //           "
    //                     >
    //                         <UserPlus size={18} />
    //                         Create User
    //                     </button>

    //                 </div>

    //             </form>

    //         </div>

    //     </div>
    // );
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
        <div className="max-w-7xl mx-auto">

            <BackButton />

            <div className="grid lg:grid-cols-3 gap-8 mt-6">

                {/* Left Profile Preview */}

                <div
                    className="
          bg-white
          dark:bg-[#111827]
          rounded-3xl
          border
          border-slate-200
          dark:border-slate-800
          shadow-sm
          p-8
        "
                >
                    <div className="flex flex-col items-center">

                        <img
                            src={
                                form.avatar ||
                                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    form.name || "User"
                                )}&background=6366f1&color=fff`
                            }
                            alt=""
                            className="
              h-28
              w-28
              rounded-full
              object-cover
              border-4
              border-indigo-100
            "
                        />

                        <h3 className="mt-4 text-xl font-bold">
                            {form.name || "User Name"}
                        </h3>

                        <p className="text-slate-500">
                            {form.email || "user@email.com"}
                        </p>

                        <span
                            className={`
              mt-4
              px-4
              py-1
              rounded-full
              text-sm
              font-medium
              ${form.role === "ADMIN"
                                    ? "bg-red-100 text-red-600"
                                    : "bg-indigo-100 text-indigo-600"
                                }
            `}
                        >
                            {form.role}
                        </span>

                        <div className="mt-6 w-full">

                            <div className="flex justify-between py-3 border-b">
                                <span className="text-slate-500">
                                    Status
                                </span>

                                <span
                                    className={`font-medium ${form.active
                                            ? "text-green-600"
                                            : "text-red-600"
                                        }`}
                                >
                                    {form.active ? "Active" : "Inactive"}
                                </span>
                            </div>

                            <div className="flex justify-between py-3">
                                <span className="text-slate-500">
                                    Role
                                </span>

                                <span className="font-medium">
                                    {form.role}
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Right Form */}

                <form
                    onSubmit={handleSubmit}
                    className="
          lg:col-span-2
          bg-white
          dark:bg-[#111827]
          rounded-3xl
          border
          border-slate-200
          dark:border-slate-800
          shadow-sm
          p-8
        "
                >

                    <div className="mb-8">

                        <h2 className="text-3xl font-bold">
                            Add New User
                        </h2>

                        <p className="text-slate-500 mt-1">
                            Create a new platform user account
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        {/* Name */}

                        <div>

                            <label className="block mb-2 text-sm font-medium">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter full name"
                                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
              "
                            />

                        </div>

                        {/* Email */}

                        <div>

                            <label className="block mb-2 text-sm font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
              "
                            />

                        </div>

                        {/* Phone */}

                        <div>

                            <label className="block mb-2 text-sm font-medium">
                                Phone
                            </label>

                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Enter phone"
                                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
              "
                            />

                        </div>

                        {/* Password */}

                        <div>

                            <label className="block mb-2 text-sm font-medium">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
              "
                            />

                        </div>

                        {/* Avatar */}

                        <div className="md:col-span-2">

                            <label className="block mb-2 text-sm font-medium">
                                Avatar URL
                            </label>

                            <input
                                type="text"
                                name="avatar"
                                value={form.avatar}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
              "
                            />

                        </div>

                        {/* Role */}

                        <div>

                            <label className="block mb-2 text-sm font-medium">
                                Role
                            </label>

                            <select
                                name="role"
                                value={form.role}
                                onChange={handleChange}
                                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
              "
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>

                        </div>

                        {/* Status */}

                        <div>

                            <label className="block mb-2 text-sm font-medium">
                                Status
                            </label>

                            <select
                                value={form.active}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        active: e.target.value === "true",
                                    })
                                }
                                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
              "
                            >
                                <option value="true">
                                    Active
                                </option>

                                <option value="false">
                                    Inactive
                                </option>

                            </select>

                        </div>

                    </div>

                    <div
                        className="
            flex
            justify-end
            gap-4
            pt-6
            mt-8
            border-t
            border-slate-200
            dark:border-slate-800
          "
                    >

                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="
              px-6
              py-3
              rounded-xl
              border
              border-slate-300
              dark:border-slate-700
            "
                        >
                            Cancel
                        </button>

                        {/* <button
            type="submit"
            className="
              flex
              items-center
              gap-2
              px-8
              py-3
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              hover:from-indigo-500
              hover:to-violet-500
              text-white
              font-medium
              shadow-lg
            "
          >
            <UserPlus size={18} />
            Create User
          </button> */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="
    flex items-center gap-2
    px-6 py-3 rounded-xl
    bg-indigo-600 text-white
  "
                        >
                            {loading ? (
                                <>
                                    <RefreshCw
                                        size={18}
                                        className="animate-spin"
                                    />
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <UserPlus size={18} />
                                    Create User
                                </>
                            )}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddUser;