import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovie() {
      try {
        const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;

        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNowPlayingMovie();
  }, []);

  return <Movies movies={movies} title="Top Rated" />;
}

export default NowPlayingMovie;
