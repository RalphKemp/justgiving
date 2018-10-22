import React, { Component } from "react";
import styled from "styled-components";

const CardListContainer = styled.div`
  width: 500px;
  height: 300px;
  background-color: grey;
`;

class CardList extends Component {
  render() {
    return <CardListContainer />;
  }
}

export default CardList;
