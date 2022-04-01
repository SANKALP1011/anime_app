import React from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-web";
import Naruto from "../Assets/Naruto.json";
import Tilt from "react-tilt";

export const LandingPage = () =>{

    React.useEffect(() => {
        Lottie.loadAnimation({
          container: document.querySelector("#Naruto"),
          animationData: Naruto,
        });
      }, []);
    return<>
    <Tilt>
    <div id="Naruto" />
    </Tilt>

    <h1>Welcome to the anime app.</h1>
    <NavLink exact to='/Anime'>
       <button>Animes</button>
    </NavLink>

   

    
    </>
}

export default LandingPage;
