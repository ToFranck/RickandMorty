import React from 'react'
import "./Cards.css";
import { Link } from 'react-router-dom';

export default function Cards({ character }) {
  return (
    <Link key={character.id}
    to={`/characters/${character.id}`}>
      <div className='card'>
        <img src={character.image} alt={character.name} className='card-img'/>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div>
    </Link>
  );
}