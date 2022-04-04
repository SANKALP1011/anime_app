import React, { useRef , useEffect } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-web";
import Naruto from "../Assets/Naruto.json";
import Tilt from "react-tilt";
import {init} from "ityped";
import Swal from "sweetalert2";


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
    <Tilt>
    <div id="Naruto" />
    </Tilt>

    <div className="LandingText">
      <h1><span ref={LandingText}></span></h1>
      <button type="button" onClick={DeveloperAlert} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">hhdsh</button>
    </div>
    <NavLink exact to='/Anime'>
       <button>Animes</button>
    </NavLink>
   

   

    
    </>
}

export default LandingPage;
