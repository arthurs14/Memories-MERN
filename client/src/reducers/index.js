import { combineReducers } from 'redux';

import posts from './postReducers';
import auth from './auth';

export default combineReducers({
  posts: posts,
  auth: auth,
});