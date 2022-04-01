import React from "react";
import { NavLink } from "react-router-dom";

export const LandingPage = () =>{
    return<>

    <h1>Welcome to the anime app.</h1>
    <NavLink exact to='/Anime'>
       <button>Animes</button>
    </NavLink>

    
    </>
}

export default LandingPage;
