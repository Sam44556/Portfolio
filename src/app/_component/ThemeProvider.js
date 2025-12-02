'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

// Create context for theme management
const ThemeContext = createContext(undefined);

/**
 * ThemeProvider Component
 * Manages theme state (light/dark) and provides it to all child components
 * Handles localStorage persistence and system preference detection
 */
export function ThemeProvider({ children }) {
  // State to track current theme ('light' or 'dark')
  const [theme, setTheme] = useState('dark'); // Default to dark to match current design
  const [mounted, setMounted] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    setMounted(true);
    
    // Try to get saved theme from localStorage
    try {
      const savedTheme = localStorage.getItem('portfolio-theme');
      
      if (savedTheme === 'light' || savedTheme === 'dark') {
        // Use saved theme if valid
        setTheme(savedTheme);
      } else {
        // Detect system preference if no saved theme
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
        setTheme(systemPreference);
      }
    } catch (error) {
      console.warn('Unable to access localStorage:', error);
      // Continue with default theme
    }
  }, []);

  // Apply theme to HTML element and save to localStorage whenever theme changes
  useEffect(() => {
    if (!mounted) return;

    // Get the root HTML element
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save theme preference to localStorage
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (error) {
      console.warn('Unable to save theme preference:', error);
    }
  }, [theme, mounted]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  // Don't render children until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access theme context
 * Must be used within a ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}
