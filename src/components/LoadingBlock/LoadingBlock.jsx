import React from 'react';
import loading from '../../img/loadingPage/giphy.gif';
import './loadingBlock.scss';

function LoadingBlock() {
  return (    
    <div className='loading'>
      <p>Идет загрузка...</p>
      <img src={loading} alt='Камера'/> 
    </div>
  )
};

export default LoadingBlock;