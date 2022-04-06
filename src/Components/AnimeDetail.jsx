import React, {useState,useEffect}from "react";
import { useParams } from "react-router-dom";
import Tilt from "react-tilt";
import aos from "aos";
import "aos/dist/aos.css";
import { init } from "aos";

export const AnimeDetails = () =>{

    const {id} = useParams();
    const [details,setDetails] = useState({});

    console.log(id);
  
    useEffect(()=>{
        getAnimeDetails();
    });

    useEffect(() =>{
        aos.init({duration:2000});
      },[]);

    const getAnimeDetails = () =>{
       fetch(`https://ghibliapi.herokuapp.com/films`)
       .then(res =>{
           if(res.ok){
               return res.json()
           }
           else{
               console.log("khkhkhkjhkhkh")
           }
       })
       .then(data => {
           const anime = data.find((animeList) => animeList.id === id);
           console.log(anime)
           setDetails(anime)
       })
       .catch(err => console.log(err))
       
    }

   

   return<>
   <Tilt>
   <div className="DetailsCard"  data-aos="fade-down-left">
     <img src={details.image} className="AnimeDetailsImg"  data-aos="fade-down-right"></img>
   <h1 className="CardTextTitle"  data-aos="fade-down-left">{details.title}</h1>
   <div className="Content"  data-aos="fade-down-right">
       <h1 className="CardText">Origianl Title: </h1>
       <h1 className="Details">{details.original_title}</h1>
   </div>
   <div className="Content"  data-aos="fade-down-left">
       <h1 className="CardText">Roman Title: </h1>
       <h1 className="Details">{details.original_title_romanised}</h1>
   </div>
   <div className="Content"  data-aos="fade-down-right">
       <h1 className="CardText">Director: </h1>
       <h1 className="Details">{details.director}</h1>
   </div>
   <div className="Content"  data-aos="fade-down-left">
       <h1 className="CardText">Producer: </h1>
       <h1 className="Details">{details.producer}</h1>
   </div>
   <div className="Content"  data-aos="fade-down-right">
       <h1 className="CardText">Date: </h1>
       <h1 className="Details">{details.release_date}</h1>
   </div>
   <div className="Content"  data-aos="fade-down-left">
       <h1 className="CardText">Description: </h1>
       <h1 className="Description">{details.description}</h1>
   </div>
   </div>
      

   </Tilt>
  
   </>

   
      
 

}

export default AnimeDetails;