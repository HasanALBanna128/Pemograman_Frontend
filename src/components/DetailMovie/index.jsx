import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetail() {
      try {
        const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Failed to fetch movie detail:", error);
      }
    }

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <p style={{ color: "#fff" }}>Loading movie details...</p>;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div style={{ color: "#fff", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "#f5a623" }}>{movie.title}</h1>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <img
        src={imageUrl}
        alt={movie.title}
        style={{
          maxWidth: "300px",
          borderRadius: "12px",
          marginBottom: "1rem",
        }}
      />
      <p style={{ lineHeight: "1.6" }}>{movie.overview}</p>
    </div>
  );
}

export default DetailMovie;
