
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../api/createOrder";

const BookNow = ({ course, onClose }) => {

  const navigate = useNavigate();

  // Login Check
  useEffect(() => {

    const token = localStorage.getItem("token");

    console.log(token)
    if (!token) {

      // alert("Please login first");

      navigate("/login");
    }

  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async (e) => {

  e.preventDefault();

  try {

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }
    // Create Order
    const { data } = await createOrder({
      courseName: course.title,
      userName: formData.name,
      email: formData.email,
      phone: formData.phone,
      amount: course.price,
    });

console.log("ORDER ID =", data.orderId);
const orderId = data.orderId;

    // Razorpay Options
    const options = {

      key: "rzp_test_SvTMpnWWvTJ9oB",

      amount: data.amount,

      currency: data.currency,

      name: "Course Academy",

      description: `Payment for ${course.title}`,

      order_id: data.id,

     handler: async function (response) {
console.log(
  "Payment Success Full Response:",
  JSON.stringify(response, null, 2)
);

  try {

    const token = localStorage.getItem("token");

const requestBody = {
  razorpayOrderId: orderId,
  razorpayPaymentId: response.razorpay_payment_id,
  razorpaySignature: response.razorpay_signature,

  courseName: course.title,
  userName: formData.name,
  email: formData.email,
  phone: formData.phone,
  amount: course.price
};

console.log("REQUEST BODY =", requestBody);

const saveResponse = await axios.post(
  "http://localhost:2334/api/payment/verify",
  requestBody,
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

console.log("Save API Success", saveResponse.data);
    alert("Payment Successful!");
    onClose();

  } catch (error) {

    console.log(error);

    alert("Payment verification failed");
  }
},

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },

      theme: {
        color: "#6366f1",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();

  } catch (error) {

    console.log(error);

    alert("Something went wrong");
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-zinc-900 p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Book Course
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-zinc-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Course Info */}
        <div className="mt-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800 p-4">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {course.title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {course.category} • ⭐ {course.rating}
          </p>

          <p className="mt-3 text-lg font-bold text-indigo-600 dark:text-indigo-400">
            ₹ {course.price}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handlePayment} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-zinc-300 bg-white dark:bg-zinc-800 px-4 py-3 outline-none focus:border-indigo-500 dark:text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-zinc-300 bg-white dark:bg-zinc-800 px-4 py-3 outline-none focus:border-indigo-500 dark:text-white"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-zinc-300 bg-white dark:bg-zinc-800 px-4 py-3 outline-none focus:border-indigo-500 dark:text-white"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 font-semibold text-white"
          
          >
            Pay & Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
// import React, { useState } from "react";

// const BookNow = ({ course, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     alert(
//       `Course Booked Successfully!\n\nCourse: ${course.title}\nName: ${formData.name}`
//     );

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
//       <div className="w-full max-w-md rounded-3xl bg-white dark:bg-zinc-900 p-8 shadow-2xl">
        
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
//             Book Course
//           </h2>

//           <button
//             onClick={onClose}
//             className="text-2xl text-zinc-500 hover:text-red-500"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Course Info */}
//         <div className="mt-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800 p-4">
//           <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
//             {course.title}
//           </h3>

//           <p className="mt-1 text-sm text-zinc-500">
//             {course.category} • ⭐ {course.rating}
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full rounded-2xl border border-zinc-300 bg-white dark:bg-zinc-800 px-4 py-3 outline-none focus:border-indigo-500 dark:text-white"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full rounded-2xl border border-zinc-300 bg-white dark:bg-zinc-800 px-4 py-3 outline-none focus:border-indigo-500 dark:text-white"
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Enter your phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full rounded-2xl border border-zinc-300 bg-white dark:bg-zinc-800 px-4 py-3 outline-none focus:border-indigo-500 dark:text-white"
//           />

//           <button
//             type="submit"
//             className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 font-semibold text-white"
//           >
//             Confirm Booking
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookNow;

