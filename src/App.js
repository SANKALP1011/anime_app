import React from "react";
import Anime from "./Components/Anime";
import LandingPage from "./Components/LandingPage";
import IntroPage from "./Components/IntroPage";
import AnimeDetails from "./Components/AnimeDetail";
import "../src/Styles/Anime.css";
import "../src/Styles/Intro.css";
import "../src/Styles/MainPage.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import aos from "aos";

function App() {
  return <>

<Router>
      <Routes>
        <Route exact path="/" element={<IntroPage />} />
        <Route exact path="/LandingPage"  element={<LandingPage />} />
        <Route exact path="/Anime" element={<Anime/>}/>
        <Route exact path="/Anime/:id" element={<AnimeDetails />} />

      </Routes>
    </Router>
  

  </>
    
}

export default App;
