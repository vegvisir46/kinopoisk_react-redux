import token  from './token';
import urlFilms from './urlFilms';
import axios from 'axios';

const awards = async (idFilm) => {
  const response = await axios.get(
    `${urlFilms}/films/${idFilm}/awards`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data.items;
};

export default awards;