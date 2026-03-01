'use client';
import { createContext, useContext, useState } from 'react';

const PreloaderContext = createContext({
  isPreloaderDone: false,
  setIsPreloaderDone: () => {},
});

export const PreloaderProvider = ({ children }) => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  return (
    <PreloaderContext.Provider value={{ isPreloaderDone, setIsPreloaderDone }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
