const initialState = {
  type: null,
  genre: null,
  country: null,
  month: null,
  year: null,
  search: null,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY_TYPE':
      return {
        ...state,
        type: action.payload,
      };
    case 'SET_SORT_BY_GENRE':
      return {
        ...state,
        genre: action.payload,
      };
      case 'SET_SORT_BY_COUNTRY':
    return {
      ...state,
      country: action.payload,
    };
    case 'SET_MONTH':
    return {
      ...state,
      month: action.payload,
    };
    case 'SET_YEAR':
    return {
      ...state,
      year: action.payload,
    };
    case 'SET_SEARCH':
    return {
      ...state,
      search: action.payload,
    };
    default:
      return state;
  };
};
export default filters;