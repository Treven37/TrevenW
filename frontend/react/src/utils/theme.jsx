import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	if (localStorage.getItem('theme') === null) {
		localStorage.setItem('theme', 'Dark');
	}
	const [theme, setTheme] = useState(localStorage.getItem('theme'));
	
  	useEffect(() => {
    	document.documentElement.setAttribute('data-theme', theme);
    	
  	}, [theme]);

  	const toggleTheme = () => {
  	  localStorage.setItem('theme', theme == 'Light' ? 'Dark' : 'Light');
  	  setTheme(theme == 'Light' ? 'Dark' : 'Light');
  	};

  	return (
    	<ThemeContext.Provider value={{ theme, toggleTheme }}>
      		{children}
 		</ThemeContext.Provider>
	);
};
