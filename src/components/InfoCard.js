import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';

const InfoCardContainer = styled.div`
  position: relative;
  background-color: #99e0bd;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  ${media.tablet`
      width: 50%;
  `};
`;

const NameDiv = styled.div`
  position: relative;
  top: -50px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  ${media.tablet`
      text-align: left;
  `};
`;

const InfoCard = ({ charityName }) => {
  return (
    <InfoCardContainer>
      <NameDiv>
        <h3>{charityName}</h3>
      </NameDiv>
    </InfoCardContainer>
  );
};

export default InfoCard;
