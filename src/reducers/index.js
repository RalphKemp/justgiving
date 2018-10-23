import { combineReducers } from 'redux';
import charitiesReducer from './charitiesReducer';

export default combineReducers({
  charity: charitiesReducer
});
