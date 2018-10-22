import React from 'react';
import CardList from './CardList';
import styled from 'styled-components';

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
`;

const Landing =() => {
  return (
    <LandingContainer>
      <CardList />
    </LandingContainer>
  )
}
