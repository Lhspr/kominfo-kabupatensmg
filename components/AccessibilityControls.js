'use client';

import { useAccessibility } from '@/components/AccessibilityContext';

export default function AccessibilityControls() {
  const { toggleTextSize, toggleContrast } = useAccessibility();

  return (
    <div className="fixed top-0 right-0 m-4 z-50">
      <button 
        onClick={toggleTextSize} 
        className="bg-blue-500 text-white p-2 rounded-lg mr-2"
        aria-label="Perbesar/Perkecil Teks"
      >
        Toggle Text Size
      </button>

      <button 
        onClick={toggleContrast} 
        className="bg-blue-500 text-white p-2 rounded-lg"
        aria-label="Ganti Mode Kontras"
      >
        Toggle High Contrast
      </button>
    </div>
  );
}
