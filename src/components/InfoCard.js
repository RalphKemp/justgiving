import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';
import MyCodeLoader from '../helpers/contentLoader';

// background: linear-gradient(#ffffff, #00772d);

const InfoCardContainer = styled.div`
  position: relative;
  background: linear-gradient(#d4d7d5, #00772d38);
  box-shadow: rgb(93, 93, 93) 0px 2px 7px -1px;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 55px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 10px 10px 20px 10px;
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
  margin-top: 10px;
  ${media.mid`
    left: 0px;
    margin-top: 18px;
  `};
`;

const InfoBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 9px;
  margin: 5px;
  width: fit-content;
  box-shadow: rgb(93, 93, 93) 2px 2px 7px -2px;
  overflow: hidden;
  font-size: 13px;
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

const DescAndImage = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  > img {
    width: 43px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 5px;
    ${media.mid`
      width: 65px;
      left: 55px;
      top: 10px;
  `};
  }
  ${media.mid`
      width: 100%;
      flex-direction: row;
      justify-content: flex-start;
  `};
  ${media.tablet`
      width: 100%;
  `};
`;

const DescDiv = styled(InfoBox)`
  margin-top: 80px;
  ${media.mid`
    margin: 5px 5px 12px 125px;
    font-size: 14px;
  `};
`;

const SiteLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  ${media.mid`
      flex-direction: row;
      width: 100%;
      justify-content: flex-end;
  `};
`;

const SubSiteLink = styled(InfoBox)`
  width: 60%;
  height: 16px;
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
          <DescAndImage>
            <img src={charityInfo.logoAbsoluteUrl} />
            <DescDiv>{charityInfo.description}</DescDiv>
          </DescAndImage>

          <InfoBox>{charityInfo.thankyouMessage}</InfoBox>

          <SiteLinks>
            <SubSiteLink>
              <a href={charityInfo.profilePageUrl}>View charity page</a>
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
