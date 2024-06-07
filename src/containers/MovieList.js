import React, { useState } from 'react';
import { Container, Grid, Button, Typography, Box } from '@mui/material';
import MovieCard from '../components/MovieCard';

const moviesData = [
  {
    title: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  },
  {
    title: "The Man From Toronto",
    year: 2022,
    rating: 6.2,
    image: "https://image.tmdb.org/t/p/w500/uTCfTibqtk4f90cC59bLPMOmsfc.jpg",
  },
  {
    title: "Spiderhead",
    year: 2022,
    rating: 5.6,
    image: "https://image.tmdb.org/t/p/w500/7COPO5B9AOKIB4sEkvNu0wfve3c.jpg", // Updated URL
  },
  {
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    year: 2022,
    rating: 6.8,
    image: "https://image.tmdb.org/t/p/w500/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
  },
];

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);

  const sortMovies = (order) => {
    const sortedMovies = [...movies].sort((a, b) => order === 'asc' ? a.rating - b.rating : b.rating - a.rating);
    setMovies(sortedMovies);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end" alignItems="center" marginTop="1rem" marginBottom="1rem">
        <Typography variant="h6" marginRight="1rem">Sort by Rating</Typography>
        <Button variant="contained" color="primary" onClick={() => sortMovies('asc')} style={{ marginRight: '0.5rem' }}>ASC</Button>
        <Button variant="contained" color="secondary" onClick={() => sortMovies('desc')}>DESC</Button>
      </Box>
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
