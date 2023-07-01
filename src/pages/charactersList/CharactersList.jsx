
import React, { useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import "./CharactersList.css";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      nextPage || "https://rickandmortyapi.com/api/character"
    );
    const data = await response.json();
    setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
    setNextPage(data.info.next);
  };

  const loadMoreCharacters = () => {
    fetchData();
  };

  return (
    <>
      <div className="container">
        <div className="left"></div>
        <div className="middle">
          <div className="card-list">
            {characters.map((character, index) => (
              <Cards key={`${character.id}-${index}`} character={character} />
            ))}
          </div>
          {nextPage && (
            <button onClick={loadMoreCharacters}>Charger plus</button>
          )}
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}
