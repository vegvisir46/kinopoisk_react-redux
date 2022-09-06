import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';

import './similar.scss';
import FilmCartMenu from '../../Film-cart-menu/FilmCartMenu';
import similar from '../../../apiData/similar';
import { setMovieId } from '../../../redux/actions/movieId';

function Similars({id}) {  
  const dispatch = useDispatch();
  const [similarShow, setShowAw] = useState(false);
  const [similars, setSimilar] = useState ([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImgIndex = activeIndex > 0 ? activeIndex - 1 : similars.length - 1;
  const nextImgIndex = activeIndex === similars.length - 1 ? 0 : activeIndex + 1;

  const prevplusImgIndex =  activeIndex > 1 ? activeIndex - 2 
      : (activeIndex > 0 ? similars.length - 1 : similars.length - 2);
      
  const nextplusImgIndex = activeIndex === similars.length - 1 ? 1 
      : (activeIndex + 2 === similars.length ? 0 : activeIndex + 2);

  const loadSimilars = async () => {
    const similars = await similar (id);
    setSimilar(similars);
  };
  
  const onClicknextSlide = () => {
    setActiveIndex(activeIndex+1 === similars.length - 1 ? 0 : activeIndex + 1)
  }

  const onClickpreviousSlide = () => {
    setActiveIndex(activeIndex-1 > 0 ? activeIndex - 1 : similars.length - 1)
  }

  useEffect (() => {
    loadSimilars()
  }, [ similarShow]);

  const onClickSimilar = () => {
    setShowAw(similarShow ? false : true);
  }

  const onClickid = React.useCallback ((id) => {
    dispatch(setMovieId(id))
  }, [similarShow]);

  return (
    <div className='film-similar'>
      <div className='film-similar-start'>
        <p>Похожее</p>
        {similarShow === false 
          ?<button className='button button-down' onClick={onClickSimilar}>&#10094;</button>
          :<button className='button button-up' onClick={onClickSimilar}>&#10094;</button>}
      </div>
      {similarShow 
        ?<div className='film-item film-slider-similar'>
          {similars.length>3 
           ?<a className="previous" onClick={onClickpreviousSlide}>&#10094;</a> 
           : ''}
          {similars.length>3 
            ?<Link  to={{pathname: `/films/${similars[prevplusImgIndex].filmId}`}}
              key={prevplusImgIndex} className='film-slider-link'
              >
              <FilmCartMenu
                onClickid={onClickid}
                className='film-similar-block'
                nameRu={similars[prevplusImgIndex].nameRu}
                nameOriginal={similars[prevplusImgIndex].nameOriginal}
                poster={similars[prevplusImgIndex].posterUrlPreview}
                id={similars[prevplusImgIndex].filmId}/>
            </Link>
            : ''}
          <Link  to={{pathname: `/films/${similars[prevImgIndex].filmId}`}}
            key={prevImgIndex} className='film-slider-link'
            >
            <FilmCartMenu
              onClickid={onClickid}
              className='film-similar-block'
              nameRu={similars[prevImgIndex].nameRu}
              nameOriginal={similars[prevImgIndex].nameOriginal}
              poster={similars[prevImgIndex].posterUrlPreview}
              id={similars[prevImgIndex].filmId}/>
          </Link>
          <Link  to={{pathname: `/films/${similars[activeIndex].filmId}`}}
            key={activeIndex} className='film-slider-link'
            >
            <FilmCartMenu
              onClickid={onClickid}
              className='film-similar-block'
              nameRu={similars[activeIndex].nameRu}
              nameOriginal={similars[activeIndex].nameOriginal}
              poster={similars[activeIndex].posterUrlPreview}
              id={similars[activeIndex].filmId}/>
          </Link>
          <Link  to={{pathname: `/films/${similars[nextImgIndex].filmId}`}}
            key={nextImgIndex} className='film-slider-link'
            >
            <FilmCartMenu
              onClickid={onClickid}
              className='film-similar-block'
              nameRu={similars[nextImgIndex].nameRu}
              nameOriginal={similars[nextImgIndex].nameOriginal}
              poster={similars[nextImgIndex].posterUrlPreview}
              id={similars[nextImgIndex].filmId}/>
          </Link>
          {similars.length >4 
            ?<Link  to={{pathname: `/films/${similars[nextplusImgIndex].filmId}`}}
              key={nextplusImgIndex} className='film-slider-link'
              >
              <FilmCartMenu
                onClickid={onClickid}
                className='film-similar-block'
                nameRu={similars[nextplusImgIndex].nameRu}
                nameOriginal={similars[nextplusImgIndex].nameOriginal}
                poster={similars[nextplusImgIndex].posterUrlPreview}
                id={similars[nextplusImgIndex].filmId}/>
            </Link>
            : ''}
          {similars.length>3 
            ?<a className="next" onClick={onClicknextSlide}>&#10095;</a>
            :''}
        </div>
        : ''}
      </div>
  )
};

export default Similars;