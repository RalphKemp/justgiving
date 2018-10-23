import { FETCH_CHARITY_DONATIONS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CHARITY_DONATIONS:
      return action.payload;
    default:
      return state;
  }
}
