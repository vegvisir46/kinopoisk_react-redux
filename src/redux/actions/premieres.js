import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';

export const setPremiers = (premieres) => ({
  type: 'SET_PREMIERS',
  payload: premieres,
});

export const setPremPage = (pagePrem) => ({
  type: 'PAGE_NUMBER_PREMIER',
  payload: pagePrem,
});

export const setTotalPrem = (totalPremiers) => ({
  type: 'TOTAL_PREMIERS',
  payload: totalPremiers,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

export const fetchPremiers = (year, month) => (dispatch) => {
  const monthNow = new Date().toLocaleString('en', { month: 'long' }).toLocaleUpperCase();
  const yearNow = new Date ().getFullYear();

  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get(`${urlFilms}/films/premieres?year=${year ? year : yearNow}&month=${month ? month : monthNow}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': `application/json`}})
      .then(({data}) => {
        dispatch(setPremiers(data.items))
        dispatch(setTotalPrem(data.total))
      })
};