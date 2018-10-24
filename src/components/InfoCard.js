import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';
import MyCodeLoader from '../helpers/contentLoader';

const InfoCardContainer = styled.div`
  position: relative;
  background-color: #99e0bd;
  height: auto;
  border-radius: 5px;
  margin-bottom: 55px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 13px;
  padding: 10px;
  ${media.tablet`
      width: 65%;
  `};
`;

const NameDiv = styled.div`
  position: absolute;
  top: -50px;
  left: 60px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 23px;
  margin-top: 18px;
  ${media.mid`
    left: 0px;
  `};
`;

const CharityInfo = styled.div``;

const InfoCard = ({ charityInfo }) => {
  return (
    <InfoCardContainer>
      <div>
        <NameDiv>
          <p>{charityInfo.name}</p>
        </NameDiv>
        <CharityInfo>{charityInfo.description}</CharityInfo>
      </div>
    </InfoCardContainer>
  );
};

export default InfoCard;
