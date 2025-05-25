'use client';

import React, { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

const ScrollContext = createContext(null);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const [sectionRefs, setSectionRefs] = useState([]);
  const router = useRouter();

  const scrollToSection = (index) => {
    const ref = sectionRefs[index];
    if (ref && ref.scrollIntoView) {
      ref.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navigateAndScroll = (index) => {
    router.push('/'); // Navigate to the homepage

    // Scroll after a short delay
    setTimeout(() => {
      scrollToSection(index);
    }, 300);
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, setSectionRefs, navigateAndScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
