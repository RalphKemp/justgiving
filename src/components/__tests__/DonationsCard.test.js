import React from 'react';
import { shallow } from 'enzyme';
// using curly braces to import component without state.
import { DonationsCard } from '../DonationsCard.js';

describe('DonationsCard', () => {

  const defaultProps = {
    donations: [
      {
        amount: 55,
        donationDate: 'march 2018',
        donorDisplayName: 'ralph',
        message: 'Our deepest condolences'
      },
      {
        amount: 55,
        donationDate: 'march 2018',
        donorDisplayName: 'ralph',
        message: 'Our deepest condolences'
      },
      {
        amount: 55,
        donationDate: 'march 2018',
        donorDisplayName: 'ralph',
        message: 'Our deepest condolences'
      },
      {
        amount: 55,
        donationDate: 'march 2018',
        donorDisplayName: 'ralph',
        message: 'Our deepest condolences'
      }
    ]
  }

  it('renders correctly', () => {
    const wrapper = shallow(<DonationsCard donations={defaultProps}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
