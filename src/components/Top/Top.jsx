import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './top.scss';
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import genresArray from "../../functions/array";

import { setMovieId } from '../../redux/actions/movieId';
import { fetchTop, setPageTop } from '../../redux/actions/top';

import { Pagination } from 'antd';
import LoadingBlock from '../LoadingBlock/LoadingBlock';

function Top({activeLink}) {
  const dispatch = useDispatch();  
  const {page, topList, totalTop, isLoaded} = useSelector(({top}) => top);
  const nameTop = () => {
    if (activeLink === '/top-250best') {
      return 'TOP_250_BEST_FILMS'
    };
    if (activeLink === '/top-100popular') {
      return 'TOP_100_POPULAR_FILMS'
    };
    if (activeLink === '/top-await') {
      return 'TOP_AWAIT_FILMS'
    };
  };

  React.useEffect (() => {
    dispatch(fetchTop(page, nameTop()))
  }, [page, activeLink]);

  const onClickid = React.useCallback ((id) => {
    dispatch(setMovieId(id))
  }, []);

  const onSelectPage = React.useCallback ((page) => {
    dispatch(setPageTop(page))
  }, []);

  return (
    <div className='top-wrapper'>
    <div className='top-empty'></div>
    {isLoaded
      ?<div>
      <div className='top'>
        {topList?.map(item => 
        <Link  to={{pathname: `/films/${item.filmId}`}}
          key={item.filmId+item.year}
          >
          <FilmCartMenu onClickid={onClickid}
            nameRu={item.nameRu}
            nameOriginal={item.nameEn}
            genres={genresArray(item.genres)}
            poster={item.posterUrlPreview}
            ratingKinopoisk={item.rating}
            id={item.filmId}/>
        </Link>)}
      </div>
      
      {totalTop>20 && topList.length !== 0
      ? <Pagination className='pagination'
      current={page} onChange={onSelectPage} total={totalTop} 
      defaultPageSize={20} showSizeChanger={false}/>
      : ''}
    </div>
    : <LoadingBlock/>}
    <div className='top-empty-footer'></div>
  </div>
  )
}

export default Top