/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  //create save the value in local storage and get the value from local storage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    return storedMode === "true"; // يتحقق من القيمة المحفوظة
  });

  //Handle the toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode); // تحديث القيمة في localStorage
      return newMode;
    });
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    if (storedMode !== null) {
      setIsDarkMode(storedMode === "true");
    }
  }, []);

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
