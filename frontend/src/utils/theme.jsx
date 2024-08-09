import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
	
  	useEffect(() => {
    	document.documentElement.setAttribute('data-theme', theme);
    	localStorage.setItem('theme', theme);
  	}, [theme]);

  	const toggleTheme = () => {
    	setTheme(theme === 'Light' ? 'Dark' : 'Light');
  	};

  	return (
    	<ThemeContext.Provider value={{ theme, toggleTheme }}>
      		{children}
 		</ThemeContext.Provider>
	);
};
