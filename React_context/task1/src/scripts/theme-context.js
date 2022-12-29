import React from 'react';

export const themes = {
	light: {
		fontColor: '#000000',
		backgroundColor: '#eeeeee',
	},
	dark: {
		fontColor: '#ffffff',
		backgroundColor: '#222222',
	},
};

export const ThemeContext = React.createContext(themes.dark);
