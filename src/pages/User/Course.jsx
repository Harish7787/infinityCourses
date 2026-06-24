import React from 'react'
import CourseSection from "../../Component/home/CourseSection"; 
import Navbar from '../../Component/common/header'
import Footer from '../../Component/common/footer'

const Course = () => {
    return (
        <div className="min-h-screen bg-zinc-100 pt-10 dark:bg-black transition-colors">
            <Navbar />
            <main>              
                <CourseSection />
            </main>
            <Footer />
        </div>
    )
}

export default Course
