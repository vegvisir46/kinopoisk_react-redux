import React from 'react';
import '../moviePage.scss';
import countryArray from '../../../functions/arrayCountre';


function MoviePageStats({moviePage}) {
  return (
    <div className='movie-stats'>
    <div className='movie-stats-item'>
      <span>Тип</span>
      {moviePage.type === "FILM"
      ? <p>Фильм</p>
        : <p>Сериал</p>
      }
    </div>
    <div className='movie-stats-item'>
      <span>Страна</span>
      <p>{countryArray(moviePage.countries)}</p>
    </div>
    {moviePage.ratingAgeLimits !== null
      ? <div className='movie-stats-item'>
          <span>Возраст</span>
          <p>{moviePage.ratingAgeLimits}+</p>
        </div>
      : ''}
    {moviePage.type === 'FILM' 
      ?<div className='movie-stats-item'>
        <span>Год выпуска</span>
        <p>{moviePage.year}</p>
      </div>
      : ''}
    {moviePage.type !== 'FILM' 
      ?<div className='movie-stats-item'>
        <span>Годы выпуска</span>
        <p>{moviePage.startYear}-{moviePage.endYear ? moviePage.endYear : ''}</p>
      </div>
      : <div className='movie-stats-item'>
          <span>Длительность</span>
          <p>{moviePage.filmLength !== null ? moviePage.filmLength : '-'}</p>
        </div>}
  </div>
  )
};

export default MoviePageStats;