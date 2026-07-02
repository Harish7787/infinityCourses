import React from "react";
import { useParams, Link } from "react-router-dom";
import {
    FileText,
    HelpCircle,
    Users,
    Shield,
    Cookie,
    Scale,
    Calendar,
    ArrowLeft,
    Mail,
} from "lucide-react";

import Navbar from "../../Component/common/header";
import Footer from "../../Component/common/footer";

const pageData = {
    documentation: {
        icon: <FileText className="h-12 w-12 text-indigo-600" />,
        title: "Documentation",
        subtitle: "Everything you need to know about using Infinity Courses.",
        sections: [
            {
                heading: "Getting Started",
                content:
                    "Create an account, browse our course catalog, enroll in your favorite courses, and begin learning at your own pace.",
            },
            {
                heading: "Learning Experience",
                content:
                    "Watch HD video lectures, complete assignments, solve quizzes, build projects, and track your learning progress from your dashboard.",
            },
            {
                heading: "Certificates",
                content:
                    "Receive a certificate of completion after successfully finishing eligible courses and assessments.",
            },
        ],
    },

    "help-center": {
        icon: <HelpCircle className="h-12 w-12 text-indigo-600" />,
        title: "Help Center",
        subtitle: "Need assistance? We're here to help.",
        sections: [
            {
                heading: "Account Support",
                content:
                    "Get help with login issues, password resets, profile updates, and account management.",
            },
            {
                heading: "Payments",
                content:
                    "Find answers related to payments, refunds, invoices, and subscription plans.",
            },
            {
                heading: "Technical Issues",
                content:
                    "Experiencing problems while watching videos or accessing your course? Contact our support team.",
            },
        ],
    },

    community: {
        icon: <Users className="h-12 w-12 text-indigo-600" />,
        title: "Community",
        subtitle: "Learn together with thousands of students.",
        sections: [
            {
                heading: "Discussion",
                content:
                    "Participate in discussions, ask questions, and collaborate with other learners.",
            },
            {
                heading: "Mentorship",
                content:
                    "Connect with mentors and industry professionals to improve your learning journey.",
            },
            {
                heading: "Networking",
                content:
                    "Build valuable relationships with students, developers, and recruiters.",
            },
        ],
    },

    privacy: {
        icon: <Shield className="h-12 w-12 text-indigo-600" />,
        title: "Privacy Policy",
        subtitle: "Your privacy and security are important to us.",
        sections: [
            {
                heading: "Information Collection",
                content:
                    "We collect only the information necessary to provide our educational services.",
            },
            {
                heading: "Data Protection",
                content:
                    "Your personal information is securely stored using industry-standard security practices.",
            },
            {
                heading: "Your Rights",
                content:
                    "You may request access, updates, or deletion of your personal information at any time.",
            },
        ],
    },

    terms: {
        icon: <Scale className="h-12 w-12 text-indigo-600" />,
        title: "Terms & Conditions",
        subtitle: "Rules for using Infinity Courses.",
        sections: [
            {
                heading: "Platform Usage",
                content:
                    "Use our platform responsibly and comply with all applicable laws and regulations.",
            },
            {
                heading: "Course Access",
                content:
                    "Purchased courses are intended only for the registered learner and may not be shared.",
            },
            {
                heading: "Intellectual Property",
                content:
                    "All videos, projects, and learning materials remain the property of Infinity Courses.",
            },
        ],
    },

    cookies: {
        icon: <Cookie className="h-12 w-12 text-indigo-600" />,
        title: "Cookies Policy",
        subtitle: "How cookies improve your experience.",
        sections: [
            {
                heading: "Performance",
                content:
                    "Cookies help us improve website speed and functionality.",
            },
            {
                heading: "Preferences",
                content:
                    "They remember your settings, language, and theme preferences.",
            },
            {
                heading: "Analytics",
                content:
                    "Anonymous analytics help us understand how users interact with our platform.",
            },
        ],
    },
};

const InfoPage = () => {
    const { page } = useParams();

    const data = pageData[page];

    if (!data) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-4xl font-bold">Page Not Found</h1>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-white dark:bg-zinc-950">
                <Navbar />

                <section className="pt-36 pb-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">

                    <div className="max-w-6xl mx-auto">

                        {/* Hero */}

                        <div className="rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl p-10">

                            <div className="flex flex-col md:flex-row gap-6 items-start">

                                <div className="h-20 w-20 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                    {data.icon}
                                </div>

                                <div>

                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight break-words text-zinc-900 dark:text-white">
                                        {data.title}
                                    </h1>
                                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                                        {data.subtitle}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
                                        <Calendar className="h-4 w-4" />
                                        Last Updated: January 2026
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Sections */}

                        <div className="grid gap-8 mt-10">

                            {data.sections.map((section, index) => (

                                <div
                                    key={index}
                                    className="rounded-2xl bg-white dark:bg-zinc-900 shadow-lg p-8"
                                >

                                    <h2 className="text-2xl font-bold dark:text-white">
                                        {section.heading}
                                    </h2>

                                    <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
                                        {section.content}
                                    </p>

                                </div>

                            ))}

                        </div>

                        {/* Support Card */}

                        <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-10 text-white">

                            <div className="flex items-center gap-3">

                                <Mail className="h-8 w-8" />

                                <h2 className="text-3xl font-bold">
                                    Need More Help?
                                </h2>

                            </div>

                            <p className="mt-4 text-indigo-100 leading-8">

                                If you couldn't find the information you were looking for,
                                our support team is always ready to assist you.

                            </p>

                            <div className="mt-8 flex gap-4 flex-wrap">

                                <Link
                                    to="/contact"
                                    className="rounded-xl bg-white text-indigo-600 px-7 py-3 font-bold"
                                >
                                    Contact Support
                                </Link>

                                <Link
                                    to="/"
                                    className="rounded-xl border border-white px-7 py-3 font-bold flex items-center gap-2"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                    Back to Home
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

                <Footer />
            </div>
        </>
    );
};

export default InfoPage;