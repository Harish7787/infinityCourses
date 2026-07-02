import React from "react";
import FeatureHero from "../../Component/common/features/FeatureHero";
import Navbar from "../../Component/common/header";
import Footer from "../../Component/common/footer";
import FeatureGrid from "../../Component/common/features/FeatureGrid";
import LearningProcess from "../../Component/common/features/LearningProcess";
import StatsSection from "../../Component/common/features/StatsSection";
import WhyChooseUs from "../../Component/common/features/WhyChooseUs";
import FeatureCTA from "../../Component/common/features/FeatureCTA";



const Features = () => {
    return (
        <>
            <Navbar />

            <FeatureHero />
            <FeatureGrid />
            <LearningProcess />
            <StatsSection />
            <WhyChooseUs />
            <FeatureCTA />
            <Footer />
        </>
    );
};

export default Features;