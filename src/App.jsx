import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import MainLayout from "./Layouts/MainLayout";

// Pages & Components
import Home from "./Pages/Home/Home";
import Hero from "./components/Hero/Hero";
import Movies from "./components/Movies/Movies";
import CreateMovie from "./Pages/Movie/Create";
import PopularMovie from "./Pages/Movie/Popular";
import NowPlayingMovie from "./Pages/Movie/NowPlaying";
import TopRatedMovie from "./Pages/Movie/TopRated";
import Counter from "./components/Counter/Counter";

function HomeWithMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const response = await axios.get(URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <Home />
      <Movies movies={movies} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeWithMovies />} />
          <Route path="movie/create" element={<CreateMovie />} />
          <Route path="movie/popular" element={<PopularMovie />} />
          <Route path="movie/nowplaying" element={<NowPlayingMovie />} />
          <Route path="movie/toprated" element={<TopRatedMovie />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
