import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';

export const setMovieId = (id) => ({
  type: 'SET_MOVIE_ID',
  payload: id,
});

export const setMoviePage = (moviePage) => ({
  type: 'SET_MOVIE_PAGE',
  payload: moviePage,
});

export const setMovieAbout = (movieAbout) => ({
  type: 'SET_MOVIE_ABOUT',
  payload: movieAbout,
});

export const fetchMoviePage = (id) => (dispatch) => {

  axios.get(`${urlFilms}/films/${id}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': `application/json`}})
      .then(({data}) => {
        dispatch(setMoviePage(data))
      })
};

export const setStaffId = (staffId) => ({
  type: 'SET_STAFF_ID',
  payload: staffId,
});