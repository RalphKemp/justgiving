import { combineReducers } from 'redux';
import charitiesReducer from './charitiesReducer';
import donationsReducer from './donationsReducer';

export default combineReducers({
  charity: charitiesReducer,
  donations: donationsReducer
});
