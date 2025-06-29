// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home/Home";
import CreateMovie from "./Pages/Movie/Create";
import PopularMovie from "./Pages/Movie/Popular";
import NowPlayingMovie from "./Pages/Movie/NowPlaying";
import TopRatedMovie from "./Pages/Movie/TopRated";
import Counter from "./components/Counter/Counter";
import Detail from "./Pages/Movie/Detail";
import MoviesContext from "./context/MoviesContext";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <BrowserRouter>
      <MoviesContext.Provider value={{ movies, setMovies }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movie/create" element={<CreateMovie />} />
            <Route path="movie/popular" element={<PopularMovie />} />
            <Route path="movie/nowplaying" element={<NowPlayingMovie />} />
            <Route path="movie/toprated" element={<TopRatedMovie />} />
            <Route path="counter" element={<Counter />} />
            <Route path="movie/:id" element={<Detail />} />
            <Route path="movie/detail/:id" element={<Detail />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </MoviesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
