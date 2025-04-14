
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-secondary to-black py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Spots are limited. Book your free call and get your first workflow automated this week.
          </h2>
          
          <Button 
            size="lg" 
            className="bg-mintGreen text-dark hover:bg-mintGreen/90 glow-effect text-lg px-10 py-6"
          >
            Book Your Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
