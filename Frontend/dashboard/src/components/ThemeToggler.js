import React, { useState } from 'react';
import '../App.css';

const ThemeToggler = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <div>
            <div className={`theme-toggler ${isDarkTheme ? 'dark' : 'light'}`}>
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
            </div>
            <style>
                {`
                    body {
                        background-color: ${isDarkTheme
                            ? 'var(--background-color-dark)'
                            : 'var(--background-color-light)'};
                        color: ${isDarkTheme
                            ? 'var(--text-color-dark)'
                            : 'var(--text-color-light)'};
                    }
                `}
            </style>
        </div>
    );
};

export default ThemeToggler;