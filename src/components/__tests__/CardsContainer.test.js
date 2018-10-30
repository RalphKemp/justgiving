import React from 'react';
import { shallow } from 'enzyme';
// using curly braces to import component without state.
import { CardsContainer } from '../CardsContainer.js';

describe('CardsContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CardsContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
