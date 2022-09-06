import token  from '../apiData/token';
import urlFilms from '../apiData/urlFilms';
import axios from 'axios';

const LoadMovie = async (current, typeMovie, genreMovie, countryMovie) => {
  const response = await axios.get(
    `${urlFilms}/films?page=${current}&type=${typeMovie}&genres=${genreMovie}&countries=${countryMovie}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data
};

export default LoadMovie;