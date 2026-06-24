
// // import React from 'react';
// // import { Card } from '../ui/Card'; 
// // import { Badge } from '../ui/Badge';
// // import { usersData } from '../../data/mockData';
// // import { Search, UserPlus, MoreHorizontal } from 'lucide-react';

// // const UsersData = () => {
// //   return (
// //     <div className="space-y-6 mt-10">
// //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //         <div>
// //           <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Accounts Management</h1>
// //           <p className="text-sm text-slate-400 mt-1">Review user accounts, update system parameters, and change operational visibility profiles.</p>
// //         </div>
// //         <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white font-medium px-4 py-2.5 rounded-xl text-sm transition-all shadow-sm">
// //           <UserPlus size={16} /> Provision User
// //         </button>
// //       </div>

// //       <div className="relative max-w-sm">
// //         <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
// //         <input 
// //           type="text" 
// //           placeholder="Filter accounts..." 
// //           className="w-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
// //         />
// //       </div>

// //       {/* Adaptive Table-to-Card Grid Layout */}
// //       <Card className="overflow-hidden">
// //         <div className="overflow-x-auto hidden md:block">
// //           <table className="w-full text-left border-collapse">
// //             <thead>
// //               <tr className="bg-slate-50 dark:bg-slate-900 text-slate-400 font-semibold text-xs uppercase border-b border-slate-200 dark:border-slate-800">
// //                 <th className="py-3.5 px-6">Identified Profile</th>
// //                 <th className="py-3.5 px-6">Role Assignment</th>
// //                 <th className="py-3.5 px-6">Account Status</th>
// //                 <th className="py-3.5 px-6">Activity Horizon</th>
// //                 <th className="py-3.5 px-6 text-right">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
// //               {usersData.map((user) => (
// //                 <tr key={user.id} className="hover:bg-slate-50/40 dark:hover:bg-slate-900/20 transition-colors">
// //                   <td className="py-4 px-6 flex items-center gap-3">
// //                     <img src={user.avatar} alt="" className="w-9 h-9 rounded-full object-cover" />
// //                     <div>
// //                       <p className="font-medium">{user.name}</p>
// //                       <p className="text-xs text-slate-400">{user.email}</p>
// //                     </div>
// //                   </td>
// //                   <td className="py-4 px-6"><Badge variant={user.role === 'Instructor' ? 'indigo' : 'default'}>{user.role}</Badge></td>
// //                   <td className="py-4 px-6"><Badge variant={user.status === 'Active' ? 'success' : 'danger'}>{user.status}</Badge></td>
// //                   <td className="py-4 px-6 text-slate-400">{user.joins}</td>
// //                   <td className="py-4 px-6 text-right">
// //                     <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg transition-all"><MoreHorizontal size={16}/></button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Mobile View Card Grid */}
// //         <div className="grid grid-cols-1 divide-y divide-slate-100 dark:divide-slate-800 md:hidden">
// //           {usersData.map((user) => (
// //             <div key={user.id} className="p-4 space-y-3">
// //               <div className="flex items-center gap-3">
// //                 <img src={user.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
// //                 <div>
// //                   <p className="font-semibold text-sm">{user.name}</p>
// //                   <p className="text-xs text-slate-400">{user.email}</p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center justify-between pt-1">
// //                 <div className="space-x-1.5">
// //                   <Badge variant={user.role === 'Instructor' ? 'indigo' : 'default'}>{user.role}</Badge>
// //                   <Badge variant={user.status === 'Active' ? 'success' : 'danger'}>{user.status}</Badge>
// //                 </div>
// //                 <span className="text-xs text-slate-400">{user.joins}</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default UsersData;
// import React, { useEffect, useState } from "react";
// import {
//   Search,
//   Users,
//   MoreVertical,
//   Shield,
//   UserCircle2,
// } from "lucide-react";

// import { Card } from "../ui/Card";
// import { Badge } from "../ui/Badge";
// import { getUsers } from "../../api/userApi";

// const UsersData = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const res = await getUsers();

//       console.log("Users API =", res.data);

//       setUsers(res.data.content || []);
//     } catch (error) {
//       console.log(error);
//       setUsers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredUsers = users.filter((user) =>
//     user.name?.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[400px]">
//         <div className="h-14 w-14 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">

//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between gap-4">

//         <div>
//           <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
//             Users Management
//           </h1>

//           <p className="text-slate-500 mt-1">
//             Manage all registered platform users
//           </p>
//         </div>

//         <div className="flex items-center gap-3">

//           <div className="bg-indigo-50 dark:bg-slate-800 px-5 py-3 rounded-2xl">
//             <p className="text-xs text-slate-500">
//               Total Users
//             </p>

//             <h3 className="font-bold text-xl text-indigo-600">
//               {users.length}
//             </h3>
//           </div>

//         </div>
//       </div>

//       {/* Search */}
//       <div className="relative max-w-md">

//         <Search
//           size={18}
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//         />

//         <input
//           type="text"
//           placeholder="Search users..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="
//             w-full
//             rounded-2xl
//             border
//             border-slate-200
//             dark:border-slate-700
//             bg-white
//             dark:bg-slate-900
//             pl-11
//             pr-4
//             py-3
//             outline-none
//             focus:ring-2
//             focus:ring-indigo-500
//           "
//         />
//       </div>

//       {/* Desktop Table */}
//       <Card className="overflow-hidden hidden lg:block">

//         <div className="overflow-x-auto">

//           <table className="w-full">

//             <thead>

//               <tr className="bg-slate-50 dark:bg-slate-900 border-b">

//                 <th className="text-left p-5">
//                   User
//                 </th>

//                 <th className="text-left">
//                   Email
//                 </th>

//                 <th className="text-left">
//                   Phone
//                 </th>

//                 <th className="text-left">
//                   Role
//                 </th>

//                 <th className="text-left">
//                   Status
//                 </th>

//                 <th className="text-center">
//                   Action
//                 </th>

//               </tr>

//             </thead>

//             <tbody>

//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map((user) => (
//                   <tr
//                     key={user.id}
//                     className="
//                       border-b
//                       hover:bg-slate-50
//                       dark:hover:bg-slate-800
//                       transition
//                     "
//                   >
//                     <td className="p-5">

//                       <div className="flex items-center gap-3">

//                         <div className="h-11 w-11 rounded-full bg-indigo-100 flex items-center justify-center">
//                           <UserCircle2
//                             size={26}
//                             className="text-indigo-600"
//                           />
//                         </div>

//                         <div>

//                           <h4 className="font-semibold">
//                             {user.name}
//                           </h4>

//                           <p className="text-xs text-slate-500">
//                             ID : #{user.id}
//                           </p>

//                         </div>

//                       </div>

//                     </td>

//                     <td>{user.email}</td>

//                     <td>
//                       {user.phone || "-"}
//                     </td>

//                     <td>

//                       <Badge
//                         variant={
//                           user.role === "ADMIN"
//                             ? "danger"
//                             : "success"
//                         }
//                       >
//                         {user.role}
//                       </Badge>

//                     </td>

//                     <td>

//                       <Badge
//                         variant={
//                           user.active
//                             ? "success"
//                             : "danger"
//                         }
//                       >
//                         {user.active
//                           ? "Active"
//                           : "Inactive"}
//                       </Badge>

//                     </td>

//                     <td className="text-center">

//                       <button
//                         className="
//                           p-2
//                           rounded-lg
//                           hover:bg-slate-100
//                           dark:hover:bg-slate-700
//                         "
//                       >
//                         <MoreVertical size={18} />
//                       </button>

//                     </td>

//                   </tr>
//                 ))
//               ) : (
//                 <tr>

//                   <td
//                     colSpan="6"
//                     className="text-center py-12"
//                   >
//                     No Users Found
//                   </td>

//                 </tr>
//               )}

//             </tbody>

//           </table>

//         </div>

//       </Card>

//       {/* Mobile Cards */}
//       <div className="grid gap-4 lg:hidden">

//         {filteredUsers.map((user) => (

//           <Card
//             key={user.id}
//             className="p-5"
//           >

//             <div className="flex justify-between">

//               <div className="flex gap-3">

//                 <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
//                   <Users
//                     size={22}
//                     className="text-indigo-600"
//                   />
//                 </div>

//                 <div>

//                   <h3 className="font-semibold">
//                     {user.name}
//                   </h3>

//                   <p className="text-sm text-slate-500">
//                     {user.email}
//                   </p>

//                 </div>

//               </div>

//               <button>
//                 <MoreVertical size={18} />
//               </button>

//             </div>

//             <div className="mt-4 flex flex-wrap gap-2">

//               <Badge
//                 variant={
//                   user.role === "ADMIN"
//                     ? "danger"
//                     : "success"
//                 }
//               >
//                 <Shield size={12} />
//                 {user.role}
//               </Badge>

//               <Badge
//                 variant={
//                   user.active
//                     ? "success"
//                     : "danger"
//                 }
//               >
//                 {user.active
//                   ? "Active"
//                   : "Inactive"}
//               </Badge>

//             </div>

//             <div className="mt-3 text-sm text-slate-500">
//               Phone : {user.phone || "-"}
//             </div>

//           </Card>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default UsersData;
import React, { useEffect, useState } from "react";
import {
  Search,
  Users,
  Shield,
  UserCircle2,
  CheckCircle,
  MoreVertical,
} from "lucide-react";

import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { getUsers } from "../../api/userApi";

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="h-14 w-14 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
  <div className="space-y-6">

  {/* Header */}
  <div className="flex justify-between items-center">

    <div>
      <h1 className="text-3xl font-bold">
        Users Management
      </h1>

      <p className="text-slate-500">
        Manage registered users
      </p>
    </div>

  </div>

  {/* Search */}
  <div className="bg-white rounded-2xl border p-4">

    <div className="relative">

      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          border
          rounded-xl
          py-3
          pl-10
          pr-4
          outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />

    </div>

  </div>

  {/* Table */}
  <div
    className="
      bg-white
      rounded-2xl
      border
      overflow-hidden
    "
  >

    <table className="w-full">

      <thead>

        <tr
          className="
            bg-slate-50
            border-b
            text-slate-600
          "
        >
          <th className="p-4 text-left">
            Name
          </th>

          <th className="text-left">
            Email
          </th>

          <th className="text-left">
            Phone
          </th>

          <th className="text-left">
            Role
          </th>

          <th className="text-left">
            Status
          </th>

          <th className="text-center">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {filteredUsers.map((user) => (

          <tr
            key={user.id}
            className="
              border-b
              hover:bg-slate-50
            "
          >

            <td className="p-4">

              <div className="flex items-center gap-3">

                <div
                  className="
                    h-10
                    w-10
                    rounded-full
                    bg-indigo-100
                    flex
                    items-center
                    justify-center
                    font-semibold
                    text-indigo-600
                  "
                >
                  {user.name?.charAt(0)}
                </div>

                <span>
                  {user.name}
                </span>

              </div>

            </td>

            <td>{user.email}</td>

            <td>
              {user.phone || "-"}
            </td>

            <td>

              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-medium

                  ${
                    user.role === "ADMIN"
                      ? "bg-red-100 text-red-600"
                      : "bg-blue-100 text-blue-600"
                  }
                `}
              >
                {user.role}
              </span>

            </td>

            <td>

              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-medium

                  ${
                    user.active
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }
                `}
              >
                {user.active
                  ? "Active"
                  : "Inactive"}
              </span>

            </td>

            <td className="text-center">

              <button
                className="
                  p-2
                  rounded-lg
                  hover:bg-slate-100
                "
              >
                <MoreVertical size={18} />
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>
  );
};

export default UsersData;