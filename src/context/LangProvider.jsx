// src/context/LangContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const LangContext = createContext();

const LangProvider = ({ children }) => {
  // Get saved language from localStorage or default to 'en'
  const storedLang = localStorage.getItem('language') || 'en';
  
  const [lang, setLang] = useState(storedLang);

  // Change language and save to localStorage
  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  // useEffect(()=>{

  // },[lang])

//   const languageContent = {
//     en: {
//       greeting: 'Hello!',
//       description: 'This is an English description.',
//     },
//     hi: {
//       greeting: 'नमस्ते!',
//       description: 'यह एक हिंदी विवरण है।',
//     },
//   };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};
export { LangContext, LangProvider };
