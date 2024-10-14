import React, { useState, useEffect } from 'react';
import Cards from "../../components/cards/Cards";
import CharacterDetails from "../../pages/characterDetails/CharacterDetails";
import "./Random.css";

export default function Random() {

    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Générer un tableau de 6 IDs aléatoires entre 1 et 826 (nombre total de personnages dans l'API)
            const randomIds = Array.from({ length: 6 }, () => Math.floor(Math.random() * 826) + 1);

            // Faire une requête à l'API pour ces IDs
            const response = await fetch(`https://rickandmortyapi.com/api/character/${randomIds.join(',')}`);
            const data = await response.json();

            // Mettre à jour les personnages
            setCharacters(Array.isArray(data) ? data : [data]); // Si la réponse est un tableau, sinon gérer un seul personnage
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    const handleCardClick = (character) => {
        setSelectedCharacter(character);
        setShowDetails(true);
    };

    return (
      <>
        <div className="random">
          {/* Afficher les personnages s'ils existent */}
          {characters.length > 0 && characters.map((character) => (
              <Cards key={character.id} character={character} onClick={handleCardClick} />
          ))}

          {showDetails && selectedCharacter && (
              <CharacterDetails character={selectedCharacter} />
          )}
        </div>
      </>
    );
}
