import React from 'react'
import "./Cards.css";


const Cards = ({ character }) => {
    return (
      <div className="card">
        <div className="card-img">
        <img src={character.image} alt={character.name} loading="lazy" />
        </div>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
       
      </div>
    );
  }
  
  export default Cards;