import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Pokemon/PokemonList.module.css';

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [pokemon, setPokemon] = useState(null);
  const [description, setDescription] = useState('');

  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get('from');
  const selected = searchParams.get('selected');

  useEffect(() => {
    const fetchData = async () => {
      const pokeRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(pokeRes.data);

      const speciesRes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const englishEntries = speciesRes.data.flavor_text_entries.filter(
        entry => entry.language.name === 'en'
      );
      const uniqueTexts = [...new Set(englishEntries.map(entry => entry.flavor_text.replace(/\f/g, ' ')))];
      const combinedDescription = uniqueTexts.slice(0, 3).join(' ');

      setDescription(combinedDescription || 'No description available.');
    };

    fetchData();
  }, [id]);

  if (!pokemon) return <p className={styles.loading}>Loading...</p>;

  const handleBack = () => {
    if (from === 'type') {
      navigate(`/type?selected=${selected}`);
    } else if (from === 'generation') {
      navigate(`/generation?selected=${selected}`);
    } else if (from === 'ability') {
      navigate(`/ability?selected=${selected}`);
    } else if (from === 'favorite') {
      navigate('/favorite');
    } else {
      navigate('/');
    }
  };

  return (
    <div style={{ textAlign: 'center', color: '#fff' }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p>{description}</p>
      <button
        onClick={handleBack}
        className={styles.backButton}
      >
        Back
      </button>
    </div>
  );
}

export default PokemonDetail;
