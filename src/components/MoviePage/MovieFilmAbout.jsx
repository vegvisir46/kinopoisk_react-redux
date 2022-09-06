import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import './filmAbout.scss';
import Slider from './ImageSlider/Slider';
import AwardBlock from './AwardBlock/AwardBlock';
import Budget from './Budget/Budget';
import Similars from './Similars/Similars';
import SeasonsInfo from './Seasons/SeasonsInfo';
import Staff from './Staff/Staff';

import { setMovieAbout } from '../../redux/actions/movieId';

function MovieFilmAbout({id, typeFilm}) {
  const dispatch = useDispatch();
  const {movieAbout} = useSelector(({movieId}) => movieId)

  const onClickMore = React.useCallback (() => {
    dispatch(setMovieAbout(true))
  }, [id]);

  React.useEffect(()=>{
    return ()=> {dispatch(setMovieAbout(false))}
  },[id])

  return (
  <div className='film-about'>
    {movieAbout 
    ? <div className='film-info'>
        <div className='film-info-list'>
          <Staff id={id} movieAbout={movieAbout}/>
          {typeFilm !== 'FILM' ? <SeasonsInfo id={id} movieAbout={movieAbout}/> : null} 
          <Slider id={id} movieAbout={movieAbout}/>
          <AwardBlock id={id} movieAbout={movieAbout}/>
          {typeFilm === 'FILM' ? <Budget id={id} movieAbout={movieAbout}/> : null}
          <Similars id={id} movieAbout={movieAbout}/>
        </div>
      </div>
    :<button className='film-button'
      onClick={onClickMore}>
      Подробнее...
     </button>}
  </div>

  )
};

export default MovieFilmAbout;