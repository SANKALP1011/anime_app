import React from "react";
import Anime from "./Components/Anime";
import LandingPage from "./Components/LandingPage";
import "../src/Styles/Anime.css";
import "../src/Styles/Intro.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import aos from "aos";

function App() {
  return <>

<Router>
      <Routes>

        <Route exact path="/"  element={<LandingPage />} />
        <Route exact path="/Anime" element={<Anime/>}/>

      </Routes>
    </Router>
  

  </>
    
}

export default App;
