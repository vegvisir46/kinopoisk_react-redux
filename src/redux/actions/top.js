import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';

export const setPageTop = (page) => ({
  type: 'SET_PAGE_TOP',
  payload: page,
});

export const setTopList = (topList) => ({
  type: 'TOP_LIST',
  payload: topList,
});

export const setTotalTop = (totalTop) => ({
  type: 'TOP_TOTAL',
  payload: totalTop,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

export const fetchTop = (page, nameTop) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get(
    `${urlFilms}/films/top?type=${nameTop}&page=${page}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setTotalTop(data.pagesCount * 20))
        dispatch(setTopList(data.films))
      })
};
