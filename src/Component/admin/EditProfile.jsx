import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";
import {
  User,
  Mail,
  Phone,
  Camera,
  Save,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

const loadProfile = async () => {
  try {

    const res = await api.get("/api/users/me");

    console.log("PROFILE DATA:", res.data);


    setForm({

      id: res.data.id,

      name: res.data.name || "",

      email: res.data.email || "",

      phone: res.data.phone || "",

      avatar: res.data.avatar || "",

      role: res.data.role || "ADMIN",

      active: res.data.active ?? true,

    });

   setLoading(false)
  } catch (err) {

    toast.error("Failed to load profile");

  }
};

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setSaving(true);

    await api.put(`/api/users/${form.id}`, {
      name: form.name,
      email: form.email,
      phone: form.phone,
      avatar: form.avatar,
      role: form.role,
      active: form.active,
    });

    toast.success("Profile Updated Successfully");

navigate('/admin/profile')
  } catch (err) {
    toast.error("Update Failed");
  } finally {
    setSaving(false);
  }
};

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="h-12 w-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  const avatar =
    form.avatar && form.avatar.trim() !== ""
      ? form.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
          form.name || "Admin"
        )}&background=4f46e5&color=ffffff&size=256`;

  return (
    <div className="max-w-4xl mx-auto px-5 py-8">

      <div className="bg-white dark:bg-[#111827] rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">

        {/* Cover */}

        <div className="h-32 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600" />

        {/* Avatar */}

        <div className="-mt-16 flex justify-center">

          <img
            src={avatar}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-xl"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                form.name
              )}&background=4f46e5&color=ffffff`;
            }}
          />

        </div>

        {/* Title */}

        <div className="text-center mt-5 px-6">

          <h1 className="text-3xl font-bold">
            Edit Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Update your personal information
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}

            <div>

              <label className="flex items-center gap-2 mb-2 font-medium">

                <User size={18} />

                Full Name

              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

            </div>

            {/* Email */}

            <div>

              <label className="flex items-center gap-2 mb-2 font-medium">

                <Mail size={18} />

                Email

              </label>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

            </div>

            {/* Phone */}

            <div>

              <label className="flex items-center gap-2 mb-2 font-medium">

                <Phone size={18} />

                Phone

              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

            </div>

            {/* Avatar */}

            <div>

              <label className="flex items-center gap-2 mb-2 font-medium">

                <Camera size={18} />

                Avatar URL

              </label>

              <input
                name="avatar"
                value={form.avatar}
                onChange={handleChange}
                placeholder="https://example.com/avatar.jpg"
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

            </div>

          </div>

          {/* Avatar Preview */}

          {/* <div className="pt-4">

            <p className="font-semibold mb-3">
              Avatar Preview
            </p>

            <div className="flex justify-center">

              <img
                src={avatar}
                alt="Preview"
                className="w-36 h-36 rounded-full object-cover border-4 border-indigo-200 shadow-lg"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    form.name
                  )}&background=4f46e5&color=ffffff`;
                }}
              />

            </div>

          </div> */}

          {/* Buttons */}

          <div className="flex justify-end gap-4 pt-6">

            <button
              type="button"
              onClick={() => navigate("/admin/profile")}
              className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2"
            >
              <X size={18} />
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2 disabled:opacity-60"
            >
              {saving ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProfile;