import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import '../Main/main.scss';
import FiltersPremier from '../Filters/FiltersPremier';
import MainNone from '../Main/MainNone';
import genresArray from "../../functions/array";
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';

import { setMonth, setYear } from '../../redux/actions/filters';
import { fetchPremiers, setPremPage } from '../../redux/actions/premieres';
import { setMovieId } from '../../redux/actions/movieId';

import { Pagination } from 'antd';
import LoadingBlock from '../LoadingBlock/LoadingBlock';

function Premieres({activeLink}) {
  const dispatch = useDispatch();
  const {month, year} = useSelector(({filters}) => filters);
  const {premieres, pagePrem, totalPremiers, isLoaded} = useSelector (({premieres}) => premieres);

  const premieresArr = []
  for (let i=0; i < premieres.length; i+=20) {
    premieresArr.push(premieres.slice(i, i + 20))
  };

  const onSelectMonth = React.useCallback ((month) => {
    dispatch(setMonth(month))
  }, []);

  const onSelectYear = React.useCallback ((year) => {
    dispatch(setYear(year))
  }, []);

  React.useEffect (() => {
    dispatch(fetchPremiers(year, month))
  }, [year, month, activeLink]);

  const onClickid = React.useCallback ((id) => {
    dispatch(setMovieId(id))
  }, []);

  const onSelectCurrent = React.useCallback ((pagePrem) => {
    dispatch(setPremPage(pagePrem))
  }, []);

  return (
    <div className='main-wrapper'>
    <div className='main-empty'></div>
    {isLoaded
      ?<div>
        <FiltersPremier
        setMonth={onSelectMonth}
        setYear={onSelectYear}
        month={month} year={year}
        />
        {premieres.length !== 0 
          ? <div className='main'>
            {premieresArr[pagePrem-1].map(item => 
            <Link  to={`/films/${item.kinopoiskId}`}
              key={item.kinopoiskId+item.year}
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
        
        {totalPremiers>20 && premieres.length !== 0
        ? <Pagination className='pagination'
        current={pagePrem} onChange={onSelectCurrent} total={totalPremiers} 
        defaultPageSize={20} showSizeChanger={false}/>
        : ''}
      </div>
      : <LoadingBlock/>}
    <div className='main-empty-footer'></div>
  </div>
  )
}

export default Premieres;