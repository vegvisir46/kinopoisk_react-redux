const initialState = {
  seasonInfo: false,
  seasonsList: [],
  sliderIndex: 0,
  sliderImage: [],
  awardShow: false,
  awardsFilm: [],
  budget: [],
};

const infoAboutFilm = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEASON_INFO':
      return {
        ...state,
        seasonInfo: action.payload,
      };
    case 'SET_SEASON_LIST':
      return {
        ...state,
        seasonsList: action.payload,
      };
    case 'SET_SLIDER_INDEX':
    return {
      ...state,
      sliderIndex: action.payload,
    };
    case 'SET_SLIDER_IMAGE':
    return {
      ...state,
      sliderImage: action.payload,
    };
    case 'SET_AWARD_SHOW':
      return {
        ...state,
        awardShow: action.payload,
      };      
    case 'SET_AWARDS_FILM':
      return {
        ...state,
        awardsFilm: action.payload,
      };
    case 'SET_BOX':
      return {
        ...state,
        budget: action.payload,
    };
    default:
      return state;
  }
};

export default infoAboutFilm;
