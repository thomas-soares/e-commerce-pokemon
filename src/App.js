import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Cart from './components/Cart';
import { getPokemon, getAllPokemon } from './services/api';

import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  
  // a quantia total de pokemons é 807, foi colocado 100 para testes
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=100'

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
      // TODO: pendente configuração no env pra iniciar uma luja especifica, por enquanto ta fixa a loja de fogo
      if (current.types[0].type.name === 'fire') {
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
      <Navbar />
      <div>
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="container">
        {/* <div> */}
          {loading ? <h1 style={{ textAlign: 'center', color: 'white' }}>Loading...</h1> : (
            <>
              <div className="grid-container">
                {pokemonData.map((pokemon, i) => 
                  pokemon.name.includes(filter) &&
                  <Card key={i} pokemon={pokemon} />
                )}
              </div>
            </>
          )}
        {/* </div> */}
        <Cart />
      </div>
    </>
  );
}

export default App;