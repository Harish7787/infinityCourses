// "use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      className="
        min-h-screen
        bg-gradient-to-br
        from-indigo-50
        via-white
        to-violet-100
        dark:from-zinc-950
        dark:via-zinc-900
        dark:to-indigo-950
        px-6
        py-32
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              text-zinc-900
              dark:text-white
            "
          >
            Contact Us
          </h1>

          <p
            className="
              mt-5
              text-lg
              text-zinc-600
              dark:text-zinc-300
              max-w-2xl
              mx-auto
            "
          >
            Have questions about courses, pricing, or learning plans?
            Our team is ready to help you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border border-white/20
              dark:border-white/10
              bg-white/70
              dark:bg-zinc-900/70
              backdrop-blur-xl
              p-8
              shadow-xl
            "
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Get In Touch
            </h2>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Reach out anytime. We usually respond within 24 hours.
            </p>

            <div className="mt-10 space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    bg-indigo-100
                    dark:bg-indigo-900/40
                    text-indigo-600
                  "
                >
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    Email
                  </h4>

                  <p className="text-zinc-600 dark:text-zinc-400">
                    support@courseplatform.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    bg-violet-100
                    dark:bg-violet-900/40
                    text-violet-600
                  "
                >
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    Phone
                  </h4>

                  <p className="text-zinc-600 dark:text-zinc-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    bg-pink-100
                    dark:bg-pink-900/40
                    text-pink-600
                  "
                >
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    Address
                  </h4>

                  <p className="text-zinc-600 dark:text-zinc-400">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    bg-orange-100
                    dark:bg-orange-900/40
                    text-orange-600
                  "
                >
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    Working Hours
                  </h4>

                  <p className="text-zinc-600 dark:text-zinc-400">
                    Mon - Sat : 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div
              className="
                mt-10
                rounded-2xl
                bg-gradient-to-r
                from-indigo-500
                to-violet-600
                p-6
                text-white
              "
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="h-7 w-7" />

                <div>
                  <h3 className="font-bold text-lg">
                    Live Support Available
                  </h3>

                  <p className="text-sm opacity-90">
                    Chat with our team anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="
              rounded-3xl
              border border-white/20
              dark:border-white/10
              bg-white/70
              dark:bg-zinc-900/70
              backdrop-blur-xl
              p-8
              shadow-xl
            "
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Send Message
            </h2>

            <div className="mt-8 space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="
                    w-full
                    rounded-2xl
                    border border-zinc-200 dark:border-zinc-700
                    bg-white/80 dark:bg-zinc-800/60
                    px-5 py-4
                    text-zinc-900 dark:text-white
                    outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-2xl
                    border border-zinc-200 dark:border-zinc-700
                    bg-white/80 dark:bg-zinc-800/60
                    px-5 py-4
                    text-zinc-900 dark:text-white
                    outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="
                    w-full
                    rounded-2xl
                    border border-zinc-200 dark:border-zinc-700
                    bg-white/80 dark:bg-zinc-800/60
                    px-5 py-4
                    text-zinc-900 dark:text-white
                    outline-none
                    resize-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                  required
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="
                  flex items-center justify-center gap-2
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-600
                  py-4
                  text-white
                  font-semibold
                  shadow-xl shadow-indigo-500/20
                "
              >
                Send Message
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}