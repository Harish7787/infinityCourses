import React from 'react'
import ContactNow from '../../Component/home/ContactNow'
import Navbar from '../../Component/common/header'
import Footer from '../../Component/common/footer'

const Contact = () => {
  return (

        <div className="min-h-screen bg-zinc-100 dark:bg-black transition-colors">
            <Navbar />
            <main>
                <ContactNow />
            </main>
            <Footer />
        </div>
    )
}

export default Contact
