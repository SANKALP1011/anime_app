import React, { useRef , useEffect } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-web";
import Naruto from "../Assets/Naruto.json";
import Tilt from "react-tilt";
import {init} from "ityped";


export const LandingPage = () =>{

   const LandingText = useRef();


      useEffect(() => {
        init(LandingText.current, { showCursor: false, strings: [ 'アニメ','Anime'] })
        },[]);
    
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

    <div className="LandingText">
      <h1><span ref={LandingText}></span></h1>
    </div>

    <NavLink exact to='/Anime'>
       <button>Animes</button>
    </NavLink>

   

    
    </>
}

export default LandingPage;
