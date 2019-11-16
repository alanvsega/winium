import { combineReducers } from 'redux';

import user from './UserReducer';
import wineList from './WineListReducer';

const winium = combineReducers({
  user,
  wineList,
});

export default winium;
