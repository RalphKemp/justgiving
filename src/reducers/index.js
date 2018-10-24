import { combineReducers } from 'redux';
import charitiesReducer from './charitiesReducer';
import donationsReducer from './donationsReducer';

// combining reducers, which then will update our redux store (application level state.)
export default combineReducers({
  charity: charitiesReducer,
  donations: donationsReducer
});
