import React, { useEffect, useRef} from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Tilt from "react-tilt";
import Lottie from "lottie-web";
import Kakashi from "../Assets/Kakashi.json";
import aos from "aos";
import "aos/dist/aos.css";
import "../Styles/index.css";
import { init } from "ityped";
import Swal from "sweetalert2";

export const Anime = () =>{

  const AnimeApiText = useRef();

  useEffect(() => {
    init(AnimeApiText.current, { 
       showCursor: true,
       backSpeed: 60,
       backDelay: 1500,
       strings: [ 'Movies','映画'] })
    },[]);
    
    useEffect(() =>{
        aos.init({duration:2000});
      },[]);

    const [anime,setAnime] = useState([]);

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

    

      const getQuotes = () =>{
        Swal.fire("Naruto",
        "If you don’t like your destiny, don’t accept it.")
      }


    return<>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="LandingText" data-aos="fade-right">
        <h1 className="HeadingText">
          <span ref={AnimeApiText}></span>
        </h1>
        <p className="SubText">
          - Scroll below to see the most famous animes and movies of all time.
        </p>
        <p className="SubText">
          - As you will scroll down , you will get the list opf animes fetched from the api.
        </p>
        <p className="SubText">
          - Do hover over each and evry anime card to see the 3-d effect along with some hover animation.
        </p>
        <button type="button" onClick={getQuotes} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Quotes
      </button>
      </div>
      <div id="Kakashi" data-aos="fade-left"></div>
    </div>
    <button onClick={fetchAnime}>Anime</button>
    
    <div className="item-container">
   {anime.map((value)=>(
       <Tilt>
 <div className="card" data-aos="fade-down-left" key={value.id}>
           <img className="AnimeImage" key={value.id} src={value.image}></img>
           <h1 className="CardTextTitle" key={value.id}>{value.title}</h1>
           {/* <h3 className="CardText">Original Title: {value.original_title}</h3>
           <h3 className="CardText">Roman Title: {value.original_title_romanised}</h3>
           <p className="CardText">Director: {value.director}</p>
           <p className="CardText">Producer: {value.producer}</p>
           <p className="CardText">Date: {value.release_date}</p>  */}
           <NavLink exact to={`/Anime/${value.id}`}>
              <button type="button"  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button>
           </NavLink>

          </div>
       </Tilt>
          
       ))}
   </div>





    </>
}

export default Anime;