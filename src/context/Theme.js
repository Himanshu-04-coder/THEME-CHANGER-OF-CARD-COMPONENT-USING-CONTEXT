import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    Mode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}

// context Notes
// 1)  first of all 'createContext' with default values
// 2)  then create a provider component using 'ThemeContext.Provider'
// 3)  finally create a custom hook to use the context easily with 'useContext'
// 4)  use this hook in components to access the context values and functions
// import useTheme from "../context/Theme";