import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import './slider.scss';
import { fetchSliderImage, setSliderIndex } from '../../../redux/actions/infoAboutFilm';


function Slider({id, movieAbout}) {
  const dispatch = useDispatch();
  const {sliderIndex, sliderImage} = useSelector(({infoAboutFilm}) => infoAboutFilm);

  const prevImgIndex = sliderIndex > 0 ? sliderIndex - 1 : sliderImage.length - 1;
  const nextImgIndex = sliderIndex === sliderImage.length - 1 ? 0 : sliderIndex + 1;

  const prevplusImgIndex =  sliderIndex > 1 ? sliderIndex - 2 
      : (sliderIndex > 0 ? sliderImage.length - 1 : sliderImage.length - 2);
      
  const nextplusImgIndex = sliderIndex === sliderImage.length - 1 ? 1 
      : (sliderIndex + 2 === sliderImage.length ? 0 : sliderIndex + 2);

  const onClicknextSlide = React.useCallback (() => {
    dispatch(setSliderIndex(sliderIndex+1 === sliderImage.length - 1 ? 0 : sliderIndex + 1))
  }, [sliderIndex]);

  const onClickpreviousSlide = React.useCallback (() => {
    dispatch( setSliderIndex(sliderIndex-1 > 0 ? sliderIndex - 1 : sliderImage.length - 1))
  }, [sliderIndex]);

  React.useEffect (() => {
    dispatch(fetchSliderImage(id))
  }, [movieAbout]);
  
  return (
    sliderImage.length >0 
      ?<div className='film-item film-slider'>
        <a className="previous" onClick={onClickpreviousSlide}>&#10094;</a>
        <div className="item-slide"
          key={prevplusImgIndex}>
          <img src={sliderImage.length && sliderImage[prevplusImgIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <div className="item-slide"
          key={prevImgIndex}>
          <img src={sliderImage.length && sliderImage[prevImgIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <div className="item-slide"
          key={sliderIndex}>
          <img src={sliderImage.length && sliderImage[sliderIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <div className="item-slide"
          key={nextImgIndex}>
          <img src={sliderImage.length && sliderImage[nextImgIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <div className="item-slide"
          key={nextplusImgIndex}>
          <img src={sliderImage.length && sliderImage[nextplusImgIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <a className="next" onClick={onClicknextSlide}>&#10095;</a>
      </div>
      : ''
  )
}

export default Slider;