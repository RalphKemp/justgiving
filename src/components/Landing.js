import React from 'react';
import CardsContainer from './CardsContainer';
import Header from './Header';
import styled from 'styled-components';

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#ffffff, #f5f5f5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: auto;
  min-height: 400px;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <ContentContainer>
        <Header />
        <CardsContainer />
      </ContentContainer>
    </LandingContainer>
  );
};

export default Landing;
