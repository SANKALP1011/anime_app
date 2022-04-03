import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../src/Styles/Anime.css";
import "../src/Styles/Intro.css";
import aos from "aos";
aos.init();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



