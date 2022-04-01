import React from "react";
import axios from "axios";
import { useState } from "react";
import Tilt from "react-tilt";

export const Anime = () =>{
    
    const [anime,setAnime] = useState([]);
    const fetchAnime = () =>{
        axios.get("https://ghibliapi.herokuapp.com/films")
        .then((response)=>{
            console.log(response)
            setAnime(response.data);
        })
    }


    return<>

    <button onClick={fetchAnime}>Anime</button>
    
    <div className="item-container">
   {anime.map((value)=>(
       <Tilt>
 <div className="card" key={value.id}>
           <img src={value.image}></img>
           <h3>{value.title}</h3>
           <h3>{value.original_title}</h3>
           <h3>{value.original_title_romanised}</h3>
           {/* <p>{value.description}</p> */}
           <p>{value.director}</p>
           <p>{value.producer}</p>
           <p>{value.release_date}</p>
           <button>SHOW MORE</button>
           </div>
       </Tilt>
          
       ))}
   </div>


    </>
}

export default Anime;