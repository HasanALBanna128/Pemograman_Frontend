import axios from 'axios';

export const fetchPokemon = async (id) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.data;
};

export const fetchPokemonSpecies = async (id) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  return res.data;
};

