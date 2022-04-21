import { createContext, useState, React } from 'react';

// create a context that will be called further down in the app
// the context will provide a darkMode value of true or false
export const ThemeContext = createContext();

// when setTheme is called further down in the app
// take the value of the new theme and set dark mode true or false accordingly
function setTheme(setThemeState) {
  return({ darkMode }) => {
    if ( darkMode ) {
      document.querySelector('html').classList.add('dark-mode');
    } else {
      document.querySelector('html').classList.remove('dark-mode');
    }
    setThemeState({ darkMode });
  };
}

export default function App(props) {
  const [ theme, setThemeState ] = useState({ darkMode: false })

  return (
   // provide an object as the provider value
   // the app will use the 'global state' to determine which icon the theme button displays
   // the app will also update the global state on click by calling setTheme
    <ThemeContext.Provider value={{ state: theme, setTheme: setTheme(setThemeState) }}>
      { props.children }
    </ThemeContext.Provider>
  );
}
