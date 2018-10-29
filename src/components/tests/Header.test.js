import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header.js';


test('thing to work', () => {
  const component = shallow(<Header />);
  expect(component.exists('img')).to.equal(true);
})
