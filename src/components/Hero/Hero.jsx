import { useEffect, useState } from "react";
import {
  Container,
  HeroSection,
  HeroLeft,
  HeroRight,
  HeroTitle,
  HeroGenre,
  HeroDescription,
  HeroImage,
  HeroButton,
} from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }

    fetchMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>{movie.Title}</HeroTitle>
          <HeroGenre>Genre: {movie.Genre}</HeroGenre>
          <HeroDescription>{movie.Plot}</HeroDescription>
          <HeroButton>Watch</HeroButton>
        </HeroLeft>
        <HeroRight>
          <HeroImage src={movie.Poster} alt={movie.Title} />
        </HeroRight>
      </HeroSection>
    </Container>
  );
}

export default Hero;
