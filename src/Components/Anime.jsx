import React, { useEffect } from "react";
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

    const [moreAnimeInfo,setMoreAnimeInfo] = useState(5);

    const moreInfo = () =>{
        setMoreAnimeInfo(moreAnimeInfo + 3);
    }
    useEffect(() => {
        fetchAnime();
      }, []);


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
           <p>{value.director}</p>
           <p>{value.producer}</p>
           <p>{value.release_date}</p> 
           {moreAnimeInfo < anime.length && (
               <button onClick={moreInfo}>Info</button>
           )}
          </div>
       </Tilt>
          
       ))}
   </div>


    </>
}

export default Anime;