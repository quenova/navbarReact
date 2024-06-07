import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const MovieCard = ({ movie }) => {
  const getStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.round(rating / 2) ? <StarIcon key={i} /> : <StarBorderIcon key={i} />);
    }
    return stars;
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="450"
        image={movie.image}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {movie.year}
        </Typography>
        <Box display="flex" justifyContent="center" margin="0.5rem 0">
          {getStars(movie.rating)}
        </Box>
        <Typography variant="body2" color="textPrimary">
          {movie.rating}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
