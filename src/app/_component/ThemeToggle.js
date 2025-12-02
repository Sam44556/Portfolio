'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
// Import sun and moon icons from react-icons
import { HiSun, HiMoon } from 'react-icons/hi';

/**
 * ThemeToggle Component
 * Renders a button that toggles between light and dark themes
 * Shows sun icon in dark mode, moon icon in light mode
 */
export default function ThemeToggle() {
  // Get current theme and toggle function from context
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-white transition-all duration-300 text-foreground"
      type="button"
    >
      {/* Show sun icon when in dark mode (to switch to light) */}
      {/* Show moon icon when in light mode (to switch to dark) */}
      {theme === 'dark' ? (
        <HiSun className="w-5 h-5" />
      ) : (
        <HiMoon className="w-5 h-5" />
      )}
    </button>
  );
}
