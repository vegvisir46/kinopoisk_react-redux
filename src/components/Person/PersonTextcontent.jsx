import React from 'react';
import './person.scss';

function PersonTextcontent({personInfo}) {
  return (
    <div className='person-page-textcontent'>
    <div className='person-about'>
      <div className='person-about-item'>
        <p>Дата рождения: </p>
        <span>{new Date(personInfo.birthday).toLocaleDateString()}</span>
      </div>
      {personInfo.death 
        ?<div className='person-about-item'>
          <p>Дата смерти: </p>
          <span>{new Date(personInfo.death).toLocaleDateString()}</span>
        </div>
        : ''}
      {<div className='person-about-item'>
        <p>Возраст: </p>
        <span>{
          personInfo.death 
            ? personInfo.age 
            : new Date().getFullYear() - new Date (personInfo.birthday).getFullYear()}
        </span>
      </div>}
      {personInfo.growth 
        ?<div className='person-about-item'>
          <p>Рост: </p>
          <span>{personInfo.growth}</span>
        </div>
        : ''}
      {personInfo.birthplace 
        ?<div className='person-about-item'>
          <p>Место рождения: </p>
          <span>{personInfo.birthplace}</span>
        </div>
        : ''}
      {personInfo.facts>0
        ?<div className='person-about-item'>
          <p>Интересные факты: </p>
          <span>{personInfo.facts}</span>
        </div>
        : ''}
    </div>
  </div>
  )
};

export default PersonTextcontent;