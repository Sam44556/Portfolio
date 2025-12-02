'use client';

import { useState, useEffect } from 'react';

/**
 * TypewriterText Component
 * Creates a typewriter effect that cycles through different job titles
 * Types each title letter by letter, pauses, then deletes and moves to next
 */
export default function TypewriterText() {
  // Array of titles to cycle through
  const titles = [
    "a software engineer",
    "a full stack developer",
    "a web developer"
  ];

  // State management
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0); // Which title we're on (0, 1, 2)
  const [displayText, setDisplayText] = useState(''); // Current text being shown
  const [isDeleting, setIsDeleting] = useState(false); // Are we typing or deleting?
  const [isPaused, setIsPaused] = useState(false); // Pause after typing complete

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    // Typing speed settings
    const typingSpeed = 100;    // 100ms per letter when typing
    const deletingSpeed = 50;   // 50ms per letter when deleting (faster)
    const pauseDuration = 2000; // 2 seconds pause after typing complete

    const handleTyping = () => {
      // If paused, wait before starting to delete
      if (isPaused) {
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
        return;
      }

      if (!isDeleting) {
        // TYPING MODE: Add letters one by one
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
        }
      } else {
        // DELETING MODE: Remove letters one by one
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    };

    // Set timer based on current mode
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, currentTitleIndex]);

  return (
    <span className="text-accent font-bold">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
}
