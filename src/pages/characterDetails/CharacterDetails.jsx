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
        <div className="left">
          <img src={character.image} alt={character.name} className="" />
        </div>
        <div className="right">
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.type}</p>
          <p>{character.gender}</p>
        </div>
      </div>
    </div>
  );
}
