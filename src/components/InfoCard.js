import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';
import MyCodeLoader from '../helpers/contentLoader';

const InfoCardContainer = styled.div`
  position: relative;
  background-color: #99e0bd;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
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

const InfoBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  width: fit-content;
`;

const CharityInfo = styled.div`
  display: flex;
  flex-direction: column !important;
`;

const SiteLinks = styled.div`

`;

const InfoCard = ({ charityInfo }) => {
  return (
    <InfoCardContainer>
      <div>
        <NameDiv>
          <p>{charityInfo.name}</p>
        </NameDiv>
        <CharityInfo>
          <InfoBox>{charityInfo.description}</InfoBox>
          <InfoBox>{charityInfo.logoAbsoluteUrl}</InfoBox>
          <InfoBox>{charityInfo.thankyouMessage}</InfoBox>
          <SiteLinks>
            <InfoBox><a href={charityInfo.profilePageUrl}>{charityInfo.profilePageUrl}</a></InfoBox>
            <InfoBox><a href={charityInfo.websiteUrl}>{charityInfo.websiteUrl}</a></InfoBox>
          </SiteLinks>
          <InfoBox><a href={"mailto:"+charityInfo.emailAddress}>{charityInfo.emailAddress}</a></InfoBox>
        </CharityInfo>
      </div>
    </InfoCardContainer>
  );
};

export default InfoCard;
