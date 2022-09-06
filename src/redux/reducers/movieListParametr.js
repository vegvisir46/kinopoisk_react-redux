const initialState = {
  movie: [],
  current: 1,
  totalMovie: 400,
  isLoaded: false,
};

const movieListParametr = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_LIST':
      return {
        ...state,
        movie: action.payload,
        isLoaded: true
      };
    case 'PAGE_NUMBER':
      return {
        ...state,
        current: action.payload,
      };
      case 'TOTAL_MOVIE':
    return {
      ...state,
      totalMovie: action.payload,
    };
    case 'SET_PREMIERS':
    return {
      ...state,
      premieres: action.payload,
    };
    case 'PAGE_NUMBER_PREMIER':
    return {
      ...state,
      pagePrem: action.payload,
    };
    case 'TOTAL_PREMIERS':
    return {
      ...state,
      totalPremiers: action.payload,
    };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  };
};
export default movieListParametr;