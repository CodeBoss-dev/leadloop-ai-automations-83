
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-sm z-50 border-b border-mintGreen/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-mintGreen">Genoxys</span>
          </div>
          <Button 
            onClick={scrollToForm}
            className="bg-mintGreen text-dark hover:bg-mintGreen/90 glow-effect"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
