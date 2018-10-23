import axios from 'axios';

import { FETCH_CHARITY, FETCH_CHARITY_DONATIONS } from './types';

export const fetchCharity = () => async dispatch => {
  const res = await axios.get(`https://api.justgiving.com/fad4af22/v1/charity/183560`, { headers: { 'Content-Type': 'application/json'}});
  dispatch({ type: FETCH_CHARITY, payload: res.data});
}

export const fetchCharityDonations = () => async dispatch => {
  const res = await axios.get(`https://api.justgiving.com/fad4af22/v1/charity/183560/donations`, { headers: { 'Content-Type': 'application/json'}});
  dispatch({ type: FETCH_CHARITY_DONATIONS, payload: res.data});
}
