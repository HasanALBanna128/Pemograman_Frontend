import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import PokemonList from './Pages/Pokemon/PokemonList';
import PokemonByType from './Pages/PokemonByType';
import PokemonByGeneration from './Pages/PokemonByGeneration';
import PokemonByAbility from './Pages/PokemonByAbility';
import PokemonFavorite from './Pages/PokemonFavorite';
import PokemonDetail from './Pages/PokemonDetail';
import { FavoriteProvider } from './context/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PokemonList />
            </>
          } />
          <Route path="/type" element={<PokemonByType />} />
          <Route path="/generation" element={<PokemonByGeneration />} />
          <Route path="/ability" element={<PokemonByAbility />} />
          <Route path="/favorite" element={<PokemonFavorite />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavoriteProvider>
  );
}

export default App;
