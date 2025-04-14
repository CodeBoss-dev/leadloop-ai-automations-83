
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const useCases = [
  {
    emoji: '🔍',
    title: 'Lead Qualification & Scoring',
    description: 'Enrich and score incoming leads based on job title, company data, and email quality.',
  },
  {
    emoji: '✉️',
    title: 'Email Parsing & Auto-Replies',
    description: 'Turn messy inbound emails into structured actions and send instant replies.',
  },
  {
    emoji: '💬',
    title: 'Instant Lead Alerts',
    description: 'Get real-time notifications when qualified leads or tasks are triggered.',
  },
  {
    emoji: '📊',
    title: 'Weekly Report Generation',
    description: 'Automate the creation and delivery of recurring performance reports.',
  },
  {
    emoji: '🧠',
    title: 'Smart Task Reminders',
    description: 'Trigger follow-ups or nudges when a task is due, delayed, or skipped.',
  },
  {
    emoji: '🔄',
    title: 'Form Submission → Lead Filter',
    description: 'Automatically sort high-value inquiries from junk and add them to a lead sheet.',
  },
];

const UseCasesGrid = () => {
  return (
    <section className="bg-black/20 py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You Can <span className="text-mintGreen">Automate</span>
          </h2>
          <p className="text-xl text-softGray max-w-2xl mx-auto">
            Turn time-consuming manual tasks into automated workflows
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-secondary border-none hover:border-mintGreen/30 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-4xl mb-2">{useCase.emoji}</div>
                <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-softGray">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesGrid;
