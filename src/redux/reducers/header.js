const initialState = {
  activePage: null,
  activeLink: null,
};

const header = (state = initialState, action) => {
  if (action.type === 'SET_MENU_PAGE') {
    return {
      ...state,
      activePage: action.payload,
    };
  };
  if (action.type === 'SET_LINK') {
    return {
      ...state,
      activeLink: action.payload,
    };
  };
  
  return state;
};

export default header;
