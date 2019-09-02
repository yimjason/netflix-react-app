import { combineReducers } from 'redux';
import recomReducer from './recomReducer';
import mylistReducer from './mylistReducer';

export default combineReducers({
  mylist: mylistReducer,
 	recom: recomReducer
});
