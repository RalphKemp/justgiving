import axios from 'axios';
import { FETCH_CHARITY, FETCH_CHARITY_DONATIONS } from './types';

// Here are our actions creators to fetch api data. We dispatch our action (with the
// reponse data as our payload ) to our reducers. - we're manually controlling dispatch
// here with redux thunk.

export const fetchCharity = () => async dispatch => {
  const res = await axios.get(
    `https://api.justgiving.com/fad4af22/v1/charity/183560`,
    { headers: { 'Content-Type': 'application/json' } }
  );
  dispatch({ type: FETCH_CHARITY, payload: res.data });
};

export const fetchCharityDonations = () => async dispatch => {
  const res = await axios.get(
    `https://api.justgiving.com/fad4af22/v1/charity/183560/donations`,
    { headers: { 'Content-Type': 'application/json' } }
  );
  dispatch({ type: FETCH_CHARITY_DONATIONS, payload: res.data });
};
