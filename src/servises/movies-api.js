import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '80fe24ea6ea4db327f1f3c79898b7ba2';

export const fetchMovies = page => {
  return axios('trending/movie/day', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};

export const fetchMovieDetails = id => {
  return axios(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieReviews = id => {
  return axios(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieCredits = id => {
  return axios(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchSearchMovies = query => {
  return axios('search/movie', {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
};
