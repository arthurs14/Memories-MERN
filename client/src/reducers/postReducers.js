const reducer = (posts = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return posts;
    default:
      break;
  }
};

export default reducer;