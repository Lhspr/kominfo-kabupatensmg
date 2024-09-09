// contexts/AccessibilityContext.js
'use client';

import { createContext, useState, useContext } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
  const [textSize, setTextSize] = useState('text-base');
  const [highContrast, setHighContrast] = useState(false);

  const toggleTextSize = () => {
    console.log('Toggling text size'); // Debugging
    setTextSize(prevSize =>
      prevSize === 'text-base' ? 'text-xl' : 'text-base'
    );
  };

  const toggleContrast = () => {
    console.log('Toggling contrast'); // Debugging
    setHighContrast(prevContrast => !prevContrast);
  };

  return (
    <AccessibilityContext.Provider
      value={{ textSize, highContrast, toggleTextSize, toggleContrast }}
    >
      <div
        className={`${highContrast ? 'bg-black text-white' : ''} ${textSize}`}
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};
