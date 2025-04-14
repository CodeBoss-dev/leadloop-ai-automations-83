
import React from 'react';
import Hero from '@/components/Hero';
import UseCasesGrid from '@/components/UseCasesGrid';
import HowItWorks from '@/components/HowItWorks';
import ProjectShowcase from '@/components/ProjectShowcase';
import WhyClients from '@/components/WhyClients';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Hero />
      <UseCasesGrid />
      <HowItWorks />
      <ProjectShowcase />
      <WhyClients />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
