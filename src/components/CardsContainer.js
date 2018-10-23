import React, { Component } from 'react';
import styled from 'styled-components';
import * as actions from '../actions';
import { connect } from 'react-redux';
import InfoCard from './InfoCard';
import DonationsCard from './DonationsCard';
import { media } from '../helpers/sizing';

const MainContainer = styled.div`
  width: 80%;
  div {
    display: flex;
    flex-direction: column;

    ${media.tablet`
      flex-direction: row;
    `};
  }
`;

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  async componentDidMount() {
    await this.props.fetchCharity();
    await this.props.fetchCharityDonations();
    await this.setState({ loaded: true });
  }

  render() {
    const { charity, donations } = this.props;
    console.log(charity.themeColour);
    return (
      <MainContainer class="heyhe">
        {this.state.loaded ? (
          <div>
            <InfoCard charityName={charity.name} />
            <DonationsCard donations={donations} />
          </div>
        ) : null}
      </MainContainer>
    );
  }
}

function mapStateToProps({ charity, donations }) {
  return { charity, donations };
}

export default connect(
  mapStateToProps,
  actions
)(CardsContainer);
