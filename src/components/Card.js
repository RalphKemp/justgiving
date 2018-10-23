import React, { Component } from 'react';
import styled from 'styled-components';
import * as actions from '../actions';
import { connect } from 'react-redux';
import InfoCard from './InfoCard';
import DonationsCard from './DonationsCard';

const CardContainer = styled.div`

  background-color: white;
  div {
    display: flex;
  }
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  async componentDidMount() {
    await this.props.fetchCharity();
    await this.props.fetchCharityDonations();
    await this.setState({ loaded: true });
  }

  renderCards() {
    const { charity, donations } = this.props;
    return (
      <CardContainer>
        {this.state.loaded ? (
          <div>

          </div>
        ) : null}
      </CardContainer>
    );
  }

  render() {
    return <div>{this.renderCards()}</div>;
  }
}

function mapStateToProps({ charity, donations }) {
  return { charity, donations };
}

export default connect(
  mapStateToProps,
  actions
)(Card);
