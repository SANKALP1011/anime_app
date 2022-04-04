import React, { useRef , useEffect } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-web";
import Naruto from "../Assets/Naruto.json";
import Tilt from "react-tilt";
import {init} from "ityped";
import Swal from "sweetalert2";
import "../Styles/index.css";


export const LandingPage = () =>{

   const LandingText = useRef();


      useEffect(() => {
        init(LandingText.current, { showCursor: false, strings: [ 'アニメ','Anime'] })
        },[]);
    

    const DeveloperAlert = () =>{
      Swal.fire("Developer-:",
      "My name is Sankalp , a second year computer science student at Vellore Insitute of Technology , Vellore.  I am full stack web developer who just loves designing beautiful user interface , implementing logic of backend and designing the database.",
    )
    }
    

        React.useEffect(() => {
          Lottie.loadAnimation({
            container: document.querySelector("#Naruto"),
            animationData: Naruto,
          });
        }, []);

    return<>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
    <div className="LandingText">
      <h1><span ref={LandingText}></span></h1>
      <button type="button" onClick={DeveloperAlert} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Developer</button>
    </div>
    <div id="Naruto"></div>
    </div>
    <Tilt>
    
    </Tilt>

    
    <NavLink exact to='/Anime'>
       <button>Animes</button>
    </NavLink>
   

   

    
    </>
}

export default LandingPage;
