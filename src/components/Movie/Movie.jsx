import React from "react";
import { Card, Poster, Title, Date } from "./Movie.styled";

function Movie({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Card>
      <Poster src={imageUrl} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Date>{movie.release_date}</Date>
    </Card>
  );
}

export default Movie;
