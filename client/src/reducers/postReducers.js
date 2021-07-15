import { 
  FETCH_ALL, 
  FETCH_BY_SEARCH,
  CREATE, 
  UPDATE, 
  DELETE, 
  LIKE 
} from "../constants/actionTypes";

const initialState = [];

const reducer = (posts = initialState, action) => {
  switch(action.type) {
    case LIKE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case DELETE:
      return posts.filter(post => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case FETCH_ALL:
      return action.payload;
    case FETCH_BY_SEARCH:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      break;
  }
  return posts;
};

export default reducer;