import { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonSpecies } from '../../api/pokemon';
import styles from './Hero.module.css';

function Hero() {
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemon(1);
      const desc = await fetchPokemonSpecies(1);
      setPokemon(data);
      setSpecies(desc);
    };
    loadData();
  }, []);

  if (!pokemon || !species) return <p className={styles.loading}>Loading Pokémon...</p>;

  const descriptionEntry = species.flavor_text_entries.find(entry => entry.language.name === 'en');

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h2 className={styles.title}>{pokemon.name.toUpperCase()}</h2>
        <h3 className={styles.types}>Type: {pokemon.types.map(t => t.type.name).join(', ')}</h3>
        <p className={styles.description}>
          {descriptionEntry ? descriptionEntry.flavor_text : 'No description available.'}
        </p>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.heroImage} />
      </div>
    </div>
  );
}

export default Hero;
