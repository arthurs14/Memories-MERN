const reducer = (posts = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return posts;
    case 'CREATE':
      return posts;
    default:
      break;
  }
};

export default reducer;