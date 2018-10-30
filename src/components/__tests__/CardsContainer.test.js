import React from 'react';
import { shallow, mock } from 'enzyme';
// using curly braces to import component without state.
import ConnectedCardsContainer, { CardsContainer } from '../CardsContainer.js';
import configureStore from 'redux-mock-store';

describe('CardsContainer', () => {
  const mockStore = configureStore();

  it('renders correctly', () => {
    const wrapper = shallow(<CardsContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('renders props', async () => {
  //   const store = mockStore({});
  //   const wrapper = shallow(<ConnectedCardsContainer store={store} />).props();
  //   console.log(wrapper);
  // });
});
