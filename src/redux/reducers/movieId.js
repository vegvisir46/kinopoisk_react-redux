const initialState = {
  id: null,
  moviePage: [],
  movieAbout: false,
  staffId: null,
};

const movieId = (state = initialState, action) => {
  if (action.type === 'SET_MOVIE_ID') {
    return {
      ...state,
      id: action.payload,
    };
  };
  if (action.type === 'SET_MOVIE_PAGE') {
    return {
      ...state,
      moviePage: action.payload,
    };
  };  
  if (action.type === 'SET_MOVIE_ABOUT') {
    return {
      ...state,
      movieAbout: action.payload,
    };
  };  
  if (action.type === 'SET_STAFF_ID') {
    return {
      ...state,
      staffId: action.payload,
    };
  };
  
  return state;
};

export default movieId;
