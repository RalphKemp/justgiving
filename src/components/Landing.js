import React from 'react';
import CardsContainer from './CardsContainer';
import Header from './Header';
import styled from 'styled-components';
import { media } from '../helpers/sizing';

const LandingContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: linear-gradient(#ffffff, #fef7ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// ContentContainer used as a useful guide for responsive design.
// - is used as a basic basis for the main widths of content.

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 310px;
  height: auto;
  min-height: 400px;
  margin: 120px 0px;
  position: relative;
  ${media.mid`
      align-items: center;
      width: 550px;
  `};
  ${media.tablet`
      width: 1000px;
  `};
  ${media.desktop`
      width: 1200px;
  `};
`;

const Landing = () => {
  return (
    <LandingContainer>
      <ContentContainer>
        <CardsContainer />
      </ContentContainer>
    </LandingContainer>
  );
};

export default Landing;
