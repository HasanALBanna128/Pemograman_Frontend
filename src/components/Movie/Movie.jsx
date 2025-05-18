import React from "react";
import styles from "./Movie.module.css";

function Movie({ movie }) {
    return (
        <div className={styles.movie}>
            <img className={styles.movie_image} src={movie.poster} alt={movie.title} />
            <h3 className={styles.movie_title}>{movie.title}</h3>
            <p className={styles.movie_date}>{movie.year}</p>
        </div>
    );
}

export default Movie;
