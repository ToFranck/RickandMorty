import React from 'react'
import "./Cards.css";
import { Link } from 'react-router-dom';


const Cards = ({ character }) => {
    return (
      <Link to={`/characters/${character.id}`}>
      <div className="card">
        <div className="card-img">
        <img src={character.image} alt={character.name} loading="lazy" />
        </div>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div></Link>
    );
  }
  
  export default Cards;