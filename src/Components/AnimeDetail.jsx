import React, {useState,useEffect}from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const AnimeDetails = () =>{

    const {id} = useParams();
    const [details,setDetails] = useState([]);

    console.log(id);


    const getAnimeDetails = () =>{
        axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((response)=>{
            setDetails(response.data);
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getAnimeDetails();
    },[]);

    return<>
        {details.map((value)=>(
             <div key={value.id}>
                <h1>{value.original_title}</h1>
             </div>
   ))}
 </>

}

export default AnimeDetails;