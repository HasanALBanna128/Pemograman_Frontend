import { useEffect, useState, useContext } from 'react';
import { fetchPokemonByAbility } from '../api/pokemonExtra';
import axios from 'axios';
import FavoriteContext from '../context/FavoriteContext';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Pokemon/PokemonList.module.css';

const abilities = ['overgrow', 'blaze', 'torrent', 'shield-dust', 'run-away'];

function PokemonByAbility() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedAbility = searchParams.get('selected') || 'overgrow';

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const basicList = await fetchPokemonByAbility(selectedAbility);
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
  }, [selectedAbility]);

  const handleAbilityChange = (ability) => {
    setSearchParams({ selected: ability });
  };

  return (
    <div>
      <h2 className={styles.heading}>Pokémon Ability: {selectedAbility.toUpperCase()}</h2>
      <div className={styles.buttonContainer}>
        {abilities.map(ability => (
          <button
            key={ability}
            onClick={() => handleAbilityChange(ability)}
            className={`${styles.typeButton} ${ability === selectedAbility ? styles.activeButton : ''}`}
          >
            {ability.toUpperCase()}
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
                to={`/pokemon/${pokemon.id}?from=ability&selected=${selectedAbility}`}
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

export default PokemonByAbility;
