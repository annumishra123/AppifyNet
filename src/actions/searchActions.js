import {FETCH_MOVIES, LOADING } from './types';
import { APIKey } from "../APIKey";

export const fetchMovies = (page) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  fetch(`https://www.omdbapi.com/?apikey=${APIKey}&s="hero"&page=${page}`)
    .then(async (response) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: await response.json(),
      });
    })
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};

