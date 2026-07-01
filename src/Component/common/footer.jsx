// import React from "react";
// import {
//     Menu,
//     X,
//     Sun,
//     Moon,
//     Sparkles,
// } from "lucide-react";
// const footerLinks = {
//     Product: ["Features", "Pricing", "Integrations", "Updates"],
//     Company: ["About", "Careers", "Blog", "Contact"],
//     Resources: ["Documentation", "Help Center", "Community", "Privacy"],
// };

// export default function Footer() {
//     return (
//         <footer className="relative mt-24 px-4 pb-8">
//             <div className="max-w-7xl mx-auto">
//                 {/* Glass Container */}
//                 <div
//                     className="
//             rounded-3xl
//             border border-white/20 dark:border-white/10
//             bg-white/70 dark:bg-zinc-900/70
//             backdrop-blur-xl
//             shadow-[0_8px_30px_rgba(0,0,0,0.08)]
//             overflow-hidden
//           "
//                 >
//                     {/* Top Section */}
//                     <div
//                         className="
//               grid grid-cols-1 gap-10
//               px-6 py-12
//               md:grid-cols-2
//               lg:grid-cols-5
//             "
//                     >
//                         {/* Brand */}
//                         <div className="lg:col-span-2">
//                             <div className="flex items-center gap-3">
//                                 <div
//                                     className="
//                     flex h-11 w-11 items-center justify-center
//                     rounded-xl
//                     bg-gradient-to-br from-indigo-500 to-violet-600
//                     shadow-lg
//                   "
//                                 >
//                                     <Sparkles className="h-5 w-5 text-white" />
//                                 </div>

//                                 <div>
//                                     <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
//                                         Courses
//                                     </h2>

//                                     <p className="text-sm text-zinc-500 dark:text-zinc-400">

//                                     </p>
//                                 </div>
//                             </div>

//                             <p className="mt-5 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
//                                 Build beautiful modern interfaces with clean components,
//                                 premium user experience, and scalable frontend architecture.
//                             </p>

//                             {/* Social Icons */}
//                             <div className="mt-6 flex items-center gap-3">
//                                 {[
//                                     Menu,
//                                     X,
//                                     Sun,
//                                 ].map((Icon, index) => (
//                                     <a
//                                         key={index}
//                                         href="#"
//                                         className="
//                       flex h-10 w-10 items-center justify-center
//                       rounded-xl
//                       border border-white/20 dark:border-white/10
//                       bg-white/50 dark:bg-zinc-800/50
//                       text-zinc-600 dark:text-zinc-300
//                       transition-all duration-300
//                       hover:-translate-y-1
//                       hover:bg-white dark:hover:bg-zinc-800
//                       hover:text-zinc-900 dark:hover:text-white
//                     "
//                                     >
//                                         <Icon className="h-4 w-4" />
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Footer Links */}
//                         {Object.entries(footerLinks).map(([title, links]) => (
//                             <div key={title}>
//                                 <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
//                                     {title}
//                                 </h3>

//                                 <ul className="mt-4 space-y-3">
//                                     {links.map((link) => (
//                                         <li key={link}>
//                                             <a
//                                                 href="#"
//                                                 className="
//                           text-sm text-zinc-600 dark:text-zinc-400
//                           transition-colors duration-200
//                           hover:text-zinc-900 dark:hover:text-white
//                         "
//                                             >
//                                                 {link}
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Bottom Section */}
//                     <div
//                         className="
//               flex flex-col items-center justify-between gap-4
//               border-t border-white/10 dark:border-white/5
//               px-6 py-5
//               text-sm text-zinc-500 dark:text-zinc-400
//               md:flex-row
//             "
//                     >
//                         <p>
//                             © 2026 Infinity Courses.
//                         </p>

//                         <div className="flex items-center gap-5">
//                             <a
//                                 href="#"
//                                 className="hover:text-zinc-900 dark:hover:text-white transition-colors"
//                             >
//                                 Terms
//                             </a>

//                             <a
//                                 href="#"
//                                 className="hover:text-zinc-900 dark:hover:text-white transition-colors"
//                             >
//                                 Privacy
//                             </a>

//                             <a
//                                 href="#"
//                                 className="hover:text-zinc-900 dark:hover:text-white transition-colors"
//                             >
//                                 Cookies
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

import React from "react";
import {
    Menu,
    X,
    Sun,
    Sparkles,
} from "lucide-react";

const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Updates"],
    Company: ["About", "Careers", "Blog", "Contact"],
    Resources: ["Documentation", "Help Center", "Community", "Privacy"],
};

export default function Footer() {
    return (
        <footer className="relative mt-24 px-4 pb-8">
            <div className="max-w-7xl mx-auto">
                {/* Glass Container */}
                <div
                    className="
            rounded-3xl
            border border-white/20 dark:border-white/10
            bg-white/70 dark:bg-zinc-900/70
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            overflow-hidden
          "
                >
                    {/* Top Section */}
                    <div
                        className="
              grid grid-cols-1 gap-10
              px-6 py-12
              md:grid-cols-2
              lg:grid-cols-5
            "
                    >
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3">
                                    <div
                                        className="
                        flex h-11 w-11 items-center justify-center
                        rounded-xl
                        bg-gradient-to-br from-indigo-500 to-violet-600
                        shadow-lg
                    "
                                    >
                                        <Sparkles className="h-5 w-5 text-white" />
                                    </div>

                                <div>
                                    <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                                        Courses
                                    </h2>
                                </div>
                            </div>

                            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                Build beautiful modern interfaces with clean components,
                                premium user experience, and scalable frontend architecture.
                            </p>

                            {/* Social Icons */}
                            <div className="mt-6 flex items-center gap-3">
                                {[
                                    Menu,
                                    X,
                                    Sun,
                                ].map((Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      border border-white/20 dark:border-white/10
                      bg-white/50 dark:bg-zinc-800/50
                      text-zinc-600 dark:text-zinc-300
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-white dark:hover:bg-zinc-800
                      hover:text-zinc-900 dark:hover:text-white
                    "
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer Links */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                    {title}
                                </h3>

                                <ul className="mt-4 space-y-3">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="
                                text-sm text-zinc-600 dark:text-zinc-400
                                transition-colors duration-200
                                hover:text-zinc-900 dark:hover:text-white
                              "
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Section */}
                    <div
                        className="
              flex flex-col items-center justify-between gap-4
              border-t border-white/10 dark:border-white/5
              px-6 py-5
              text-sm text-zinc-500 dark:text-zinc-400
              md:flex-row
            "
                    >
                        <p>
                            © 2026 Infinity Courses.
                        </p>

                        <div className="flex items-center gap-5">
                            <a
                                href="#"
                                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                            >
                                Terms
                            </a>

                            <a
                                href="#"
                                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                            >
                                Privacy
                            </a>

                            <a
                                href="#"
                                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                            >
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}