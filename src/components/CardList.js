import React, { Component } from 'react';
import styled from 'styled-components';
import * as actions from '../actions';
import { connect } from 'react-redux';

const CardListContainer = styled.div`
  width: 500px;
  height: 300px;
  background-color: grey;
`;

class CardList extends Component {

  async componentDidMount() {
    await this.props.fetchCharity();
    await console.log(this.props.charity)
  }


  render() {
    return <CardListContainer />;
  }
}

function mapStateToProps({ charity }) {
  return { charity };
}

export default connect(
  mapStateToProps,
  actions
)(CardList);
