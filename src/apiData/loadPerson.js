import token  from './token';
import axios from 'axios';

const staffInfo = async (staffId) => {
  const response = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v1/staff/${staffId}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data;
};

export default staffInfo;