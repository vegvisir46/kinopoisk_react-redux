import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './main.scss';
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import MainNone from './MainNone';
import Filters from '../Filters/Filters';
import LoadingBlock from '../LoadingBlock/LoadingBlock';
import genresArray from "../../functions/array";

import { Pagination } from 'antd';

import { setSortByCountry, setSortByGenre, setSortByType } from '../../redux/actions/filters';
import { fetchFilters } from '../../redux/actions/filtersValue';
import { fetchMovies, setCurrent } from '../../redux/actions/movieListParametr';
import { setMovieId } from '../../redux/actions/movieId';

function Main() {
  const dispatch = useDispatch();
  const {type, genre, country, search} = useSelector(({filters}) => filters);
  const {countryValue, genresValue} = useSelector(({filtersValue}) => filtersValue);
  const {current, movie, totalMovie, isLoaded} = useSelector(({movieListParametr}) => movieListParametr);

  React.useEffect (() => {
    dispatch(fetchMovies(current, type, genre, country, search));
  }, [current, type, genre, country, search]);

  React.useEffect (() => {
    dispatch(fetchFilters(countryValue, genresValue))
  }, []);

  React.useEffect (() => {
    dispatch(setSortByType(type, genre, country))
  }, [type, genre, country]);

  const onSelectType = React.useCallback ((type) => {
    dispatch(setSortByType(type))
  }, []);

  const onSelectGenre = React.useCallback ((genre) => {
    dispatch(setSortByGenre(genre))
  }, []);

  const onSelectCountry = React.useCallback ((country) => {
    dispatch(setSortByCountry(country))
  }, []);

  const onSelectCurrent = React.useCallback ((current) => {
    dispatch(setCurrent(current))
  }, []);

  const onClickid = React.useCallback ((id) => {
    dispatch(setMovieId(id))
  }, []);

  return (
    <div className='main-wrapper'>
      <div className='main-empty'></div>
      {isLoaded
        ?<div>
        <Filters 
          genresArr={genresValue} 
          countryArr={countryValue}
          typeMovie={type} genre={genre}
          type={type} country={country}
          setTypeMovie={onSelectType}
          setGenreMovie={onSelectGenre}
          setCountryMovie={onSelectCountry}/>
        {movie.length !== 0 
          ? <div className='main'>
            {movie.map(item => 
            <Link  to={`films/${item.kinopoiskId}`}
              key={`${item.kinopoiskId}_${item.year}`}
              >
              <FilmCartMenu onClickid={onClickid}
                nameRu={item.nameRu}
                nameOriginal={item.nameOriginal}
                genres={genresArray(item.genres)}
                poster={item.posterUrlPreview}
                ratingKinopoisk={item.ratingKinopoisk}
                type={item.type}
                id={item.kinopoiskId}/>
            </Link>)}
          </div>
          : <MainNone/>}
        {totalMovie>20 && movie.length !== 0
          ? <Pagination className='pagination'
          current={current} onChange={onSelectCurrent} total={totalMovie} 
          defaultPageSize={20} showSizeChanger={false}/>
          : ''}
      </div>
      : <LoadingBlock/>}
      <div className='main-empty-footer'></div>
    </div>
  )
};

export default Main;