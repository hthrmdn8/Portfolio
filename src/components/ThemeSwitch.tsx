import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeSwitchContext';
import { themeStyles } from '../styles/themeStyles';

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = themeStyles[theme];

    useEffect(() => {
        document.title = `${theme === 'light' ? 'Light' : 'Dark'} Theme`;
      }, [theme]);
    
    return (
        <div style={{ backgroundColor: styles.backgroundColor, color: styles.color }}>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </button>
        </div>
    );
};

export default ThemeSwitch;
