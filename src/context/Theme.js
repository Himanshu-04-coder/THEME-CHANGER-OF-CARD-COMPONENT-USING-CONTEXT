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


//                 CONTEXT  NOTES
// 1)  first of all 'createContext' with default values
// 2)  then create a provider component using 'ThemeContext.Provider'
// 3)  finally create a custom hook to use the context easily with 'useContext' 
// 4)  use this hook in components to access the context values and functions
// 5)  Now, you can use the custom hook in any component to access the theme context values.

// note: for dark theme we need to update the tailwind config file to include dark mode support.
//  code: 
// ```javascript

//  <!-- /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
// /////////////////////  darkMode: 'class', //////////////////////// to add
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } -->
