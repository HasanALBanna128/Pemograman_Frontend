import { useEffect, useState, useContext } from 'react';
import { fetchPokemonByGeneration } from '../api/pokemonExtra';
import axios from 'axios';
import FavoriteContext from '../context/FavoriteContext';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Pokemon/PokemonList.module.css';

const generations = [1, 2, 3, 4, 5, 6, 7, 8];

function PokemonByGeneration() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedGeneration = searchParams.get('selected') || '1';

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const speciesList = await fetchPokemonByGeneration(selectedGeneration);
      const detailedList = await Promise.all(
        speciesList.slice(0, 20).map(async (s) => {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${s.name}`);
          return res.data;
        })
      );
      setPokemonList(detailedList);
      setLoading(false);
    };

    loadPokemon();
  }, [selectedGeneration]);

  const handleGenerationChange = (gen) => {
    setSearchParams({ selected: gen });
  };

  return (
    <div>
      <h2 className={styles.heading}>Pokémon Generation: {selectedGeneration}</h2>
      <div className={styles.buttonContainer}>
        {generations.map(gen => (
          <button
            key={gen}
            onClick={() => handleGenerationChange(gen)}
            className={`${styles.typeButton} ${gen.toString() === selectedGeneration ? styles.activeButton : ''}`}
          >
            Gen {gen}
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
                to={`/pokemon/${pokemon.id}?from=generation&selected=${selectedGeneration}`}
                className={styles.cardLink}
              >
                <h3>{pokemon.name.toUpperCase()}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.image} />
              </Link>
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

export default PokemonByGeneration;
