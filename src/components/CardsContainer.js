import React, { Component } from 'react';
import styled from 'styled-components';
import * as actions from '../actions';
import { connect } from 'react-redux';
import InfoCard from './InfoCard';
import DonationsCard from './DonationsCard';
import { media } from '../helpers/sizing';
import MyCodeLoader from '../helpers/contentLoader';
import { Transition } from 'react-spring';
import Header from './Header';

const MainContainer = styled.div`
  width: 90%;
  > div {
    display: flex;
    flex-direction: column;
    ${media.tablet`
      flex-direction: row;
    `};
  }
`;

// exporting here for tests of component without state.

export class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  // when component mounts we fetch both the Charity information and it's donations.
  // once this data is fetched we then set the state loaded to true. In our render method
  // if the state is loaded, we have a transition which fades the cards in, else there's
  // a react spinner, which is imported in from MyCodeLoader helper.

  // From our mapStateToProps function we now can store that data as props, and pass them
  // to our function components, InfoCard and DonationsCard.
  async componentDidMount() {
    await this.props.fetchCharity();
    await this.props.fetchCharityDonations();
    await this.setState({ loaded: true });
  }

  render() {
    const { charity, donations } = this.props;
    console.log(donations);
    console.log(charity);
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
                    <Header />
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
