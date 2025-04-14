
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Automate Lead Qualification with AI{" "}
            <span className="block mt-2">— Without Writing Code</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-softGray mb-10 max-w-3xl mx-auto">
            Book a free 20-minute strategy call to see how we can help you automatically 
            qualify and route leads, saving your sales team 10+ hours/week.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-mintGreen text-dark hover:bg-mintGreen/90 glow-effect text-lg px-8 py-6"
            >
              Book a Free Strategy Call
            </Button>
          </div>
          
          <p className="text-sm text-softGray mt-4">No pitch. Just practical advice.</p>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-mintGreen"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
