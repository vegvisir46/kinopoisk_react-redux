const initialState = {
  genresValue: [],
  countryValue: [],
};

const filtersValue = (state = initialState, action) => {
  if (action.type === 'GENRES_VALUE') {
    return {
      ...state,
      genresValue: action.payload,
    };
  };
  if (action.type === 'COUNTRY_VALUE') {
    return {
      ...state,
      countryValue: action.payload,
    };
  };
  
  return state;
};

export default filtersValue;