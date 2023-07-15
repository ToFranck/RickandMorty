import React from 'react'
import './Search.css'
import { useState } from 'react'

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Effectue la recherche en utilisant la valeur de searchQuery
    // Met à jour searchResults avec les résultats correspondants
    // Exemple de code :
    const results = // Effectue la recherche ici avec searchQuery
    setSearchResults(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='search'
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>

      {searchResults.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          {/* Affiche d'autres informations sur l'utilisateur */}
        </div>
      ))}
    </div>
  );
}