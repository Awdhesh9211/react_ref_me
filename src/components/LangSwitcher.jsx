// src/components/LangSwitcher.js
import React, { useContext } from 'react';
import { LangContext } from '../context/LangProvider';

const LangSwitcher = () => {
  const { lang, changeLang } = useContext(LangContext);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'hi' : 'en';
    changeLang(newLang);
  };

  return (
    <div
      onClick={toggleLang}
      style={{
        width:'40px',
        height:'40px',
        position: 'fixed',
        top: '20px',
        right: '80px',
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        color:'white',
        caretColor:'green'
      }}
    >
      {/* <FaLanguage style={{ marginRight: '5px' }} /> */}
      <span>{lang === 'en' ? 'EN' : 'HI'}</span>
    </div>
  );
};

export default LangSwitcher;
