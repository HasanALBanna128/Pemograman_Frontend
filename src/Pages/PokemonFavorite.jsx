import { useContext } from 'react';
import FavoriteContext from '../context/FavoriteContext';
import { Link } from 'react-router-dom';
import styles from './Pokemon/PokemonList.module.css';

function PokemonFavorite() {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <div>
      <h2 className={styles.heading}>My Favorite Pokémon</h2>
      {favorites.length === 0 ? (
        <p className={styles.loading}>You don't have any favorite Pokémon yet. Add some from the list!</p>
      ) : (
        <div className={styles.grid}>
          {favorites.map(pokemon => (
            <div key={pokemon.id} className={styles.card}>
              <Link
                to={`/pokemon/${pokemon.id}?from=favorite`}
                className={styles.cardLink}
              >
                <h3>{pokemon.name.toUpperCase()}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.image} />
              </Link>
              <button
                onClick={() => removeFavorite(pokemon.id)}
                className={styles.removeButton}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonFavorite;
