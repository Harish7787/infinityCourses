import React, {
    useEffect,
    useState,
} from "react";
import {
  RefreshCw
} from "lucide-react";
import { toast } from "react-toastify";
import {
    useNavigate,
    useParams,
} from "react-router-dom";
import { getUserById , updateUser } from "../../api/userApi";
import BackButton from "./BackButton";

const EditUser = () => {
    const navigate = useNavigate()
    const { id } = useParams();
const [loading, setLoading] = useState(true);
const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
    role: "USER",
    active: true,
});

    useEffect(() => {

        fetchUser();

    }, [id]);

    const fetchUser = async () => {

        try {

            const res =
                await getUserById(id);

            setUser(res.data);
          setLoading(false);
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
               setLoading(true);

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

        }   catch (error) {

        console.log(error);

        toast.error("Failed To Load User");

    } finally {

        setLoading(false);

    }
};

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

      {/* User Preview Card */}

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
              user.avatar ||
              "https://ui-avatars.com/api/?name=" +
                encodeURIComponent(user.name || "User")
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
            {user.name || "User Name"}
          </h3>

          <p className="text-slate-500">
            {user.email || "user@email.com"}
          </p>

          <span
            className={`
              mt-4
              px-4
              py-1
              rounded-full
              text-sm
              font-medium
              ${
                user.role === "ADMIN"
                  ? "bg-red-100 text-red-600"
                  : "bg-indigo-100 text-indigo-600"
              }
            `}
          >
            {user.role || "USER"}
          </span>

          <div className="mt-6 w-full">

            <div className="flex justify-between py-3 border-b">
              <span className="text-slate-500">
                Status
              </span>

              <span
                className={`font-medium ${
                  user.active
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {user.active ? "Active" : "Inactive"}
              </span>
            </div>

            <div className="flex justify-between py-3">
              <span className="text-slate-500">
                User ID
              </span>

              <span className="font-medium">
                #{id}
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Edit Form */}

      <div
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
            Edit User
          </h2>

          <p className="text-slate-500 mt-1">
            Update user information and permissions
          </p>

        </div>

        <form
          onSubmit={handleUpdate}
          className="space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={user.name}
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
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={user.email}
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
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={user.phone}
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
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Role
              </label>

              <select
                name="role"
                value={user.role || "USER"}
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
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              >
                <option value="USER">
                  USER
                </option>

                <option value="ADMIN">
                  ADMIN
                </option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium">
                Avatar URL
              </label>

              <input
                type="text"
                name="avatar"
                value={user.avatar || ""}
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
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />
            </div>

          </div>

          <div
            className="
              flex
              justify-end
              gap-4
              pt-6
              border-t
              border-slate-200
              dark:border-slate-800
            "
          >
            <button
              type="button"
              onClick={() => navigate("/admin/users")}
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

            <button
              type="submit"
              className="
                px-8
                py-3
                rounded-xl
                bg-gradient-to-r
                from-green-600
                to-emerald-600
                hover:from-green-500
                hover:to-emerald-500
                text-white
                font-medium
                shadow-lg
              "
            >
              Update User
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>
);
};

export default EditUser;