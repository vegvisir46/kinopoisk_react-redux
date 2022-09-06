import React from 'react';

import './moviePage.scss';
import genresArray from "../../functions/array";
import MovieFilmAbout from './MovieFilmAbout';
import MoviePageStats from './MoviePageStats/MoviePageStats'

import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviePage } from '../../redux/actions/movieId';
import MoviePageRating from './MoviePageRating/MoviePageRating';

function MoviePage() {
  const dispatch = useDispatch();
  const {id, moviePage} = useSelector(({movieId}) => movieId);

  React.useEffect (() => {
    dispatch(fetchMoviePage(id))
  }, [id]);

  return (
    <div className='movie-page-wrapper'>
      <div className='movie-page-empty'></div>
      <div className='movie-page-main'>
        <div className='movie-page' >
          <div className='movie-page-image-block'>
            <img className='movie-page-img' src={moviePage.posterUrl}
              alt={`Изображение: ${moviePage.nameRu}`} width='320px' />
              <div className='movie-page-info'>
                <p className='movie-page-name'>{moviePage.nameRu}/{moviePage.nameOriginal}</p>
                <p className='movie-page-genre'>{genresArray(moviePage.genres)}</p>
              </div>
          </div>
          <div className='movie-page-textcontent'>
            <MoviePageRating moviePage={moviePage}/>
            <h2 className='slogan'>{moviePage.slogan}</h2>
            <div className='movie-description'>
              <p>{(moviePage.description === null && moviePage.editorAnnotation === null )
                    ? ''
                    : `${moviePage.description !== null ? moviePage.description : ''} 
                        ${moviePage.editorAnnotation !== null ? moviePage.editorAnnotation : ''}`}
              </p>
            </div>
            <MoviePageStats moviePage={moviePage}/>
          </div>
        </div>
        <MovieFilmAbout id={id} typeFilm={moviePage.type}/>
      </div>
      <div className='movie-page-empty-footer'></div>
    </div>
  )
};

export default MoviePage;