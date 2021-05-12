import { createContext, ReactNode, useContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { usePersistedState } from "../hooks/usePersistedState";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface AppThemeContextParams {
	theme: DefaultTheme
	toggleTheme: () => void
}

interface AppThemeProviderProps {
	children: ReactNode
}

const AppThemeContext = createContext({} as AppThemeContextParams)

export function AppThemeProvider({ children }: AppThemeProviderProps) {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('@CountriesSearch.theme', light)

	function toggleTheme() {
		if (theme.title === 'light') {
			setTheme(dark)
		} else {
			setTheme(light)
		}
	}

	return (
		<AppThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</AppThemeContext.Provider>
	)
}

export const useApptheme = () => useContext(AppThemeContext)