import token  from '../apiData/token';
import urlFilms from '../apiData/urlFilms';
import axios from 'axios';

const LoadFilters = async () => {
  const response = await axios.get(
    `${urlFilms}/films/filters`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )

  const genres = response.data.genres
    .filter(item => item.genre !== '')
    .sort((a, b)=>a.genre.localeCompare(b.genre))

  const countres = response.data.countries
    .filter(item => item.country !== '')
    .sort((a, b)=>a.country.localeCompare(b.country))

  return {genres, countres}
};

export default LoadFilters;