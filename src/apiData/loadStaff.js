import token  from './token';
import axios from 'axios';

const staffLoad = async (id) => {
  const response = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data.sort((a, b)=>a.professionKey.localeCompare(b.professionKey));
};

export default staffLoad;