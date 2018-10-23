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
  ${media.tablet`
      width: 50%;
  `};
`;

const DonationsCard = ({ donations }) => {
  return (
    <DonationsCardContainer>
      there are {donations.donations.length} recent donations.
    </DonationsCardContainer>
  );
};

export default DonationsCard;
