import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Tilt from "react-tilt";
import Lottie from "lottie-web";
import Kakashi from "../Assets/Kakashi.json";
import aos from "aos";
import "aos/dist/aos.css";

export const Anime = () =>{
    
    useEffect(() =>{
        aos.init({duration:2000});
      },[]);

    const [anime,setAnime] = useState([]);
    const [moreInfo,setMoreInfo] = useState([]);
    const fetchAnime = () =>{
        axios.get("https://ghibliapi.herokuapp.com/films")
        .then((response)=>{
            console.log(response)
            setAnime(response.data);
        })
    }

    useEffect(() => {
        fetchAnime();
      }, []);

      React.useEffect(() => {
        Lottie.loadAnimation({
          container: document.querySelector("#Kakashi"),
          animationData: Kakashi,
        });
      }, []);

      const showDetails = () =>{
          axios.get("https://ghibliapi.herokuapp.com/films")
          .then((response) =>{
              console.log(response);
              setMoreInfo(response.data)
          })
      }


    return<>
    <div id="Kakashi"></div>
    <h1>Scroll below to check out the list of animes.</h1>
    <button onClick={fetchAnime}>Anime</button>
    
    <div className="item-container">
   {anime.map((value)=>(
       <Tilt>
 <div className="card" data-aos="fade-down-left" key={value.id}>
           <img className="SecondImage" src={value.image}></img>
           <h3>{value.title}</h3>
           <h3>{value.original_title}</h3>
           <h3>{value.original_title_romanised}</h3>
           <p>{value.director}</p>
           <p>{value.producer}</p>
           <p>{value.release_date}</p> 
          </div>
       </Tilt>
          
       ))}
   </div>





    </>
}

export default Anime;