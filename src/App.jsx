import React, { useEffect, useState } from 'react';
import TopicComponent from './components/TopicComponent';
import Drawer from './components/Drawer';
import ThemeBtn from './components/ThemeBtn';
import { ThemeProvider } from './context/Theme';
import { LangProvider } from './context/LangProvider.jsx';
import LangSwitcher from './components/LangSwitcher.jsx';


const App = () => {
  // Selection Handler 
  const [selectedTopic, setSelectedTopic] = useState("NodeJS Setup");
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  // Theme 
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () =>setThemeMode("light");
  const darkTheme = () =>setThemeMode("dark");

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <LangProvider>
     <div className="flex bg-white dark:bg-black transition-all min-h-screen w-full">
      {/* Lang Switcher  */}
      <LangSwitcher />
      {/* DARK AND LIGHT MODE TOGGLE */}
      <ThemeBtn />

      {/* Drawer Component */}
      <Drawer onSelectTopic={handleTopicSelect} title={selectedTopic} />

      {/* Main content area */}
      <div className="mt-12 p-5 w-full">
        {/* Topic Component based on the selected topic */}
        <TopicComponent topic={selectedTopic} />
      </div>
    </div>
    </LangProvider>
    </ThemeProvider>
  );
};

export default App;
