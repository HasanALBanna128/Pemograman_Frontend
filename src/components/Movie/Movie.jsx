import React from "react";
import { Link } from "react-router-dom";
import { Card, Poster, Title, Date } from "./Movie.styled";

function Movie({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Card>
      <Poster src={imageUrl} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <Title>{movie.title}</Title>
      </Link>
      <Date>{movie.release_date}</Date>
    </Card>
  );
}

export default Movie;
