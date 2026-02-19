'use client';

import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-background text-foreground">
      <nav className="flex items-center text-foreground">
        <div className="flex-grow flex justify-end items-center">
          {/* Hamburger menu button for small screens */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-2xl z-50 hover:text-sky-600 dark:hover:text-sky-400"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Full navigation menu for medium and larger screens */}
          <ul className="hidden md:flex space-x-15 mr-8">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:text-sky-600 dark:hover:text-sky-400 hover:underline ${
                    activeSection === item.id ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu with theme-aware background */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-background/95 backdrop-blur-sm shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50 flex flex-col items-start p-8 space-y-8 border-l border-border`}>
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-4xl font-bold text-foreground hover:text-sky-600 dark:hover:text-sky-400 transition-colors z-10"
          aria-label="Close menu"
        >
          ✕
        </button>

        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={toggleMenu}
            className={`text-2xl font-bold hover:text-sky-600 dark:hover:text-sky-400 ${
              activeSection === item.id ? 'text-sky-600 dark:text-sky-400' : 'text-foreground'
            }`}
          >
            {item.label}
          </a>
        ))}
        
        {/* Theme Toggle in Mobile Menu */}
        <div className="pt-4 border-t border-border w-full">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}