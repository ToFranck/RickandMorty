import React, { useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import "./CharactersList.css";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let allCharacters = [];

      // Récupérer les données de toutes les pages disponibles
      let currentPage = 1;
      let totalPages = 0;

      do {
        const api = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
        const response = await fetch(api);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];

        totalPages = data.info.pages;
        currentPage++;
      } while (currentPage <= totalPages);

      setCharacters(allCharacters);
    };

    fetchData();
  }, []);

  return (
    <>

      <div className="container">
        <div className="left">
          
        </div>
        <div className="middle">
        <div className="card-list">
        {characters.map((character) => (
          <Cards key={character.id} character={character} />
        ))}
      </div>
        </div>
        <div className="right">
        
        </div>

      </div>

      
      {/* <div className="card-list">
        {characters.map((character) => (
          <Cards key={character.id} character={character} />
        ))}
      </div> */}
    </>
  );
}
