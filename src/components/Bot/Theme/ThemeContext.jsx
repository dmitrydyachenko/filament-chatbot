import React from 'react';

const ThemeContext = React.createContext({
	dark: false,
	toggleTheme: () => { },
});

const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
	const [themeState, setThemeState] = React.useState({
		dark: false,
		hasThemeMounted: false,
	});

	React.useEffect(() => {
		setThemeState({
			dark: localStorage.getItem('dark') === 'true',
			hasThemeMounted: true,
		});
	}, []);

	return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
	const [themeState, setThemeState] = useEffectDarkMode();

	if (!themeState.hasThemeMounted) {
		return <div />;
	}

	const toggleTheme = () => {
		const dark = !themeState.dark;

		localStorage.setItem('dark', JSON.stringify(dark));

		setThemeState({ ...themeState, dark });
	};

	return (
		<ThemeContext.Provider value={{ dark: themeState.dark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, useTheme };