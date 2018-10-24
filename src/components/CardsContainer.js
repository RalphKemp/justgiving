import React, { Component } from 'react';
import styled from 'styled-components';
import * as actions from '../actions';
import { connect } from 'react-redux';
import InfoCard from './InfoCard';
import DonationsCard from './DonationsCard';
import { media } from '../helpers/sizing';
import MyCodeLoader from '../helpers/contentLoader';
import { Transition } from 'react-spring';

const MainContainer = styled.div`
  width: 90%;
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
    console.log(donations);
    return (
      <MainContainer>
        {this.state.loaded ? (
          <Transition
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {this.state.loaded
              ? styles => (
                  <div style={styles}>
                    <InfoCard charityInfo={charity} />
                    <DonationsCard donations={donations} />
                  </div>
                )
              : null}
          </Transition>
        ) : (
          <MyCodeLoader />
        )}
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
