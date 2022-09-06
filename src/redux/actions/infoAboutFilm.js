import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';

export const setSeasonInfo = (seasonInfo) => ({
  type: 'SET_SEASON_INFO',
  payload: seasonInfo,
});

export const setSeasonList = (seasonsList) => ({
  type: 'SET_SEASON_LIST',
  payload: seasonsList,
});

export const fetchSeasonList = (id) => (dispatch) => {

  axios.get(`${urlFilms}/films/${id}/seasons`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setSeasonList(data.items))
      })
};

export const setSliderIndex = (sliderIndex) => ({
  type: 'SET_SLIDER_INDEX',
  payload: sliderIndex,
});

export const setSliderImage = (sliderImage) => ({
  type: 'SET_SLIDER_IMAGE',
  payload: sliderImage,
});

export const fetchSliderImage = (id) => (dispatch) => {

  axios.get(`${urlFilms}/films/${id}/images?type=STILL&page=1`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setSliderImage(data.items))
      })
};

export const setAwardShow = (awardShow) => ({
  type: 'SET_AWARD_SHOW',
  payload: awardShow,
});

export const setAwards = (awardsFilm) => ({
  type: 'SET_AWARDS_FILM',
  payload: awardsFilm,
});

export const fetchAwards = (id) => (dispatch) => {

  axios.get(`${urlFilms}/films/${id}/awards`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setAwards(data.items))
      })
};

export const setBox = (budget) => ({
  type: 'SET_BOX',
  payload: budget,
});

export const fetchBox = (id) => (dispatch) => {

  axios.get(`${urlFilms}/films/${id}/box_office`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setBox(data.items))
      })
};