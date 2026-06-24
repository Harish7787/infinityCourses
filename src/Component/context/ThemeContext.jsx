// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {

//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "system"
//   );

//   useEffect(() => {

//     const root = window.document.documentElement;

//     const systemDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     root.classList.remove("light", "dark");

//     if (theme === "system") {

//       root.classList.add(systemDark ? "dark" : "light");

//     } else {

//       root.classList.add(theme);
//     }

//     localStorage.setItem("theme", theme);

//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = (currentTheme) => {
      root.classList.remove('light', 'dark');
      if (currentTheme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
      } else {
        root.classList.add(currentTheme);
      }
    };

    applyTheme(theme);
    localStorage.setItem('theme', theme);

    // Listen for system theme changes if set to system
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);