import React, {useState} from 'react';
import "./App.css";
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import LanguageContext from './LanguageContext';

const App = () => {
  const [lang, setLang] = useState("pl");

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={lang}>
        <Header onLanguageChange={setLang} />
      <Main />
      <Footer />
    </LanguageContext.Provider>
    </BrowserRouter>
  );
};

export default App;
