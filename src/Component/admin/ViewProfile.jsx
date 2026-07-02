// import React, { useEffect, useState } from "react";
// import { Mail, Phone, ShieldCheck, Pencil } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// const ViewProfile = () => {

//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     loadProfile();
//   }, []);

//   const loadProfile = async () => {
//     try {

//       const res = await api.get("/api/users/profile");

//       setUser(res.data);

//     } catch (err) {

//       console.log(err);

//     }
//   };

//   if (!user) {
//     return (
//       <div className="flex justify-center py-20">
//         Loading...
//       </div>
//     );
//   }

//   return (

//     <div className="max-w-4xl mx-auto">

//       <div className="bg-white dark:bg-[#111827] rounded-3xl shadow-xl overflow-hidden">

//         <div className="bg-gradient-to-r from-indigo-600 to-violet-600 h-36"/>

//         <div className="-mt-16 px-8 pb-8">

//           <img
//             src={
//               user.avatar
//                 ? user.avatar
//                 : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4f46e5&color=fff`
//             }
//             className="w-32 h-32 rounded-full border-4 border-white object-cover"
//           />

//           <div className="mt-5 flex justify-between flex-wrap gap-5">

//             <div>

//               <h2 className="text-3xl font-bold">
//                 {user.name}
//               </h2>

//               <span className="inline-flex mt-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-sm font-semibold">
//                 {user.role}
//               </span>

//             </div>

//             <button
//               onClick={() => navigate("/admin/profile/edit")}
//               className="bg-indigo-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
//             >
//               <Pencil size={18}/>
//               Edit Profile
//             </button>

//           </div>

//           <div className="grid md:grid-cols-2 gap-6 mt-10">

//             <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-5">

//               <Mail className="text-indigo-600 mb-2"/>

//               <h4 className="font-semibold">
//                 Email
//               </h4>

//               <p className="text-slate-500">
//                 {user.email}
//               </p>

//             </div>

//             <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-5">

//               <Phone className="text-indigo-600 mb-2"/>

//               <h4 className="font-semibold">
//                 Phone
//               </h4>

//               <p className="text-slate-500">
//                 {user.phone}
//               </p>

//             </div>

//             <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-5">

//               <ShieldCheck className="text-indigo-600 mb-2"/>

//               <h4 className="font-semibold">
//                 Role
//               </h4>

//               <p className="text-slate-500">
//                 {user.role}
//               </p>

//             </div>

//             <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-5">

//               <h4 className="font-semibold">
//                 Status
//               </h4>

//               <p className="text-green-600 font-semibold">
//                 Active
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>

//   );

// };

// export default ViewProfile;
import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  ShieldCheck,
  User,
  Pencil,
  Activity,
  Hash,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const ViewProfile = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [loading,setLoading] = useState(true);


  useEffect(()=>{

    loadProfile();

  },[]);



  const loadProfile = async()=>{

    try{

      const res = await api.get("/api/users/me");

      setUser(res.data);

    }
    catch(err){

      console.log(err);

    }
    finally{

      setLoading(false);

    }

  };



  if(loading){

    return(

      <div className="h-[400px] flex justify-center items-center">

        <Loader2 
          size={45}
          className="animate-spin text-indigo-600"
        />

      </div>

    )

  }



  if(!user){

    return(

      <div className="text-center mt-20 text-red-500">

        User not found

      </div>

    )

  }



  const avatar =
    user.avatar
    ?
    user.avatar
    :
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.name
    )}&background=4f46e5&color=fff`;



return (

<div className="max-w-4xl mx-auto px-5 py-8">


<div
className="
bg-white
dark:bg-[#111827]
rounded-3xl
shadow-xl
overflow-hidden
border
border-slate-200
dark:border-slate-800
"



>


{/* Cover */}

<div
className="
h-36
bg-gradient-to-r
from-indigo-600
via-violet-600
to-purple-600
"
/>



<div className="px-8 pb-8">


{/* Profile Header */}


<div
className="
-translate-y-16
flex
flex-col
md:flex-row
items-center
md:items-end
justify-between
gap-5
"
>


<div className="flex flex-col md:flex-row items-center gap-5">


<img

src={avatar}

alt={user.name}

className="
w-32
h-32
rounded-full
object-cover
border-4
border-white
shadow-xl
"

onError={(e)=>{

e.target.src =
`https://ui-avatars.com/api/?name=${encodeURIComponent(
user.name
)}&background=4f46e5&color=fff`

}}

/>


<div className="text-center md:text-left">


<h1
className="
text-3xl
font-bold
"
>

{user.name}

</h1>


{/* <p className="text-slate-500 mt-1">

{user.email}

</p> */}



<span
className="
inline-flex
items-center
gap-2
mt-3
px-4
py-1.5
rounded-full
bg-indigo-100
text-indigo-700
dark:bg-indigo-900/40
dark:text-indigo-300
font-semibold
text-sm
"
>


<ShieldCheck size={16}/>

{user.role}


</span>


</div>


</div>



<button

onClick={()=>navigate("/admin/profile/edit")}

className="
flex
items-center
gap-2
bg-indigo-600
hover:bg-indigo-700
text-white
px-5
py-3
rounded-xl
transition
shadow-lg
"

>


<Pencil size={18}/>

Edit Profile


</button>


</div>





{/* Information */}

<div
className="
grid
md:grid-cols-2
gap-6
mt-2
"

>


{/* Email */}

<div
className="
rounded-2xl
bg-slate-50
dark:bg-slate-900
p-5
"
>


<Mail className="text-indigo-600 mb-3"/>


<p className="text-sm text-slate-500">

Email

</p>


<h3 className="font-semibold">

{user.email}

</h3>


</div>





{/* Phone */}


<div
className="
rounded-2xl
bg-slate-50
dark:bg-slate-900
p-5
"
>


<Phone className="text-indigo-600 mb-3"/>


<p className="text-sm text-slate-500">

Phone

</p>


<h3 className="font-semibold">

{user.phone || "Not Available"}

</h3>


</div>





{/* User ID */}


<div
className="
rounded-2xl
bg-slate-50
dark:bg-slate-900
p-5
"
>


<Hash className="text-indigo-600 mb-3"/>


<p className="text-sm text-slate-500">

User ID

</p>


<h3 className="font-semibold">

#{user.id}

</h3>


</div>





{/* Status */}


<div
className="
rounded-2xl
bg-slate-50
dark:bg-slate-900
p-5
"
>


<Activity className="text-indigo-600 mb-3"/>


<p className="text-sm text-slate-500">

Account Status

</p>


<span
className={`
inline-flex
mt-2
px-4
py-1
rounded-full
text-sm
font-semibold
${
user.active
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-700"
}
`}
>


{user.active ? "Active" : "Inactive"}


</span>


</div>



</div>


</div>


</div>


</div>


)

}


export default ViewProfile;