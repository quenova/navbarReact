import axios from 'axios';

const API_KEY = 'df7934f249ad19ef751a3c7ae05883e7';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export const fetchMovies = async () => {
  try {
    const response = await tmdb.get('discover/movie');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default tmdb;
