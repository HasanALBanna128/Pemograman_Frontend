import React from "react";
import { Card, Poster, Title, Date } from "./Movie.styled";

function Movie({ movie }) {
  return (
    <Card>
      <Poster src={movie.poster} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Date>{movie.year}</Date>
    </Card>
  );
}

export default Movie;
