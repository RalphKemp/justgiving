import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';
import uuidv1 from 'uuid/v1';
import dateFormat from 'dateformat';

const DonationsCardContainer = styled.div`
  position: relative;
  background-color: #ced2d0;
  box-shadow: rgb(93, 93, 93) 2px 2px 7px -2px;
  width: 100%;
  margin-top: 10px;
  height: auto;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  ${media.tablet`
      width: 40%;
      margin-left: 17px;
  `};
  ${media.desktop`
      width: 45%;
  `};
`;

const DonationsHeader = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  position: absolute;
  margin-top: 18px;
  top: -50px;
  left: 75px;
  color: black;
  font-size: 23px;
  ${media.mid`
    left: 0px;
  `};
`;

const AllDonations = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndividualDonation = styled.div`
  font-size: 12px;
  background-color: white;
  color: black;
  margin: 10px 10px 2px 10px;
  border-radius: 5px;
  padding: 10px;
  overflow: hidden;
  box-shadow: rgb(93, 93, 93) 2px 2px 7px -2px;
  ${media.tablet`
      font-size: 13px;
  `};
  ${media.desktop`
      font-size: 14px;
  `};
  > div {
    margin: 5px;
  }
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const DonationInfo = styled(SubDiv)`
  font-size: 16px;
  font-weight: 500;
`;

const DonationMessage = styled(SubDiv)`
  font-style: italic;
`;
// for some reason date from api is coming back weird, so have to substr()

const DonationsCard = ({ donations }) => {
  return (
    <DonationsCardContainer>
      <DonationsHeader>
        <p>Donations</p>
      </DonationsHeader>
      <AllDonations>
        {donations.donations.map(donation => {
          const time = donation.donationDate.substr(6, 13);
          const donationDate = new Date(parseInt(time)).toString();
          return (
            <IndividualDonation key={uuidv1()}>
              <SubDiv>
                {dateFormat(donationDate, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
              </SubDiv>
              <DonationInfo>
                {donation.donorDisplayName} donated £{donation.amount}
              </DonationInfo>
              <DonationMessage><p> - "{donation.message}"</p></DonationMessage>
            </IndividualDonation>
          );
        })}
      </AllDonations>
    </DonationsCardContainer>
  );
};

export default DonationsCard;
