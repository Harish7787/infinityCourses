import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  ShieldCheck,
  Pencil,
  Activity,
  Hash,
  CalendarDays,
  BookOpen,
  Award,
  GraduationCap,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Navbar from "../../Component/common/header";
import Footer from "../../Component/common/footer";

const UserProfile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await api.get("/api/users/me");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex justify-center items-center">
          <Loader2
            size={55}
            className="animate-spin text-indigo-600"
          />
        </div>

        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex justify-center items-center">
          User not found
        </div>

        <Footer />
      </>
    );
  }

  const avatar =
    user.avatar && user.avatar.trim() !== ""
      ? user.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
          user.name
        )}&background=4f46e5&color=ffffff&size=256`;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 dark:bg-black py-10 px-4">

        <div className="max-w-6xl mx-auto">

          {/* Cover */}

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-2xl"
          >

            <div className="absolute inset-0 bg-black/10" />

          </motion.div>

          {/* Profile Card */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="-mt-28 relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8"
          >

            {/* Header */}

            <div className="flex flex-col lg:flex-row justify-between gap-8">

              <div className="flex flex-col md:flex-row items-center gap-6">

                <img
                  src={avatar}
                  alt={user.name}
                  className="h-40 w-40 rounded-full border-[6px] border-white object-cover shadow-xl"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.name
                    )}&background=4f46e5&color=fff`;
                  }}
                />

                <div>

                  <h1 className="text-4xl font-black dark:text-white">
                    {user.name}
                  </h1>

                  <p className="mt-2 text-zinc-500">
                    {user.email}
                  </p>

                  <span className="inline-flex mt-4 items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-4 py-2 font-semibold">

                    <ShieldCheck size={18} />

                    {user.role}

                  </span>

                </div>

              </div>

              <div>

                <button
                  onClick={() => navigate("/profile/edit")}
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition"
                >

                  <Pencil className="inline mr-2" size={18} />

                  Edit Profile

                </button>

              </div>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-950 p-6 text-center">

                <BookOpen className="mx-auto text-indigo-600" />

                <h2 className="text-4xl font-black mt-4 dark:text-white">
                  12
                </h2>

                <p className="text-zinc-500 mt-2">
                  Enrolled Courses
                </p>

              </div>

              <div className="rounded-2xl bg-green-50 dark:bg-green-950 p-6 text-center">

                <GraduationCap className="mx-auto text-green-600" />

                <h2 className="text-4xl font-black mt-4 dark:text-white">
                  8
                </h2>

                <p className="text-zinc-500 mt-2">
                  Completed Courses
                </p>

              </div>

              <div className="rounded-2xl bg-yellow-50 dark:bg-yellow-950 p-6 text-center">

                <Award className="mx-auto text-yellow-600" />

                <h2 className="text-4xl font-black mt-4 dark:text-white">
                  5
                </h2>

                <p className="text-zinc-500 mt-2">
                  Certificates
                </p>

              </div>

            </div>

            {/* Information */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <InfoCard
                icon={<Mail className="text-indigo-600" />}
                title="Email"
                value={user.email}
              />

              <InfoCard
                icon={<Phone className="text-indigo-600" />}
                title="Phone"
                value={user.phone || "Not Available"}
              />

              <InfoCard
                icon={<Hash className="text-indigo-600" />}
                title="User ID"
                value={`#${user.id}`}
              />

              <InfoCard
                icon={<CalendarDays className="text-indigo-600" />}
                title="Member Since"
                value="January 2026"
              />

              <InfoCard
                icon={<Activity className="text-indigo-600" />}
                title="Account Status"
                value={user.active ? "Active" : "Inactive"}
              />

              <InfoCard
                icon={<ShieldCheck className="text-indigo-600" />}
                title="Role"
                value={user.role}
              />

            </div>

          </motion.div>

        </div>
 <Footer />
      </div>

     
    </>
  );
};

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-zinc-800 p-6 shadow">

      <div className="mb-3">
        {icon}
      </div>

      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-semibold dark:text-white">
        {value}
      </h3>

    </div>
  );
};

export default UserProfile;