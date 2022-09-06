import token  from './token';
import urlFilms from './urlFilms';
import axios from 'axios';

const budgetMovie = async (id) => {
  const response = await axios.get(
    `${urlFilms}/films/${id}/box_office`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data.items;
};

export default budgetMovie;