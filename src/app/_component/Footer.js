'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'mailto:samuelgirma888@gmail.com', icon: MdEmail, label: 'Email' },
  { href: 'https://github.com/Sam44556', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/samuel-girma-28046a299', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://t.me/Sami_girma_8', icon: FaTelegram, label: 'Telegram' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background ">
      

        {/* Bottom row: copyright */}
        <div className="mt-10 pt-8 border-t border-zinc-800 dark:border-zinc-800 text-center ">
          <p className="text-sm text-zinc-500 dark:text-zinc-500 text-center">
            &copy; {year} Samuel Girma Asfaw. All rights reserved.
          </p>
        </div>
      
    </footer>
  );
}
