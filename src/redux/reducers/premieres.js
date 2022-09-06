const initialState = {
  premieres: [],
  pagePrem: 1,
  totalPremiers: 200,
  isLoaded: false,
};

const premieres = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PREMIERS':
    return {
      ...state,
      premieres: action.payload,
      isLoaded: true
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
    default:
      return state;
  };
};
export default premieres;