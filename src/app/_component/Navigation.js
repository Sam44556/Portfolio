'use client';

import React, { useEffect, useState } from 'react';

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
    <div className="duration-500 bg-black text-white ">
      <nav className="flex items-center p-4 text-white">
        <div className="flex-grow flex justify-end items-center">
          {/* Hamburger menu button for small screens */}
          <button onClick={toggleMenu} className="md:hidden text-2xl z-50 mr-8">
            ☰
          </button>

          {/* Full navigation menu for medium and larger screens */}
          <ul className="hidden md:flex space-x-15 mr-8">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:underline ${
                    activeSection === item.id ? 'text-purple-500 font-bold' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu, conditionally rendered with transparency */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-black bg-opacity-75 shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50 flex flex-col items-start p-8 space-y-8`}>
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={toggleMenu}
            className={`text-2xl font-bold hover:text-purple-500 ${
              activeSection === item.id ? 'text-purple-500' : 'text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}