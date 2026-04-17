'use client';

import { createContext, ReactNode, useState, useEffect } from 'react';
import React from "react";

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
};
