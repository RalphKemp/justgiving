import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';
import uuidv1 from 'uuid/v1';
import dateFormat from 'dateformat';

const DonationsCardContainer = styled.div`
  position: relative;
  background: linear-gradient(#f5f5f5, #ced2d0ed);
  box-shadow: rgb(93, 93, 93) 0px 2px 7px -1px;
  margin-top: 10px;
  height: auto;
  border-radius: 5px;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 15px;
  ${media.mid`
    padding: 0px 13px;
  `};
  ${media.tablet`
      padding: 5px 5px 15px 5px;
      width: 40%;
      margin-left: 17px;
  `};
  ${media.desktop`
      width: 45%;
  `};
`;

// donations header is absolute outside of parent div, to match
// InfoCard header.

const DonationsHeader = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  position: absolute;
  margin-top: 15px;
  top: -50px;
  left: 15%;
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
  padding: 4px;
  overflow: hidden;
  box-shadow: rgb(93, 93, 93) 2px 2px 7px -2px;
  ${media.mid`
    margin: 10px 30px 2px 30px;
  `};
  ${media.tablet`
      font-size: 13px;
      margin: 10px 10px 2px 10px;
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

const DateDiv = styled(SubDiv)`
  text-align: left;
  font-size: 12px;
  ${media.mid`
      font-size: 14px;
  `};
`;

const DonationInfo = styled(SubDiv)`
  font-size: 16px;
  font-weight: 600;
  ${media.tablet`
      font-size: 18px;
  `};
  > div {
    display: inline-block;
    > span {
      font-size: 23px;
      color: #b339bb;
      margin-left: 1px;
      ${media.mid`
          font-size: 20px;
      `};
      ${media.tablet`
          font-size: 23px;
      `};
    }
  }
`;

const DonationMessage = styled(SubDiv)`
  font-style: italic;
  text-align: right;
  font-size: 12px;
  margin-top: 5px;
  padding: 10px;
  ${media.mid`
      font-size: 14px;
  `};
  ${media.tablet`
      padding: 6px;
      font-size: 13px;
  `};
`;
// with donations passed as props, we can map each donation to an IndividualDonation
// div. I couldn't figure out why the donationDate was coming back as a different string
// from the json data, so here I have to subStr() and then parse that in a new Date object.
// it's then passed into dateFormat to make it look nicer.

const DonationsCard = ({ donations }) => {
  return (
    <DonationsCardContainer>
      <DonationsHeader>
        <p>Recent Donations</p>
      </DonationsHeader>
      <AllDonations>
        {donations.donations.map(donation => {
          const time = donation.donationDate.substr(6, 13);
          const donationDate = new Date(parseInt(time)).toString();
          return (
            <IndividualDonation key={uuidv1()}>
              <DateDiv>
                {dateFormat(donationDate, 'dddd, mmmm dS, yyyy')}
              </DateDiv>
              <DonationInfo>
                <div>{donation.donorDisplayName} donated <span>£{donation.amount}</span></div>
              </DonationInfo>
              <DonationMessage>
                <p> - "{donation.message}"</p>
              </DonationMessage>
            </IndividualDonation>
          );
        })}
      </AllDonations>
    </DonationsCardContainer>
  );
};

export default DonationsCard;
