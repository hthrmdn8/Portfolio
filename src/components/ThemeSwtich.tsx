import React, { useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeSwitchContext';
import { themeStyles } from '../styles/themeStyles';

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = themeStyles[theme];

    return (
        // <ThemeProvider>
        <div style={{ backgroundColor: styles.backgroundColor, color: styles.color }}>
            <h1>
                You Are Now Viewing {(theme === 'light') ? 'Light' : 'Dark'} Theme
            </h1>
            <button onClick={toggleTheme}>
                Switch to {(theme === 'light') ? 'dark' : 'light'} theme
            </button>
        </div>
        // </ThemeProvider>
    );
};

export default ThemeSwitch;
