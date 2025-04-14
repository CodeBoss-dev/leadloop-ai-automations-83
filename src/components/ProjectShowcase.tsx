
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    icon: "🧠",
    title: "Automated Lead Qualifier",
    description: "Scores leads and sends alerts",
  },
  {
    icon: "✉️",
    title: "Email-to-Telegram Summarizer",
    description: "Daily summary using AI",
  },
  {
    icon: "📊",
    title: "PDF Report Generator",
    description: "Pulls analytics and sends formatted reports",
  },
  {
    icon: "🔔",
    title: "Contact Form → Slack Alerts",
    description: "Notifies team instantly",
  },
  {
    icon: "🗓️",
    title: "Time Slot Finder",
    description: "Checks Google Calendar and returns availability",
  },
  {
    icon: "📥",
    title: "Qualified Leads → Airtable",
    description: "Only hot leads go to database",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="bg-black/20 py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects We've <span className="text-mintGreen">Built</span>
          </h2>
          <p className="text-xl text-softGray max-w-2xl mx-auto">
            Real automation solutions for real business problems
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-secondary border-none hover:border-mintGreen/30 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-softGray">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-6">Want something like this? Let's talk.</p>
          <Button 
            onClick={() => {
              const formElement = document.getElementById('consultation-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-mintGreen text-dark hover:bg-mintGreen/90 glow-effect"
          >
            Book a Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
