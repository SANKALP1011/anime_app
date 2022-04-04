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
        init(LandingText.current, { 
           showCursor: true,
           backSpeed: 60,
           backDelay: 1500,
           strings: [ 'アニメ','Anime'] })
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
      <h1 className="HeadingText">
        <span ref={LandingText}></span>
      </h1>
      <p className="SubText">
         - This is an anime app that consumes anime api inorder to fetch the data and display it to the user.
      </p>
      <p className="SubText">
        “People’s lives don’t end when they die, it ends when they lose faith.” - Uchiha Itachi
      </p>
      <button type="button" onClick={DeveloperAlert} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Developer
      </button>
   <NavLink exact to='/Anime'>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Animes
        </button>
    </NavLink>

    </div>
    <Tilt>
    <div id="Naruto"></div>
    </Tilt>
    </div>


    
    
   

   

    
    </>
}

export default LandingPage;
