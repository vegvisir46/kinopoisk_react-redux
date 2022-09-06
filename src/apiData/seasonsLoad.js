import token  from './token';
import urlFilms from './urlFilms';
import axios from 'axios';

const seasons = async (idFilm) => {
  const response = await axios.get(
    `${urlFilms}/films/${idFilm}/seasons`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data.items;
};

export default seasons;