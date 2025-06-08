import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;

        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNowPlaying();
  }, []);

}

export default Home;
