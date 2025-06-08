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
    async function fetchTrendingMovie() {
      try {
        const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;

        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/week",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
          }
        );

        const data = await response.json();

        setMovie(data.results[0]);
      } catch (error) {
        console.error("Error fetching trending movie:", error);
      }
    }

    fetchTrendingMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>{movie.title}</HeroTitle>
          <HeroGenre>Release Date: {movie.release_date}</HeroGenre>
          <HeroDescription>{movie.overview}</HeroDescription>
          <HeroButton>Watch</HeroButton>
        </HeroLeft>
        <HeroRight>
          <HeroImage src={imageUrl} alt={movie.title} />
        </HeroRight>
      </HeroSection>
    </Container>
  );
}

export default Hero;
