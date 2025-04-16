
import React from 'react';
import Hero from '@/components/Hero';
import UseCasesGrid from '@/components/UseCasesGrid';
import HowItWorks from '@/components/HowItWorks';
import ProjectShowcase from '@/components/ProjectShowcase';
import VideoSection from '@/components/VideoSection';
import WhyClients from '@/components/WhyClients';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <Hero />
        <UseCasesGrid />
        <VideoSection />
        <HowItWorks />
        <ProjectShowcase />
        <WhyClients />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
