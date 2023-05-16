import React, { useEffect } from 'react'

import "./Character.css";
import { useParams } from 'react-router-dom';


export default function Character() {
    const { id } = useParams();
    


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, [id]);


   
    

  return (
    <>
    <div className="container">
        {id}

    
      

            

    </div>
        
    </>
  )
}
