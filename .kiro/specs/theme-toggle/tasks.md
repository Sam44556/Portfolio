# Implementation Plan

## Overview
This plan breaks down the theme toggle implementation into discrete, manageable steps. Each task builds on the previous one, starting with the core theme infrastructure and ending with a fully integrated light/dark theme system.

## Tasks

- [x] 1. Create theme infrastructure (Context and Provider)


  - Create `src/app/_component/ThemeProvider.js` with React Context
  - Implement theme state management with useState
  - Add localStorage persistence logic
  - Add system preference detection
  - Apply theme class to HTML element
  - Export useTheme custom hook for consuming context
  - _Requirements: 1.1, 1.2, 1.5, 4.3_



- [ ] 2. Create theme toggle button component
  - Create `src/app/_component/ThemeToggle.js`
  - Import sun and moon icons from react-icons
  - Consume ThemeContext using useTheme hook
  - Render button with conditional icon (sun for dark mode, moon for light mode)
  - Add click handler to call toggleTheme function
  - Apply Tailwind classes for styling and hover effects
  - Add aria-label for accessibility


  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 3. Update global CSS with theme variables
  - Open `src/app/globals.css`
  - Define CSS custom properties for light theme in :root
  - Define CSS custom properties for dark theme in .dark class
  - Include colors for: background, foreground, accent, muted, border
  - Update @theme inline section to reference new variables


  - Add transition-colors utility for smooth theme changes
  - Remove or update existing dark mode media query
  - _Requirements: 3.1, 3.2, 3.3, 4.1, 4.2_

- [ ] 4. Integrate ThemeProvider into app layout
  - Open `src/app/layout.js`
  - Import ThemeProvider component


  - Wrap the entire body content with ThemeProvider
  - Remove hardcoded dark theme classes (bg-primary-950 text-primary-100)
  - Add theme-aware classes (bg-background text-foreground)
  - Add transition-colors class for smooth transitions
  - _Requirements: 1.1, 1.2, 5.1_

- [x] 5. Update Header component with theme support


  - Open `src/app/_component/Header.js`
  - Import ThemeToggle component
  - Replace hardcoded bg-black text-white with bg-background text-foreground
  - Add ThemeToggle component in the header (between Logo and Navigation)
  - Add transition-colors class for smooth theme changes
  - Ensure header remains fixed and responsive
  - _Requirements: 2.1, 2.5, 5.1, 5.2_



- [ ] 6. Update Navigation component with theme colors
  - Open `src/app/_component/Navigation.js`
  - Replace bg-black text-white with bg-background text-foreground
  - Update mobile menu background to use bg-background with opacity
  - Change active link color from text-purple-500 to text-accent


  - Update hover states to use theme colors (hover:text-accent)
  - Add transition-colors class to navigation elements
  - Ensure mobile menu overlay uses theme colors
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 7. Update main page component with theme colors


  - Open `src/app/page.js`


  - Replace hardcoded bg-black text-white with bg-background text-foreground
  - Ensure transition-colors class is present
  - Verify all sections (home, skills, projects, about, contact) inherit theme
  - _Requirements: 5.1, 5.2_



- [ ] 8. Update Footer component with theme support
  - Open `src/app/_component/Footer.js`
  - Replace any hardcoded dark colors with theme-aware classes
  - Add bg-background text-foreground classes


  - Add transition-colors for smooth theme changes
  - Ensure links use theme colors with hover effects
  - _Requirements: 5.1, 5.2, 5.4_

- [ ] 9. Update remaining page components with theme colors
  - [x] 9.1 Update About page


    - Open `src/app/About/page.js`
    - Replace hardcoded colors with theme classes
    - Add transition-colors class
    - _Requirements: 5.1, 5.2_
  
  - [ ] 9.2 Update Skills page
    - Open `src/app/skills/page.js`
    - Replace hardcoded colors with theme classes
    - Update skill cards/items to use theme colors
    - Add transition-colors class
    - _Requirements: 5.1, 5.2_
  
  - [ ] 9.3 Update Projects page
    - Open `src/app/project/page.js`
    - Replace hardcoded colors with theme classes
    - Update project cards to use theme colors
    - Add hover effects with theme colors
    - Add transition-colors class
    - _Requirements: 5.1, 5.2, 5.3, 5.4_
  
  - [ ] 9.4 Update Contact page
    - Open `src/app/contact/page.js`
    - Replace hardcoded colors with theme classes
    - Update form inputs to use theme colors
    - Update button styles with theme colors
    - Add transition-colors class
    - _Requirements: 5.1, 5.2, 5.4_

- [ ]* 10. Test theme functionality across all scenarios
  - Test theme toggle button switches between light and dark
  - Verify theme persists after page refresh
  - Test on mobile, tablet, and desktop screen sizes
  - Verify smooth transitions (500ms) when switching themes
  - Check text readability in both themes
  - Test with browser localStorage disabled
  - Verify system preference detection works
  - Test keyboard accessibility of toggle button
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.5, 3.1, 3.2, 3.3, 5.2_

- [ ]* 11. Fine-tune colors and contrast
  - Check color contrast ratios meet WCAG AA standards
  - Adjust accent colors if needed for better visibility
  - Ensure hover states are clearly visible in both themes
  - Test with different lighting conditions
  - Verify purple accent color works in both themes
  - _Requirements: 5.2, 5.3_
