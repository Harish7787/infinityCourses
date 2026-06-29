


// import React from 'react'
// import CourseSection from "../../Component/home/CourseSection";
// import Navbar from '../../Component/common/header'
// import Footer from '../../Component/common/footer'
// import HeroSection from '../../Component/home/HeroSection'
// import CourseAbout from '../../Component/home/CourseAbout';
// import LatestCourse from '../../Component/home/LatestCourse';

// const Home = () => {
//     return (
//         <div className="min-h-screen bg-zinc-100 dark:bg-black transition-colors">
//             <Navbar />

//             {/* <main className="flex min-h-screen items-center justify-center px-4">
//         <HeroSection />
//         <CourseSection />
//       </main> */}

//             <main>
//                 <HeroSection />
//                 <CourseAbout />
//                 <LatestCourse />
//                 <CourseSection />
//             </main>
//             <Footer />
//         </div>
//     )
// }

// export default Home
import React from "react";
import Navbar from "../../Component/common/header";
import Footer from "../../Component/common/footer";
import HeroSection from "../../Component/home/HeroSection";
import {
  ShieldCheck,
  Rocket,
  Code2,
  Users,
  Trophy,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";


const Home = () => {


const advantages = [
 {
  icon:<Rocket/>,
  title:"Career Focused Learning",
  desc:"Learn skills that directly help you grow professionally."
 },
 {
  icon:<Code2/>,
  title:"Real World Projects",
  desc:"Practice with industry based projects."
 },
 {
  icon:<Users/>,
  title:"Community Support",
  desc:"Connect with mentors and learners."
 },
 {
  icon:<ShieldCheck/>,
  title:"Secure Platform",
  desc:"Your learning progress is safe."
 }
];


const testimonials=[
 {
  name:"Rahul Sharma",
  text:"The practical courses helped me improve my development skills."
 },
 {
  name:"Amit Patel",
  text:"Amazing platform with modern learning experience."
 },
 {
  name:"Priya Singh",
  text:"Certificates and projects helped my career."
 }
];


return (

<div className="
min-h-screen
bg-zinc-100
dark:bg-black
transition-colors
">


<Navbar/>


<main>


<HeroSection/>





{/* Why section */}

<section className="
py-24
px-6
bg-gradient-to-b
from-white
to-indigo-50
dark:from-zinc-950
dark:to-indigo-950
">


<div className="max-w-7xl mx-auto">


<motion.h2

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}

className="
text-center
text-4xl
font-black
dark:text-white
"

>

Why Choose Infinity Courses?

</motion.h2>



<p className="
text-center
mt-4
text-zinc-600
dark:text-zinc-400
">

Everything you need to build your future with technology.

</p>




<div className="
grid
md:grid-cols-4
gap-6
mt-14
">


{
advantages.map((item,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.05
}}

className="
rounded-3xl
bg-white/70
dark:bg-zinc-900/70
backdrop-blur-xl
border
border-white/20
p-7
shadow-xl
"

>


<div className="
w-12
h-12
flex
items-center
justify-center
rounded-xl
bg-gradient-to-r
from-indigo-500
to-violet-600
text-white
">

{item.icon}

</div>


<h3 className="
mt-5
font-bold
text-xl
dark:text-white
">

{item.title}

</h3>


<p className="
mt-3
text-sm
text-zinc-600
dark:text-zinc-400
">

{item.desc}

</p>



</motion.div>


))

}



</div>



</div>


</section>







{/* Learning Journey */}


<section className="
py-24
px-6
">


<div className="max-w-6xl mx-auto">


<div className="
rounded-3xl
bg-gradient-to-r
from-indigo-600
to-violet-600
p-10
text-white
shadow-2xl
">


<h2 className="
text-4xl
font-black
">

Start Your Learning Journey 🚀

</h2>


<p className="
mt-4
max-w-xl
text-indigo-100
">

Join thousands of students learning programming,
design and technology with expert guidance.

</p>


<button

className="
mt-8
bg-white
text-indigo-600
px-8
py-3
rounded-xl
font-bold
"

>

Get Started

</button>



</div>



</div>


</section>







{/* Testimonials */}


<section className="
py-20
px-6
bg-white
dark:bg-zinc-950
">


<h2 className="
text-center
text-4xl
font-black
dark:text-white
">

Student Reviews

</h2>



<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-3
gap-6
mt-12
">


{
testimonials.map((item,index)=>(


<motion.div

whileHover={{
y:-10
}}

key={index}

className="
rounded-3xl
p-7
bg-zinc-100
dark:bg-zinc-900
shadow-lg
"

>


<Trophy className="
text-indigo-500
"
/>


<p className="
mt-5
text-zinc-600
dark:text-zinc-300
">

"{item.text}"

</p>



<h3 className="
mt-5
font-bold
dark:text-white
">

- {item.name}

</h3>



</motion.div>


))


}


</div>


</section>







{/* Final CTA */}


<section className="
py-20
px-6
">


<div className="
max-w-5xl
mx-auto
text-center
">


<Zap className="
mx-auto
text-indigo-500
h-12
w-12
"/>


<h2 className="
mt-5
text-5xl
font-black
dark:text-white
">

Upgrade Your Skills Today

</h2>


<p className="
mt-5
text-zinc-600
dark:text-zinc-400
">

Learn. Build. Grow.

</p>



</div>

</section>



</main>


<Footer/>


</div>

)

}


export default Home;