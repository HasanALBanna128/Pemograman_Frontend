import { useEffect, useState, useContext } from 'react';
import FavoriteContext from '../../context/FavoriteContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './PokemonList.module.css';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const { addFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const withId = res.data.results.map(pokemon => {
          const id = pokemon.url.split('/').filter(Boolean).pop();
          return { ...pokemon, id };
        });
        setPokemonList(withId);
      } catch (err) {
        console.error('Error fetching Pokémon list:', err);
      }
    };

    fetchAllPokemon();
  }, []);

  const filteredList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.grid}>
        {filteredList.map((pokemon) => (
          <div key={pokemon.id} className={styles.card}>
            <Link to={`/pokemon/${pokemon.id}`} className={styles.cardLink}>
              <h3>{pokemon.name.toUpperCase()}</h3>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className={styles.image}
              />
            </Link>
            <button
              onClick={() =>
                addFavorite({
                  id: pokemon.id,
                  name: pokemon.name,
                  sprites: { front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` },
                  types: []
                })
              }
              className={styles.addButton}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
