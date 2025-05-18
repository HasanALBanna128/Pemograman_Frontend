import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./app.css";

// Layout
import MainLayout from "./Layouts/MainLayout";

// Pages
import Home from "./Pages/Home/Home";
import CreateMovie from "./Pages/Movie/Create";
import PopularMovie from "./Pages/Movie/Popular";
import NowPlayingMovie from "./Pages/Movie/NowPlaying";
import TopRatedMovie from "./Pages/Movie/TopRated";
import Hero from "./components/Hero/Hero";
import Movies from "./components/Movies/Movies";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route
                        index
                        element={
                            <>
                                <Hero />
                                <Home />
                                <Movies />
                            </>
                        }
                    />
                    <Route path="movie/create" element={<CreateMovie />} />
                    <Route path="movie/popular" element={<PopularMovie />} />
                    <Route path="movie/nowplaying" element={<NowPlayingMovie />} />
                    <Route path="movie/toprated" element={<TopRatedMovie />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
