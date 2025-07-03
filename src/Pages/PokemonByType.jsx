import { useEffect, useState, useContext } from 'react';
import { fetchPokemonByType } from '../api/pokemonExtra';
import axios from 'axios';
import FavoriteContext from '../context/FavoriteContext';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Pokemon/PokemonList.module.css';

const types = ['fire', 'water', 'grass', 'electric', 'rock', 'psychic', 'bug'];

function PokemonByType() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedType = searchParams.get('selected') || 'fire';

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const basicList = await fetchPokemonByType(selectedType);
      const detailedList = await Promise.all(
        basicList.slice(0, 20).map(async (p) => {
          const res = await axios.get(p.url);
          return res.data;
        })
      );
      setPokemonList(detailedList);
      setLoading(false);
    };

    loadPokemon();
  }, [selectedType]);

  const handleTypeChange = (type) => {
    setSearchParams({ selected: type });
  };

  return (
    <div>
      <h2 className={styles.heading}>Pokémon Type: {selectedType.toUpperCase()}</h2>
      <div className={styles.buttonContainer}>
        {types.map(type => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`${styles.typeButton} ${type === selectedType ? styles.activeButton : ''}`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
      {loading ? (
        <p className={styles.loading}>Loading Pokémon...</p>
      ) : (
        <div className={styles.grid}>
          {pokemonList.map((pokemon) => (
            <div key={pokemon.id} className={styles.card}>
              <Link
                to={`/pokemon/${pokemon.id}?from=type&selected=${selectedType}`}
                className={styles.cardLink}
              >
                <h3>{pokemon.name.toUpperCase()}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.image} />
              </Link>
              <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
              <button
                onClick={() => addFavorite(pokemon)}
                className={styles.addButton}
              >
                Add to Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonByType;
