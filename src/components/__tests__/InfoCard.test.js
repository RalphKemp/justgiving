import React from 'react';
import { shallow } from 'enzyme';
// using curly braces to import component without state.
import { InfoCard } from '../InfoCard.js';

describe('InfoCard', () => {

  const defaultProps = {
    name: 'charity',
    logoAbsoluteUrl: 'url',
    description: 'this is the desc',
    thankyouMessage: 'hello',
    profilePageUrl: 'url2',
    websiteUrl: 'url3',
    emailAddress: '@@'
  }

  it('renders correctly', () => {
    const wrapper = shallow(<InfoCard charityInfo={defaultProps}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
