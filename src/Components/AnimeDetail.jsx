import React, {useState,useEffect}from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Value from "autoprefixer/lib/value";

export const AnimeDetails = () =>{

    const {id} = useParams();
    const [details,setDetails] = useState({});

    console.log(id);
  
    useEffect(()=>{
        getAnimeDetails();
    });

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
   <div className="DetailsCard">
       
   </div>
      <h1>{details.title}</h1>
   </>

   
      
 

}

export default AnimeDetails;