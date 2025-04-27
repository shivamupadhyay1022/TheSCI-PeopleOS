import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Menu, Bell, Globe } from 'lucide-react';
import i18n from 'i18next';
import { useTheme, THEMES } from '../contexts/ThemeContext';

function Navbar({togglesidebar}) {
  const { theme, setThemeMode } = useTheme();
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const themeMenuRef = useRef();
  const languageRef = useRef();
  const userMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (languageRef.current && !languageRef.current.contains(e.target)) {
        setLanguageOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target)) {
        setThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    console.log(`Language changed to: ${lang}`);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setLanguageOpen(false);
  };

  const onMenuClick = () => {
    togglesidebar()
  };

  return (
    <header className="border-b bg-white dark:bg-gray-900 dark:text-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-5">
          <button className=" p-2" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl flex gap-2 font-semibold text-purple-600 dark:text-purple-400 md:text-2xl">
            <img className='h-8' src='/sciicon.png'/>SCI-PeopleOS
          </h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Dropdown */}
          <div className="relative" ref={languageRef}>
            <button className="p-2" onClick={() => setLanguageOpen(!languageOpen)}>
              <Globe className="h-5 w-5" />
            </button>
            {languageOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                <button
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => changeLanguage('en')}
                >
                  English
                </button>
                <button
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => changeLanguage('hi')}
                >
                  हिंदी (Hindi)
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle with Dropdown */}
          {/* <div className="relative" ref={themeMenuRef}>
            <button className="p-2" onClick={() => setThemeMenuOpen(!themeMenuOpen)}>
              {theme === THEMES.LIGHT ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            {themeMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                <button
                  className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    theme === THEMES.LIGHT ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                  onClick={() => {
                    setThemeMode(THEMES.LIGHT);
                    setThemeMenuOpen(false);
                  }}
                >
                  <Sun className="h-4 w-4 mr-2" />
                  Light
                </button>
                <button
                  className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    theme === THEMES.DARK ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                  onClick={() => {
                    setThemeMode(THEMES.DARK);
                    setThemeMenuOpen(false);
                  }}
                >
                  <Moon className="h-4 w-4 mr-2" />
                  Dark
                </button>
              </div>
            )}
          </div> */}

          {/* Notifications */}
          <button className="p-2">
            <Bell className="h-5 w-5" />
          </button>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              TS
            </div>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </button>
                <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </button>
                <button className="block w-full px-4 py-2 text-sm text-left text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
