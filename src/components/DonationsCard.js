import React from 'react';
import styled from 'styled-components';

const DonationsCardContainer = styled.div`
  background-color: #e47272;
  width: 50%;
  height: 500px;
`;

const DonationsCard = ({ donations }) => {
  return (
    <DonationsCardContainer>
      there are {donations.donations.length} recent donations.
    </DonationsCardContainer>
  );
}

export default DonationsCard;
