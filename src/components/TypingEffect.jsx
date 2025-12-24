'use client';
import { useState, useEffect } from 'react';

export default function TypingEffect({ strings, typeSpeed = 50, backSpeed = 30, backDelay = 2000 }) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.substring(0, currentText.length + 1));
          setTypingSpeed(typeSpeed);
        } else {
          // Finished typing, wait then start deleting
          setTypingSpeed(backDelay);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentString.substring(0, currentText.length - 1));
          setTypingSpeed(backSpeed);
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          setTypingSpeed(typeSpeed);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, backDelay, typingSpeed]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

