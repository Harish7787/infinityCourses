import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Camera,
  Save,
  X,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/axios";
import Navbar from "../../Component/common/header";
import Footer from "../../Component/common/footer";

const EditUserProfile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    id: "",
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

      setForm({
        id: res.data.id,
        name: res.data.name || "",
        email: res.data.email || "",
        phone: res.data.phone || "",
        avatar: res.data.avatar || "",
      });
    } catch (err) {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
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
      });

      toast.success("Profile Updated Successfully");

      navigate("/profile");
    } catch (err) {
      toast.error("Update Failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex justify-center items-center">
          <Loader2 size={50} className="animate-spin text-indigo-600" />
        </div>

        <Footer />
      </>
    );
  }

  const avatar =
    form.avatar.trim() !== ""
      ? form.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
          form.name
        )}&background=4f46e5&color=fff&size=256`;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 dark:bg-black py-10 px-4">

        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl"
          >

            {/* Cover */}

            <div className="h-52 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600"></div>

            {/* Avatar */}

            <div className="-mt-20 flex justify-center">

              <img
                src={avatar}
                alt=""
                className="h-40 w-40 rounded-full border-[6px] border-white object-cover shadow-xl"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    form.name
                  )}&background=4f46e5&color=fff`;
                }}
              />

            </div>

            {/* Heading */}

            <div className="text-center mt-5">

              <h1 className="text-4xl font-black dark:text-white">
                Edit Profile
              </h1>

              <p className="mt-2 text-zinc-500">
                Keep your profile information up to date.
              </p>

            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6 p-10"
            >

              {/* Name */}

              <InputField
                icon={<User size={18} />}
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              {/* Email */}

              <InputField
                icon={<Mail size={18} />}
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              {/* Phone */}

              <InputField
                icon={<Phone size={18} />}
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />

              {/* Avatar */}

              <InputField
                icon={<Camera size={18} />}
                label="Avatar URL"
                name="avatar"
                value={form.avatar}
                onChange={handleChange}
              />

              {/* Buttons */}

              <div className="md:col-span-2 flex justify-end gap-4 mt-6">

                <button
                  type="button"
                  onClick={() => navigate("/profile")}
                  className="flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
                >
                  <X size={18} />
                  Cancel
                </button>

                <button
                  disabled={saving}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  {saving ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
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

          </motion.div>

        </div>
   <Footer />
      </div>

   
    </>
  );
};

const InputField = ({
  icon,
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div>

      <label className="mb-2 flex items-center gap-2 font-semibold dark:text-white">
        {icon}
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
      />

    </div>
  );
};

export default EditUserProfile;