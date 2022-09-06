import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';

export const setMovie = (movie) => ({
  type: 'MOVIE_LIST',
  payload: movie,
});

export const setCurrent = (current) => ({
  type: 'PAGE_NUMBER',
  payload: current,
});

export const setTotalMovie = (totalMovie) => ({
  type: 'TOTAL_MOVIE',
  payload: totalMovie,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

export const fetchMovies = (current, type, genre, country, search) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get(
    `${urlFilms}/films?page=${current}&type=${type ? type : ''}&genres=${genre ? genre : ''}&countries=${country ? country : ''}&keyword=${search ? search : ''}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setMovie(data.items))
        dispatch(setTotalMovie(data.total))
      })
};