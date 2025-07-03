import axios from 'axios';

export const fetchPokemonByType = async (type) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  return res.data.pokemon.map(p => p.pokemon);
};

export const fetchPokemonByGeneration = async (generation) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/generation/${generation}`);
  return res.data.pokemon_species;
};

export const fetchPokemonByAbility = async (ability) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
  return res.data.pokemon.map(p => p.pokemon);
};
