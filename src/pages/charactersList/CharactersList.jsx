import React, { useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import "./CharactersList.css";
import CharacterDetails from "../characterDetails/CharacterDetails";
import Input from "../../components/input/Input";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1); // Page courante
  const [isLoading, setIsLoading] = useState(false);

  // Charger les premiers personnages au montage du composant
  useEffect(() => {
    fetchInitialCharacters();
  }, []);

  // Charger des personnages supplémentaires lors du changement de page
  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  const fetchInitialCharacters = async () => {
    setIsLoading(true);
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
    const data = await response.json();
    setCharacters(data.results); // Charger les personnages initiaux
    setIsLoading(false);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    setCharacters((prevCharacters) => [...prevCharacters, ...data.results]); // Ajouter les nouveaux personnages
    setIsLoading(false);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setShowDetails(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Filtrer les personnages en fonction du terme recherché
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      {/* Input de recherche */}
      <Input 
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Rechercher un personnage"
      />

      <div className="card-list">
        {/* Affichage des personnages */}
        {filteredCharacters.map((character) => (
          <Cards key={character.id} character={character} onClick={handleCardClick} />
        ))}
      </div>

      {/* Affichage des détails du personnage sélectionné */}
      {showDetails && selectedCharacter && (
        <CharacterDetails character={selectedCharacter} />
      )}

<div className="btn-part">
      {/* Bouton pour charger plus de personnages */}
      {!isLoading && <button onClick={handleLoadMore}className="btn-more">Afficher plus</button>}
      {isLoading && <p>Chargement...</p>}</div>
    </>
  );
}
