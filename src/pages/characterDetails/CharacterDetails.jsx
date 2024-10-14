import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./CharacterDetails.css";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  console.log(character);
  return (
    <div>
      <div className="character">
          <img src={character.image} alt={character.name} className="" />
          <h2>{character.name}
            <span>
            {
            character.status === "Alive" ? "🟢" : character.status === "Dead" ? "🔴" : "🟡"
            }</span>
            </h2>
          
          <div className="data">
          <p>Origine : <strong>{character.location.name}</strong></p>
          <p>Espece : <strong>{character.species}</strong></p>
          <p>Type : <strong>{character.type}</strong></p>
          <p>Genre : <strong>{character.gender}</strong></p>
          </div>
      </div>
    </div>
  );
}
