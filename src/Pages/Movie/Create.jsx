// src/Pages/Movie/CreateMovie.jsx
import React, { useState } from "react";
import AddMovieForm from "../../components/AddMovieForm";
import styles from "./CreateMovie.module.css";

function CreateMovie() {
  const [movies, setMovies] = useState([]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Create Movie</h2>
      <AddMovieForm movies={movies} setMovies={setMovies} />

      {movies.length > 0 && (
        <>
          <h3 className={styles.subheading}>Movie Preview</h3>
          <ul className={styles.movieList}>
            {movies.map((movie) => (
              <li className={styles.movieItem} key={movie.id}>
                {movie.title} ({movie.year}) - {movie.type}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CreateMovie;
