import { createContext, useState } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    if (!favorites.some(f => f.id === pokemon.id)) {
      setFavorites(prev => [...prev, pokemon]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(p => p.id !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
