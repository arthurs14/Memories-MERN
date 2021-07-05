const initialState = [];

const reducer = (posts = initialState, action) => {
  switch(action.type) {
    case 'UPDATE':
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
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