import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';

export const setGenresValue = (genresValue) => ({
  type: 'GENRES_VALUE',
  payload: genresValue,
});

export const setCountriesValue = (countryValue) => ({
  type: 'COUNTRY_VALUE',
  payload: countryValue,
});


export const fetchFilters = () => (dispatch) => {

  axios.get(`${urlFilms}/films/filters`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setGenresValue(data.genres
          .filter(item => item.genre !== '')
          .sort((a, b)=>a.genre.localeCompare(b.genre))
          ))
        dispatch(setCountriesValue(data.countries
          .filter(item => item.country !== '')
          .sort((a, b)=>a.country.localeCompare(b.country))
          ))
      })
};