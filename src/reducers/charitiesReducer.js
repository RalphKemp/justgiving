import { FETCH_CHARITY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CHARITY:
      return action.payload;
    default:
      return state;
  }
}
