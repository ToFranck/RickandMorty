// import React from 'react'
// import './Home.css'
// import Search from '../../components/search/Search'

 
// export default function Home() {



//   return (
//     <>
//      <div className="home">
//       <div className="hero">
//         <Search />
//       </div>
//      </div>
//     </>
//   )
// }


import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import BtnUp from "../../components/cards/up/BtnUp";


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div>
      <div className="bg"></div>

      <img src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Rick_and_Morty_logo.png" alt="" className="logo"/>
      <h2 className="title">L'encyclopédie Rick and Morty : votre guide ultime pour tout savoir sur l'univers hilarant et chaotique de la série animée. Découvrez les personnages. Explorez et plongez dans les aventures interdimensionnelles de Rick et Morty avec cette encyclopédie complète.</h2>
      {/* Ajoute le champ de recherche */}
      <input className="search"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Rechercher..."
      />

      {/* Affiche les résultats de recherche uniquement s'il y a une requête */}
      {searchQuery && (
        <div className="card-list">
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((result) => (
              <Cards key={result.id} character={result} />
            ))
          ) : (
            <p>Aucun résultat trouvé.</p>
          )} 
          
        </div>
        
      )}<BtnUp />
    </div>
  );
}