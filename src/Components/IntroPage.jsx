import React, { useRef , useEffect} from "react";
import Lottie from "lottie-web";
import IntroAnimation from "../Assets/IntroAnimation.json";
import { init } from "ityped";
import { NavLink } from "react-router-dom";

export const IntroPage = () =>{
    
   const IntroText = useRef();
   useEffect(() => {
    init(IntroText.current, { 
       showCursor: true,
       backSpeed: 60,
       backDelay: 1500,
       strings: [ 'Anime App','动漫应用'] })
    },[]);
   
   
   
    React.useEffect(() => {
        Lottie.loadAnimation({
          container: document.querySelector("#IntroAnimation"),
          animationData: IntroAnimation,
        });
      }, []);

     

    return <>
    <div id="IntroAnimation"></div>
    <div className="IntroPageDiv">
    <h1 className="HeadingText"><span ref={IntroText}></span></h1>
    <NavLink exact to="/LandingPage">
    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Click here</button>
    </NavLink>

    </div>

    
    </>

}

export default IntroPage;