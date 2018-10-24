import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';
import MyCodeLoader from '../helpers/contentLoader';

const InfoCardContainer = styled.div`
  position: relative;
  background-color: #99e0bd;
  box-shadow: rgb(93, 93, 93) 0px 2px 7px -1px;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 55px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 10px 10px 120px 10px;
  ${media.tablet`
      width: 65%;
      padding: 10px;
      margin-right: 5px;
  `};
   ${media.desktop`
      margin-right: 10px;
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
  box-shadow: rgb(93, 93, 93) 2px 2px 7px -2px;
  overflow: hidden;
  font-size: 12px;
  ${media.tablet`
      font-size: 13px;
      padding: 10px;
  `};
  ${media.desktop`
      font-size: 14px;
      padding: 13px;
  `};
`;

const CharityInfo = styled.div`
  display: flex;
  flex-direction: column !important;
  overflow: hidden;
`;

const SiteLinks = styled.div`
  position: absolute;
  bottom: 10px;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center
  ${media.mid`
      flex-direction: row;
      width: 100%;
      justify-content: flex-start;
  `};
`;

const SubSiteLink = styled(InfoBox)`
  width: 80%;
  height: 15px;
  opacity: 0.9;
  a {
    text-decoration: none;
    font-weight: 500;
  }
  :hover {
    cursor: pointer;
    opacity: 1;
  }
   ${media.mid`
      width: fit-content;
      padding-left: 8px;
      a {
        font-size: 13px;
      }
  }
  `};
`;

// CharityInfo passed as props, various data being used, not all of it nessecary.

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
            <SubSiteLink>
              <a href={charityInfo.profilePageUrl}>
                View charity page
              </a>
            </SubSiteLink>
            <SubSiteLink>
              <a href={charityInfo.websiteUrl}>Visit site</a>
            </SubSiteLink>
            <SubSiteLink>
              <a href={'mailto:' + charityInfo.emailAddress}>contact</a>
            </SubSiteLink>
          </SiteLinks>

        </CharityInfo>
      </div>
    </InfoCardContainer>
  );
};

export default InfoCard;
