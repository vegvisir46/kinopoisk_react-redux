import token  from './token';
import urlFilms from './urlFilms';
import axios from 'axios';

const similar = async (idFilm) => {
  const response = await axios.get(
    `${urlFilms}/films/${idFilm}/similars`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data.items;
};

export default similar;