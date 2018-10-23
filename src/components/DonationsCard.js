import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';

const DonationsCardContainer = styled.div`
  background-color: rgb(0, 119, 45);
  width: 100%;
  height: auto;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  ${media.tablet`
      width: 50%;
  `};
`;

const DonationsHeader = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 20px;
`;

const AllDonations = styled.div`
  overflow: hidden;
`;

const IndividualDonation = styled.div`
  font-size: 12px;
  background-color: white;
  color: black;
  margin: 5px;
  border-radius: 10px;
  padding: 5px;
`;

const DonationsCard = ({ donations }) => {
  return (
    <DonationsCardContainer>
      <DonationsHeader>
        <p>Donations</p>
      </DonationsHeader>
      <AllDonations>
        {donations.donations.map(donation => {
          return (
            <IndividualDonation>
              {donation.amount}
              {donation.donationDate}
              {donation.donorDisplayName}
              {donation.message}
              {donation.imageUrl}
            </IndividualDonation>
          )
        })}
      </AllDonations>
    </DonationsCardContainer>
  );
};

export default DonationsCard;
