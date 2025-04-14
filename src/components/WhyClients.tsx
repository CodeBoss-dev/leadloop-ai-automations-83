
import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  "They're tired of doing the same tasks every day manually",
  "They want to save time without hiring more people",
  "They've heard about automation but don't know where to start",
  "They need expert help to connect their tools and automate workflows",
];

const WhyClients = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Clients Book This <span className="text-mintGreen">Strategy Call</span>
          </h2>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="text-mintGreen mr-4 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-softGray">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClients;
