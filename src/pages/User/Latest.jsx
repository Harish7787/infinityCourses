

// const Latest = () => {
//   return (


//      <div className="min-h-screen bg-zinc-100 dark:bg-black transition-colors">
//                 <Navbar />
//                 <main>              
//                    <LatestCourse />
//                 </main>
//                 <Footer />
//             </div>
//   )
// }

// export default Latest
import React from 'react'

import Navbar from '../../Component/common/header'
import Footer from '../../Component/common/footer'
import LatestCourse from '../../Component/home/LatestCourse'


const Latest = () => {
    return (

        <div className="min-h-screen bg-zinc-100 dark:bg-black transition-colors">
            <Navbar />
            <main>
                <LatestCourse />
            </main>
            <Footer />
        </div>
    )

}

export default Latest
