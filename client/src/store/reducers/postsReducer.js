let initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return state;
    case 'CREATE':
      return state;
    default:
      break;
  }
  return state;

};

export default reducer;