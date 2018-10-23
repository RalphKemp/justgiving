import React from 'react';
import Card from './Card';
import Header from './Header';
import styled from 'styled-components';

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#ffffff, #d8c1da);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  position: relative;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <ContentContainer>
        <Header />
        <Card />
      </ContentContainer>
    </LandingContainer>
  );
};

export default Landing;
