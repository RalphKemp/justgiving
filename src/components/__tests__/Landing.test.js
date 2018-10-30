import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing.js';

describe('Landing', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  });
});
