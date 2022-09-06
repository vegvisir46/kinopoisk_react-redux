import React from 'react';
import '../moviePage.scss';


function MoviePageRating({moviePage}) {
  return (
    <div className='movie-rating'>
    {moviePage.ratingKinopoisk 
      ? <div className='movie-rating-item'>
        <p>{moviePage.ratingKinopoisk}</p>
        <span>{moviePage.ratingKinopoiskVoteCount} оценки</span>
      </div>
      : <div className='movie-rating-item'>
          <p>Рейтинг отсутствует</p>
        </div>}
    {moviePage.ratingImdb 
      ? <div className='movie-rating-item'>
          <p>{moviePage.ratingImdb} imdb</p>
          <span>{moviePage.ratingImdbVoteCount} оценки</span>
        </div>
      : <div className='movie-rating-item'>
          <p>Рейтинг отсутствует</p>
        </div>}    
  </div>
  )
};

export default MoviePageRating;