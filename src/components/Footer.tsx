
import React from 'react';
import ConsultationForm from './ConsultationForm';

const Footer = () => {
  return (
    <footer className="bg-black py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-mintGreen">Genoxys</span>
            </h2>
            <div className="text-center mb-6">
              <span className="font-russo text-mintGreen/80 text-sm tracking-widest">AUTOMATION</span>
            </div>
            <p className="text-lg mb-6 max-w-md">
              Automated lead qualification solutions that identify your best prospects 
              and notify your team instantly.
            </p>
            
            <div className="mt-12">
              <div className="text-sm text-softGray/70">© {new Date().getFullYear()} Genoxys. All rights reserved.</div>
              <div className="flex space-x-6 mt-4">
                <a href="mailto:genoxys.live@gmail.com" className="text-softGray hover:text-mintGreen">Contact</a>
              </div>
            </div>
          </div>
          
          <ConsultationForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
