import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
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

export const Anime = () => {

  const AnimeApiText = useRef();

  //For the typing animation.
  useEffect(() => {
    init(AnimeApiText.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 1500,
      strings: ['Movies', '映画']
    })
  }, []);

  //For the scrolling animation.
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  const [anime, setAnime] = useState([]);

  //Function for fetching information from api.
  const fetchAnime = () => {
    axios.get("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        console.log(response)
        setAnime(response.data);
      })
  }

  //For loading the information fetched from the api and displaying it.
  useEffect(() => {
    fetchAnime();
  }, []);

  //For naruto animation
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#Kakashi"),
      animationData: Kakashi,
    });
  }, []);

  //For getting the quotes
  const getQuotes = () => {
    Swal.fire("Naruto",
      "If you don’t like your destiny, don’t accept it.")
  }


  return <>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="LandingText" data-aos="fade-down-right">
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
      <div id="Kakashi" data-aos="fade-down-left"></div>
    </div>


    <div className="item-container">
      {anime.map((value) => (
        <Tilt>
          <div className="card" data-aos="fade-down-left" key={value.id}>
            <img className="AnimeImage" data-aos="fade-down-right" key={value.id} src={value.image}></img>
            <h1 className="CardTextTitle" data-aos="fade-down-left" key={value.id}>{value.title}</h1>
            <NavLink exact to={`/Anime/${value.id}`}>
              <button data-aos="fade-down-right" type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button>
            </NavLink>

          </div>
        </Tilt>

      ))}
    </div>





  </>
}

export default Anime;