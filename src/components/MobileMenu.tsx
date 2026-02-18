'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  onBookAppointment: () => void;
}

export default function MobileMenu({ onBookAppointment }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-600 hover:text-[#5B216E]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <nav className="px-4 py-4 space-y-3">
            <a
              href="#about"
              className="block py-2 text-gray-600 hover:text-[#5B216E] font-medium border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-600 hover:text-[#5B216E] font-medium border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-gray-600 hover:text-[#5B216E] font-medium border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-600 hover:text-[#5B216E] font-medium border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookAppointment();
              }}
              className="w-full bg-[#5B216E] text-white px-4 py-3 rounded-lg hover:opacity-90 transition text-center mt-4 font-bold shadow-md"
            >
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </div>
  );
} 