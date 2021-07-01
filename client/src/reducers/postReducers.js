const initialState = [];

const reducer = (posts = initialState, action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      break;
  }
  return posts;
};

export default reducer;