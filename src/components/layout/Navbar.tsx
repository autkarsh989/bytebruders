import React, { useState } from 'react';
import { Menu, X, Laptop } from 'lucide-react';
import { useScrollSection } from '@/hooks/useScrollSection';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#courses', label: 'Courses' },
  { href: '#projects', label: 'Projects' },
  { href: '#mentorship', label: 'Mentorship' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSection();

  return (
    <nav className="fixed z-50 w-full bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Laptop className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">BYTEBRUDER</span>
          </div>
          
          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link ${
                  activeSection === href.slice(1) ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {label}
              </a>
            ))}
            <Button variant="primary">Contact Us</Button>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`block px-3 py-2 ${
                  activeSection === href.slice(1)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};