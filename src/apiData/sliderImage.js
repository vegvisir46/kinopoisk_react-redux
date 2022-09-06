import token  from './token';
import urlFilms from './urlFilms';
import axios from 'axios';

const image = async (idFilm) => {
  const response = await axios.get(
    `${urlFilms}/films/${idFilm}/images?type=STILL&page=1`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data.items;
};

export default image;