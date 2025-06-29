// src/components/Movies/Movies.jsx

import { useContext } from "react";
import Movie from "../Movie/Movie.jsx";
import MoviesContext from "../../context/MoviesContext";

function Movies({ title = "Movies" }) {
  const { movies } = useContext(MoviesContext);

  return (
    <section>
      <h2
        style={{
          fontSize: "2rem",
          color: "#ffcc00",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        🎬 {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "16px",
          padding: "0 20px",
        }}
      >
        {movies && movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </section>
  );
}

export default Movies;
