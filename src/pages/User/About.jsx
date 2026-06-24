import React from 'react'
import Navbar from '../../Component/common/header'
import Footer from '../../Component/common/footer'
import CourseAbout from '../../Component/home/CourseAbout'

const About = () => {
  return (
   

     <div className="min-h-screen bg-zinc-100 dark:bg-black transition-colors">
                <Navbar />
                <main>              
                   <CourseAbout />
                </main>
                <Footer />
            </div>
  )
}

export default About
