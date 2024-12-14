import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // For icons
import useTheme from '../context/Theme';

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeTheme = () => {
        if (themeMode === 'dark') {
            lightTheme();
        } else {
            darkTheme();
        }
    };

    return (
        <button
            onClick={onChangeTheme}
            className="fixed top-4 right-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none"
            title={themeMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            {themeMode === 'dark' ? (
                <FaSun className="text-yellow-400 text-xl" />
            ) : (
                <FaMoon className="text-blue-600 text-xl" />
            )}
        </button>
    );
}
