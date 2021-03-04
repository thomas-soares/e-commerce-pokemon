import { useState, useEffect } from 'react';
import typeColors from './helpers/typeColors';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Cart from './components/Cart';
import { getPokemon, getAllPokemon } from './services/api';

import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=807'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))

    const novoPokemonData = [];

    _pokemonData.forEach(current => {
      if ((current.types[0].type.name === process.env.REACT_APP_TYPE_SHOP) || ((current.types[1]) && (current.types[1].type.name === process.env.REACT_APP_TYPE_SHOP))) {
        novoPokemonData.push(current);
      }
    });

    setPokemonData(novoPokemonData);
  }

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <header className="app__header" style={{ backgroundColor: typeColors[process.env.REACT_APP_TYPE_SHOP] }}>
        <Navbar />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="app__search"
          onChange={handleSearchChange}
        />
      </header>
      <div className="container">
        {loading ? <p style={{ textAlign: 'center', color: '#FFF', fontSize: '30px' }}>Loading...</p> : (
          <>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => 
                pokemon.name.includes(filter) &&
                <Card key={i} pokemon={pokemon} />
              )}
            </div>
          </> 
        )}
        <Cart />
      </div>
    </>
  );
}

export default App;