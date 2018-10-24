import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';
import uuidv1 from 'uuid/v1';
import dateFormat from "dateformat";

const DonationsCardContainer = styled.div`
  position: relative;
  background-color: rgb(0, 119, 45);
  width: 100%;
  margin-top: 10px;
  height: auto;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
  display: flex;
  flex-direction: column !important;
  padding-bottom: 15px;
  ${media.tablet`
      width: 40%;
      margin-left: 17px;
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
  flex-direction: column !important;
`;

const IndividualDonation = styled.div`
  font-size: 12px;
  background-color: white;
  color: black;
  margin: 5px;
  border-radius: 10px;
  padding: 5px;
  overflow: hidden;
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
              {dateFormat(donationDate, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
              <br />
              {donation.donorDisplayName} donated £{donation.amount}
              <br />
              {donation.message}
              <br />
              {donation.imageUrl}
            </IndividualDonation>
          );
        })}
      </AllDonations>
    </DonationsCardContainer>
  );
};

export default DonationsCard;
