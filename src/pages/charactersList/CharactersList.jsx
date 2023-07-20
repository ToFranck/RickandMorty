
import React, { useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import "./CharactersList.css";
import CharacterDetails from "../characterDetails/CharacterDetails";
import BtnUp from "../../components/cards/up/BtnUp";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setShowDetails(true);
  };

  const handleLoadMore = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=2");
    const data = await response.json();
    setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
  };

  return (
    <>
    <div className="card-list">
      {characters.map((character) => (
        <Cards key={character.id} character={character} onClick={handleCardClick} />
      ))}
      
      {showDetails && selectedCharacter && (
        <CharacterDetails character={selectedCharacter} />
      )}
    </div> 
    <div className="btn-part">
    <button onClick={handleLoadMore} className="btn-more">Charger plus</button>
    </div>
    <BtnUp />
    </>
  );
}