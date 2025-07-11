import axios from 'axios';

export const fetchPokemonList = async (limit = 20, offset = 0) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return res.data.results;
};
