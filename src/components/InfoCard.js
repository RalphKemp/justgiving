import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';
import MyCodeLoader from '../helpers/contentLoader';

// #b339bb

const InfoCardContainer = styled.div`
  position: relative;
  background: linear-gradient(#d4d7d5, #00772d38);
  box-shadow: rgb(93, 93, 93) 0px 2px 7px -1px;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 55px;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  padding: 10px 10px 20px 10px;
  ${media.tablet`
      width: 65%;
      padding: 10px;
      margin-right: 5px;
      height: fit-content;
      padding-bottom: 14px;
  `};
  ${media.desktop`
      margin-right: 10px;
  `};
`;

const NameDiv = styled.div`
  position: absolute;
  top: -50px;
  left: 60px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 23px;
  margin-top: 10px;
  ${media.mid`
    left: 0px;
    margin-top: 15px;
  `};
`;

const InfoBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  width: fit-content;
  box-shadow: rgb(93, 93, 93) 2px 2px 7px -2px;
  overflow: hidden;
  font-size: 14px;
  ${media.tablet`
      font-size: 13px;
      padding: 10px;
  `};
  ${media.desktop`
      font-size: 15px;
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
    ${media.tablet`
      width: 79px;
      left: 61px;
      top: 14px;
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
    margin: 5px 5px 16px 125px;
    font-size: 15px;
  `};
  ${media.tablet`
    padding: 12px;
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
  opacity: 0.8;
  background-color: ${props => (props.purple ? '#b339bb' : '#00772d')};
  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
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
    `} ${media.tablet`
       > a {
        display: block;
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
            <SubSiteLink purple>
              <a href={charityInfo.profilePageUrl}>View charity page</a>
            </SubSiteLink>
            <SubSiteLink>
              <a href={charityInfo.websiteUrl}>Visit site</a>
            </SubSiteLink>
            <SubSiteLink>
              <a href={'mailto:' + charityInfo.emailAddress}>Contact</a>
            </SubSiteLink>
          </SiteLinks>
        </CharityInfo>
      </div>
    </InfoCardContainer>
  );
};

export default InfoCard;
