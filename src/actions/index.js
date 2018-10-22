import axios from 'axios';

import { FETCH_CHARITY } from './types';

export const fetchCharity = () => async dispatch => {
  const res = await axios.get(`https://api.justgiving.com/fad4af22/v1/charity/183560`);
  dispatch({ type: FETCH_CHARITY, payload: res.data});
}
