// import React from 'react'
// import Navbar from '../Component/header'
// import Footer from '../Component/footer'
// import HeroSection from '../Component/HeroSection'

// const Home = () => {
//   return (
//      <div className="min-h-screen bg-zinc-100 dark:bg-black transition-colors duration-300">
//       <Navbar />

//       {/* Main Content */}
//       <main className="flex min-h-screen items-center justify-center px-4">
//         <HeroSection />
//       </main>

//       <Footer />
//     </div>
//   )
// }

// export default Home


import React from 'react'
import CourseSection from "../../Component/home/CourseSection";
import Navbar from '../../Component/common/header'
import Footer from '../../Component/common/footer'
import HeroSection from '../../Component/home/HeroSection'
import CourseAbout from '../../Component/home/CourseAbout';
import LatestCourse from '../../Component/home/LatestCourse';

const Home = () => {
    return (
        <div className="min-h-screen bg-zinc-100 dark:bg-black transition-colors">
            <Navbar />

            {/* <main className="flex min-h-screen items-center justify-center px-4">
        <HeroSection />
        <CourseSection />
      </main> */}

            <main>
                <HeroSection />
                <CourseAbout />
                <LatestCourse />
                <CourseSection />
            </main>
            <Footer />
        </div>
    )
}

export default Home