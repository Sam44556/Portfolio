'use client';

import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    
  return (
    <header className="bg-background text-foreground fixed top-0 left-0 w-full p-4 z-50 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        {/* Theme toggle button positioned between logo and navigation */}
        <div className="flex items-center gap-4">
          
          <Navigation />
          {/* Hide theme toggle on mobile, show on md and up */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}