# Theme Toggle Design Document

## Overview

This design implements a light/dark theme toggle system for a single-page Next.js portfolio application. The solution uses React Context for state management, CSS custom properties for theme colors, and localStorage for persistence. The design accounts for the existing single-page structure with section-based navigation using IDs.

## Architecture

### Theme Management Strategy

The theme system uses a three-layer architecture:

1. **Context Layer**: React Context (`ThemeContext`) provides theme state and toggle function to all components
2. **Styling Layer**: CSS custom properties define theme colors, Tailwind classes apply them
3. **Persistence Layer**: localStorage saves user preference, survives page reloads

### Data Flow

```
User clicks toggle → ThemeContext updates state → 
localStorage saves preference → 
HTML class updates → 
CSS variables apply new colors → 
Tailwind classes reflect changes
```

## Components and Interfaces

### 1. ThemeProvider Component

**Location**: `src/app/_component/ThemeProvider.js`

**Purpose**: Wraps the entire application, manages theme state, handles persistence

**Interface**:
```javascript
// Context value provided to children
{
  theme: 'light' | 'dark',
  toggleTheme: () => void
}
```

**Key Responsibilities**:
- Initialize theme from localStorage or system preference
- Provide theme state to all child components
- Toggle between light/dark themes
- Persist theme changes to localStorage
- Apply theme class to document root

**Implementation Details**:
- Uses `useState` for theme state
- Uses `useEffect` to:
  - Load saved theme on mount
  - Detect system preference if no saved theme
  - Update `<html>` element class when theme changes
  - Save to localStorage when theme changes
- Provides context value with `useMemo` to prevent unnecessary re-renders

### 2. ThemeToggle Component

**Location**: `src/app/_component/ThemeToggle.js`

**Purpose**: Renders the theme toggle button with appropriate icon

**Interface**:
```javascript
// No props needed - consumes ThemeContext
<ThemeToggle />
```

**Key Responsibilities**:
- Display sun icon (☀️) in dark mode
- Display moon icon (🌙) in light mode
- Call `toggleTheme()` on click
- Show hover effects

**Implementation Details**:
- Uses `useTheme()` hook to access context
- Renders button with icon from react-icons
- Applies Tailwind classes for styling and transitions

### 3. Updated Layout Component

**Location**: `src/app/layout.js`

**Changes Required**:
- Wrap children with `ThemeProvider`
- Remove hardcoded `bg-primary-950 text-primary-100` classes
- Add theme-aware Tailwind classes

### 4. Updated Header Component

**Location**: `src/app/_component/Header.js`

**Changes Required**:
- Replace `bg-black text-white` with theme-aware classes
- Add `ThemeToggle` component to navigation area

### 5. Updated Page Components

**Locations**: 
- `src/app/page.js` (main page with all sections)
- `src/app/_component/Navigation.js`
- `src/app/_component/Footer.js`

**Changes Required**:
- Replace hardcoded `bg-black text-white` with theme classes
- Update hover states to use theme colors
- Ensure all sections respond to theme changes

## Data Models

### Theme State

```javascript
{
  theme: 'light' | 'dark'  // Current active theme
}
```

### LocalStorage Schema

```javascript
// Key: 'portfolio-theme'
// Value: 'light' | 'dark'
localStorage.setItem('portfolio-theme', 'dark');
```

## Styling Strategy

### CSS Custom Properties

Define in `src/app/globals.css`:

```css
:root {
  /* Light theme (default) */
  --background: #ffffff;
  --foreground: #171717;
  --accent: #8b5cf6;
  --muted: #f3f4f6;
  --border: #e5e7eb;
}

.dark {
  /* Dark theme */
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: #a78bfa;
  --muted: #1f2937;
  --border: #374151;
}
```

### Tailwind Class Mapping

Components will use these Tailwind classes that automatically respond to the theme:

- `bg-background` → Uses `--background` variable
- `text-foreground` → Uses `--foreground` variable
- `bg-accent` → Uses `--accent` variable
- `border-border` → Uses `--border` variable

### Transition Classes

Apply smooth transitions:
```css
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-duration: 500ms;
}
```

## Implementation Approach

### Phase 1: Setup Theme Infrastructure

1. Create `ThemeProvider` component with context
2. Create `ThemeToggle` button component
3. Update `globals.css` with CSS variables for both themes
4. Wrap app in `ThemeProvider` in `layout.js`

### Phase 2: Update Existing Components

1. Update `Header.js`:
   - Replace `bg-black text-white` with `bg-background text-foreground`
   - Add `ThemeToggle` component next to navigation
   
2. Update `Navigation.js`:
   - Replace `bg-black text-white` with theme classes
   - Update mobile menu background to use theme colors
   - Update active link color to use `text-accent`

3. Update `page.js`:
   - Replace `bg-black text-white` with `bg-background text-foreground`
   - Ensure all sections inherit theme colors

4. Update `Footer.js`:
   - Apply theme-aware background and text colors

### Phase 3: Fine-tune Colors and Contrast

1. Test readability in both themes
2. Adjust accent colors for hover states
3. Ensure sufficient contrast ratios (WCAG AA compliance)
4. Test on different screen sizes

## Error Handling

### LocalStorage Unavailable

```javascript
try {
  localStorage.setItem('portfolio-theme', theme);
} catch (error) {
  console.warn('Unable to save theme preference:', error);
  // Continue without persistence
}
```

### Invalid Stored Theme

```javascript
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  setTheme(savedTheme);
} else {
  // Fall back to system preference
  setTheme(systemPreference);
}
```

### System Preference Detection

```javascript
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
```

## Testing Strategy

### Manual Testing Checklist

1. **Theme Toggle Functionality**
   - Click toggle button switches theme
   - Icon changes appropriately (sun/moon)
   - All sections update colors immediately

2. **Persistence**
   - Refresh page maintains theme choice
   - Close and reopen browser maintains theme
   - Clear localStorage resets to system preference

3. **Visual Quality**
   - Smooth 500ms transitions
   - No layout shifts during theme change
   - Text remains readable in both themes
   - Hover effects work in both themes

4. **Responsive Design**
   - Toggle button visible on mobile
   - Mobile menu colors update with theme
   - All sections respond correctly on all screen sizes

5. **Edge Cases**
   - Works with JavaScript disabled (falls back to default)
   - Works in private/incognito mode
   - Works when localStorage is full

### Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if available)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Considerations

1. **Toggle Button**
   - Add `aria-label` describing current theme and action
   - Ensure keyboard accessible (focusable, Enter/Space to activate)
   - Visible focus indicator

2. **Color Contrast**
   - Maintain WCAG AA contrast ratios (4.5:1 for normal text)
   - Test with contrast checker tools
   - Ensure links are distinguishable

3. **Reduced Motion**
   - Respect `prefers-reduced-motion` media query
   - Disable transitions for users who prefer reduced motion

## Performance Considerations

1. **Context Optimization**
   - Use `useMemo` for context value to prevent unnecessary re-renders
   - Only re-render when theme actually changes

2. **CSS Variables**
   - More performant than JavaScript-based styling
   - Browser-native, no runtime overhead

3. **LocalStorage**
   - Synchronous but fast for small data
   - Only write on theme change, not on every render

## Migration Path

Since the app currently uses hardcoded dark theme:

1. Existing users will see dark theme by default (matches current experience)
2. System preference detection provides smart default for new users
3. No breaking changes to existing functionality
4. All section navigation (#home, #skills, etc.) continues to work

## Future Enhancements

Potential improvements for future iterations:

1. Add more theme options (e.g., high contrast, custom colors)
2. Sync theme across multiple tabs using storage events
3. Add theme preview before applying
4. Animate the toggle button itself (rotating sun/moon)
5. Add keyboard shortcut for theme toggle (e.g., Ctrl+Shift+T)
